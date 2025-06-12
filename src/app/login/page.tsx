"use client";

import { z } from "zod";
import Head from "next/head";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Footer from "@/screens/common/Footer";
import Header from "@/screens/common/Header";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import { Container, Form, Button, Alert } from "reactstrap";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { loginUser } from "@/services/auth";
import LoginButton from "@/components/LoginButton";
import { usePathStore } from "@/stores/path";
import { translations } from "./translations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/stores/auth";

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
  const { setAccessToken, setRefreshToken, status, setMethod } = useAuthStore();

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
      const { access_token, refresh_token } = await loginUser({
        username: data.email,
        password: data.password,
      });
      setAccessToken(access_token);
      setRefreshToken(refresh_token || "");
      setMethod("password");

      console.log("Login successful");
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

  useEffect(() => {
    if (status != "authenticated") return;
    if (path === "") {
      router.push("/dashboard");
      return;
    }

    router.push(path);
    setPath("");
  }, [status, path, router, setPath]);

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
