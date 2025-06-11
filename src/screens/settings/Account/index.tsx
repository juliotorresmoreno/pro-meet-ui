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
  CardBody,
} from "reactstrap";
import { FaUser, FaEnvelope, FaTimes } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveButton from "@/components/SaveButton";
import { translations } from "./translations";
import moment from "moment-timezone";

const accountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  language: z.string(),
  timezone: z.string(),
  newsletter: z.boolean().optional(),
});

type AccountFormData = z.infer<typeof accountSchema>;

interface AccountProps {
  readonly language: string;
}

const timezones = moment.tz.names();

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
    defaultValues: {
      language,
      timezone: moment.tz.guess(),
    },
  });

  const onSubmit = (data: AccountFormData) => {
    const result = accountSchema.safeParse(data);
    if (!result.success) {
      const errs = result.error.flatten().fieldErrors;
      if (errs.name)
        setError("name", { type: "manual", message: errs.name[0] });
      if (errs.email)
        setError("email", { type: "manual", message: errs.email[0] });
    } else {
      console.log("Account saved", data);
    }
  };

  return (
    <>
      <h2 className="mb-4">{t.account}</h2>
      <Card className="p-2 shadow-sm border-0">
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <FormInput
                  id="name"
                  label={t.fullName}
                  type="text"
                  register={register("name")}
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

            <Row className="mt-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="language">{t.language}</Label>
                  <Input id="language" type="select" {...register("language")}>
                    {Object.entries(translations).map(([key, val]) => (
                      <option key={key} value={key}>
                        {val.language}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="timezone">{t.timezone}</Label>
                  <Input id="timezone" type="select" {...register("timezone")}>
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <FormGroup>
                  <Label>{t.plan}</Label>
                  <Input plaintext readOnly value="Pro" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>{t.joined}</Label>
                  <Input plaintext readOnly value="2023-08-15" />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup check className="mt-3">
              <Input
                type="checkbox"
                id="newsletter"
                {...register("newsletter")}
              />
              <Label check for="newsletter">
                {t.newsletter}
              </Label>
            </FormGroup>

            <div className="d-flex justify-content-end mt-4 gap-2">
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
        </CardBody>
      </Card>
    </>
  );
}
