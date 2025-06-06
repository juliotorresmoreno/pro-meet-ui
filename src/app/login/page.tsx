"use client";

import { z } from "zod";
import Head from "next/head";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import { Container, Form, Button, Alert } from "reactstrap";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/services/auth";
import LoginButton from "@/components/LoginButton";
import { usePathStore } from "@/stores/path";
import { translations } from "./translations";
import { zodResolver } from "@hookform/resolvers/zod";

// Esquema de validación con Zod
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: NextPage = () => {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { path, setPath } = usePathStore();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const result = loginSchema.safeParse(data);

    if (!result.success) {
      const zodErrors = result.error.flatten().fieldErrors;
      if (zodErrors.email) {
        setError("email", { type: "manual", message: zodErrors.email[0] });
      }
      if (zodErrors.password) {
        setError("password", {
          type: "manual",
          message: zodErrors.password[0],
        });
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
      await loginUser({ username: data.email, password: data.password });
      if (path !== "") {
        router.push(path);
        setPath("");
      } else {
        router.push("/dashboard");
      }
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
        <title>Pro-Meets - Login</title>
        <meta name="description" content="Login to your Pro-Meets account" />
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

                <div className="d-flex justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      {t.form.remember}
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-primary">
                    {t.form.forgot}
                  </Link>
                </div>

                <Button
                  color="primary"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : t.form.button}
                </Button>
              </Form>

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

                {/*
                <LoginButton
                  outline
                  provider="microsoft"
                  color="primary"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaMicrosoft className="me-2" />
                  {t.form.microsoft}
                </LoginButton>*/}
              </div>

              <div className="text-center mt-3">
                {t.form.noAccount}{" "}
                <Link href="/register" className="text-primary">
                  {t.form.register}
                </Link>
              </div>
            </div>
          </div>
        </Container>

        <Footer language={language} />
      </main>
    </>
  );
};

export default LoginPage;
