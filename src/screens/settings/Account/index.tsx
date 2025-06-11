// app/dashboard/settings/Account.tsx
"use client";

import {
  Card,
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { FaUser, FaEnvelope, FaLock, FaTimes } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveButton from "@/components/SaveButton";
import { translations } from "./translations";

const accountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be 6+ chars").optional(),
});

type AccountFormData = z.infer<typeof accountSchema>;

interface AccountProps {
  readonly language: string;
}

export default function Account({ language }: AccountProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormData>({
    mode: "onSubmit",
    resolver: zodResolver(accountSchema),
  });

  const onSubmit = (data: AccountFormData) => {
    const result = accountSchema.safeParse(data);
    if (!result.success) {
      const errs = result.error.flatten().fieldErrors;
      if (errs.name)
        setError("name", { type: "manual", message: errs.name[0] });
      if (errs.email)
        setError("email", { type: "manual", message: errs.email[0] });
      if (errs.password)
        setError("password", { type: "manual", message: errs.password[0] });
    } else {
      console.log("Account saved", data);
      // Aquí iría la llamada a la API
    }
  };

  return (
    <>
      <h2 className="mb-4">{t.account}</h2>
      <Card className="p-4 shadow-sm border-0">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <FormInput
                id="name"
                label={t.fullName}
                type="text"
                register={register("name", {
                  required: t.fullName + " is required",
                })}
                error={errors.name}
                placeholder={t.fullName}
                icon={<FaUser />}
              />
            </Col>
            <Col md={6}>
              <FormInput
                id="email"
                label={t.email}
                type="email"
                register={register("email")}
                error={errors.email}
                placeholder={t.email}
                icon={<FaEnvelope />}
              />
            </Col>
          </Row>

          <FormGroup>
            <Label>{t.password}</Label>
            <Input
              type="password"
              {...register("password")}
              placeholder={t.password}
              icon={<FaLock />}
            />
          </FormGroup>

          <div className="d-flex justify-content-end mt-3 gap-2">
            <SaveButton />
            <Button
              color="danger"
              className="d-flex align-items-center"
              onClick={() => console.log("Cancel account changes")}
            >
              <FaTimes className="me-1" /> {t.cancel}
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
