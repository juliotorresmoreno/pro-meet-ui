"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Col, Row } from "reactstrap";
import Section from "../Section";
import Image from "next/image";
import { translations } from "./translations";
import { contact } from "@/services/contact";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaHeading,
  FaInfoCircle,
} from "react-icons/fa";
import { useState } from "react";
import { FormInput } from "../FormInput";

// Define validation schema with Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await contact({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitError(
        t.errors.submission || "Failed to submit form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      title={t.title}
      subtitle={t.subtitle}
      background="white"
      padding="lg"
    >
      <Row className="align-items-center justify-content-center">
        <Col lg={8} xl={6} className="mb-4 mb-lg-0">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h3 className="text-center mb-4">{t.heading}</h3>

              {submitSuccess && (
                <Alert color="success" className="mb-4">
                  {t.successMessage}
                </Alert>
              )}

              {submitError && (
                <Alert color="danger" className="mb-4">
                  {submitError}
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Row>
                  <Col md={6}>
                    <div className="input-group">
                      <FormInput
                        type="text"
                        id="name"
                        error={errors.name}
                        label={t.name}
                        placeholder={t.placeholder.name}
                        register={register("name")}
                        icon={<FaUser />}
                      />
                    </div>
                    {errors.name && (
                      <div className="invalid-feedback d-flex align-items-center">
                        <FaInfoCircle className="me-2" />
                        {errors.name.message}
                      </div>
                    )}
                  </Col>

                  <Col md={6}>
                    <div className="input-group">
                      <FormInput
                        type="email"
                        id="email"
                        error={errors.email}
                        label={t.email}
                        placeholder={t.placeholder.email}
                        register={register("email")}
                        icon={<FaEnvelope />}
                      />
                    </div>
                    {errors.email && (
                      <div className="invalid-feedback d-flex align-items-center">
                        <FaInfoCircle className="me-2" />
                        {errors.email.message}
                      </div>
                    )}
                  </Col>
                </Row>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    {t.subject} <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaHeading />
                    </span>
                    <select
                      id="subject"
                      className={`form-select ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      {...register("subject")}
                    >
                      <option value="">{t.subjects.select}</option>
                      <option value="general">{t.subjects.general}</option>
                      <option value="support">{t.subjects.support}</option>
                      <option value="partnership">
                        {t.subjects.partnership}
                      </option>
                      <option value="feedback">{t.subjects.feedback}</option>
                      <option value="other">{t.subjects.other}</option>
                    </select>
                  </div>
                  {errors.subject && (
                    <div className="invalid-feedback d-flex align-items-center">
                      <FaInfoCircle className="me-2" />
                      {errors.subject.message}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    {t.message} <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    rows={5}
                    placeholder={t.placeholder.message}
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback d-flex align-items-center">
                      <FaInfoCircle className="me-2" />
                      {errors.message.message}
                    </div>
                  )}
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    <FaPaperPlane className="me-2" />
                    {isSubmitting ? t.buttons.submitting : t.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>

        <Col lg={4} xl={6} className="d-none d-lg-block">
          <div className="ps-xl-5">
            <div className="position-relative rounded overflow-hidden h-100">
              <Image
                src="/assets/undraw_contact-us_kcoa.png"
                alt={t.imageAlt}
                width={600}
                height={500}
                className="img-fluid"
                style={{ objectFit: "contain" }}
                quality={90}
                priority
              />
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Contact;
