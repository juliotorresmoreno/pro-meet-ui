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
import { useAccount } from "@/hooks/useAccount";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth";

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

  const { accessToken } = useAuthStore();
  const { data, isLoading } = useAccount(accessToken);

  const {
    register,
    setValue,
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

  useEffect(() => {
    if (isLoading || !data) return;
    setValue("name", data.name);
    setValue("email", data.email);
    setValue("language", data.language || language);
    setValue("timezone", data.timezone || moment.tz.guess());
    setValue("newsletter", data.newsletter || false);
  }, [data, isLoading, setValue, language]);

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
                  disabled
                  icon={<FaEnvelope />}
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="language">{t.language}</Label>
                  <select
                    className="form-control"
                    id="language"
                    {...register("language")}
                  >
                    <option value="en">{t.languages.en}</option>
                    <option value="es">{t.languages.es}</option>
                    <option value="fr">{t.languages.fr}</option>
                    <option value="ja">{t.languages.ja}</option>
                    <option value="zh">{t.languages.zh}</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="timezone">{t.timezone}</Label>
                  <select
                    className="form-control"
                    id="timezone"
                    {...register("timezone")}
                  >
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <FormGroup>
                  <Label>{t.plan}</Label>
                  <Input disabled value="Pro" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>{t.joined}</Label>
                  <Input
                    disabled
                    value={data ? moment(data?.createdAt).format("LL") : ""}
                  />
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
