"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import Footer from "@/screens/common/Footer";
import Header from "@/screens/common/Header";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import { NextPage } from "next";
import Head from "next/head";
import { Container, Form, Button, Alert } from "reactstrap";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";
import { useState } from "react";
import { registerUser } from "@/services/auth";
import LoginButton from "@/components/LoginButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { translations } from "./translations";

const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage: NextPage = () => {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onSubmit",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const result = registerSchema.safeParse(data);

    if (!result.success) {
      const zodErrors = result.error.flatten().fieldErrors;
      if (zodErrors.name) {
        setError("name", { type: "manual", message: zodErrors.name[0] });
      }
      if (zodErrors.email) {
        setError("email", { type: "manual", message: zodErrors.email[0] });
      }
      if (zodErrors.password) {
        setError("password", {
          type: "manual",
          message: zodErrors.password[0],
        });
      }
      if (zodErrors.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: zodErrors.confirmPassword[0],
        });
      }
      if (zodErrors.terms) {
        setError("terms", { type: "manual", message: zodErrors.terms[0] });
      }
      setError("root", {
        type: "manual",
        message: "Please fix the errors above",
      });
      return;
    }

    setIsSubmitting(true);
    setError("root", { type: "manual", message: "" });

    try {
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      setError("root", {
        type: "manual",
        message: err instanceof Error ? err.message : "Login failed",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <>
      <Head>
        <title>Pro-Meets - Register</title>
        <meta name="description" content="Create your Pro-Meets account" />
      </Head>

      <Header />

      <main>
        <Container className="py-5">
          <div className="row justify-content-center pt-5">
            <div className="col-md-8 col-lg-6">
              <h1 className="text-center mb-4">{t.title}</h1>

              {errors.root?.message && (
                <Alert color="danger">{errors.root.message}</Alert>
              )}

              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  id="name"
                  label={t.form.name}
                  type="text"
                  register={register("name")}
                  error={errors.name}
                  icon={<FaUser />}
                />

                <FormInput
                  id="email"
                  label={t.form.email}
                  type="email"
                  register={register("email")}
                  error={errors.email}
                  icon={<FaEnvelope />}
                />

                <FormInput
                  id="password"
                  label={t.form.password}
                  type="password"
                  register={register("password")}
                  error={errors.password}
                  icon={<FaLock />}
                />

                <FormInput
                  id="confirmPassword"
                  label={t.form.confirmPassword}
                  type="password"
                  register={register("confirmPassword")}
                  error={errors.confirmPassword}
                  icon={<FaLock />}
                />

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className={`form-check-input ${
                      errors.terms ? "is-invalid" : ""
                    }`}
                    id="terms"
                    {...register("terms")}
                  />
                  <label className="form-check-label" htmlFor="terms">
                    {t.form.terms}
                  </label>
                  {errors.terms && (
                    <div className="invalid-feedback">
                      {errors.terms.message}
                    </div>
                  )}
                </div>

                <Button
                  color="primary"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={!t.form.terms}
                >
                  {isSubmitting ? "Processing..." : t.form.button}
                </Button>

                <div className="text-center mb-3 text-muted">{t.form.or}</div>

                <div className="d-grid gap-2">
                  <LoginButton
                    outline
                    provider="google"
                    color="primary"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <FaGoogle className="me-2" />
                    {t.form.google}
                  </LoginButton>

                  {/*<Button
                    outline
                    color="primary"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <FaMicrosoft className="me-2" />
                    {t.form.microsoft}
                  </Button>*/}
                </div>

                <div className="text-center mt-3">
                  {t.form.already}{" "}
                  <a href="/login" className="text-primary">
                    {t.form.login}
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </Container>

        <Footer language={language} />
      </main>
    </>
  );
};

export default RegisterPage;
