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
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaLanguage,
  FaLocationArrow,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaDatabase,
  FaGlobe,
  FaLink,
  FaPython,
  FaPlus,
  FaTrash,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { FormInput } from "@/components/FormInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveButton from "@/components/SaveButton";
import { translations } from "./translations";

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").optional(),
  phone: z.string().optional(),
  profession: z.string().optional(),
  summary: z.string().optional(),
  website: z.string().url("Invalid URL").optional(),
  location: z.string().optional(),
  languages: z
    .array(
      z.object({
        name: z.string().min(1, "Language is required"),
        level: z.enum(["Basic", "Intermediate", "Advanced", "Native"]),
      })
    )
    .optional(),
  links: z
    .array(
      z.object({
        label: z.string().min(1, "Label is required"),
        url: z.string().url("Invalid URL"),
      })
    )
    .optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileProps {
  readonly language: string;
}

export default function Profile({ language }: ProfileProps) {
  const t = translations[language as keyof typeof translations] || translations.en;

  const socialOptions = [
    { label: "Facebook", icon: <FaFacebook /> },
    { label: "Twitter", icon: <FaTwitter /> },
    { label: "Instagram", icon: <FaInstagram /> },
    { label: "TikTok", icon: <FaTiktok /> },
    { label: "GitHub", icon: <FaGithub /> },
    { label: "GitLab", icon: <FaGitlab /> },
    { label: "Bitbucket", icon: <FaBitbucket /> },
    { label: "Hugging Face", icon: <FaPython /> },
    { label: "Kaggle", icon: <FaDatabase /> },
    { label: "Website", icon: <FaGlobe /> },
    { label: "Other", icon: <FaLink /> },
  ];

  const [languages, setLanguages] = useState([{ name: "", level: "Basic" }]);
  const [links, setLinks] = useState([
    { platform: "GitHub", url: "" },
    { platform: "Hugging Face", url: "" },
    { platform: "Kaggle", url: "" },
  ]);

  const handleLanguageChange = (index: number, field: "name" | "level", value: string) => {
    const updated = [...languages];
    updated[index][field] = value;
    setLanguages(updated);
  };

  const addLanguage = () => {
    setLanguages([...languages, { name: "", level: "Basic" }]);
  };

  const removeLanguage = (index: number) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const handleLinkChange = (index: number, field: "platform" | "url", value: string) => {
    const updated = [...links];
    updated[index][field] = value;
    setLinks(updated);
  };

  const addLink = () => {
    setLinks([...links, { platform: "Other", url: "" }]);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    mode: "onSubmit",
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormData) => {
    const result = profileSchema.safeParse(data);
    if (!result.success) {
      const zodErrors = result.error.flatten().fieldErrors;
      if (zodErrors.name) setError("name", { type: "manual", message: zodErrors.name[0] });
      if (zodErrors.email) setError("email", { type: "manual", message: zodErrors.email[0] });
      if (zodErrors.phone) setError("phone", { type: "manual", message: zodErrors.phone[0] });
      if (zodErrors.profession) setError("profession", { type: "manual", message: zodErrors.profession[0] });
      if (zodErrors.summary) setError("summary", { type: "manual", message: zodErrors.summary[0] });
      if (zodErrors.website) setError("website", { type: "manual", message: zodErrors.website[0] });
      if (zodErrors.languages) setError("languages", { type: "manual", message: zodErrors.languages[0] });
      if (zodErrors.location) setError("location", { type: "manual", message: zodErrors.location[0] });
    }
  };

  return (
    <>
      <h2 className="mb-4">{t.title}</h2>
      <Card className="p-4 shadow-sm border-0">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <FormInput
                id="name"
                label={t.fullName}
                type="text"
                register={register("name", { required: `${t.fullName} is required` })}
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
                disabled
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormInput
                id="location"
                label={t.location}
                type="text"
                register={register("location")}
                error={errors.location}
                placeholder={t.location}
                icon={<FaLocationArrow />}
              />
            </Col>
            <Col md={6}>
              <FormInput
                id="phone"
                label={t.phone}
                type="tel"
                register={register("phone")}
                error={errors.phone}
                placeholder={t.phone}
                icon={<FaPhone />}
              />
            </Col>
          </Row>

          <FormInput
            id="profession"
            label={t.profession}
            type="text"
            register={register("profession")}
            error={errors.profession}
            placeholder={t.profession}
            icon={<FaBriefcase />}
          />

          <FormGroup>
            <Label>{t.summary}</Label>
            <Input
              type="textarea"
              {...register("summary")}
              rows={4}
              placeholder={t.summaryPlaceholder}
            />
          </FormGroup>

          <Row className="mb-3">
            <Col md={8}>
              <Label>
                <FaLanguage className="me-2" />
                {t.languages}
              </Label>

              {languages.map((lang, index) => (
                <Row key={lang.name + index} className="mb-2 align-items-end">
                  <Col md={4}>
                    <Input
                      type="select"
                      value={lang.level}
                      onChange={(e) =>
                        handleLanguageChange(index, "level", e.target.value)
                      }
                    >
                      <option>Basic</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Native</option>
                    </Input>
                  </Col>
                  <Col md={6}>
                    <Input
                      type="text"
                      value={lang.name}
                      placeholder={t.addLanguage}
                      onChange={(e) =>
                        handleLanguageChange(index, "name", e.target.value)
                      }
                    />
                  </Col>
                  <Col md={2}>
                    <Button
                      color="danger"
                      onClick={() => removeLanguage(index)}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <FaTrash className="me-1" />
                    </Button>
                  </Col>
                </Row>
              ))}

              <Button
                color="primary"
                onClick={addLanguage}
                className="d-flex align-items-center"
              >
                <FaPlus className="me-1" />
                {t.addLanguage}
              </Button>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={8}>
              {links.map((link, index) => (
                <Row key={link.url + index} className="align-items-end mb-2">
                  <Col md={4}>
                    <Input
                      type="select"
                      value={link.platform}
                      onChange={(e) =>
                        handleLinkChange(index, "platform", e.target.value)
                      }
                    >
                      {socialOptions.map((opt) => (
                        <option key={opt.label} value={opt.label}>
                          {opt.label}
                        </option>
                      ))}
                    </Input>
                  </Col>
                  <Col md={6}>
                    <Input
                      type="url"
                      value={link.url}
                      placeholder={t.addLink}
                      onChange={(e) =>
                        handleLinkChange(index, "url", e.target.value)
                      }
                    />
                  </Col>
                  <Col md={2}>
                    <Button
                      color="danger"
                      onClick={() => removeLink(index)}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <FaTrash className="me-1" />
                    </Button>
                  </Col>
                </Row>
              ))}
              <Button
                color="primary"
                onClick={addLink}
                className="d-flex align-items-center"
              >
                <FaPlus className="me-1" />
                {t.addLink}
              </Button>
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-3 gap-2">
            <SaveButton />
            <Button
              style={{ minWidth: "100px" }}
              color="danger"
              className="d-flex align-items-center"
            >
              <FaTimes className="me-1" />
              {t.cancel}
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
