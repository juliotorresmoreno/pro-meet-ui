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
import { FaEnvelope, FaLock, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/services/auth";

const translations = {
  en: {
    title: "Welcome Back",
    form: {
      email: "Email Address",
      password: "Password",
      remember: "Remember me",
      forgot: "Forgot password?",
      button: "Sign In",
      or: "Or sign in with",
      google: "Continue with Google",
      microsoft: "Continue with Microsoft",
      noAccount: "Don't have an account?",
      register: "Sign up",
    },
  },
  es: {
    title: "Bienvenido de vuelta",
    form: {
      email: "Correo Electrónico",
      password: "Contraseña",
      remember: "Recuérdame",
      forgot: "¿Olvidaste tu contraseña?",
      button: "Iniciar sesión",
      or: "O inicia sesión con",
      google: "Continuar con Google",
      microsoft: "Continuar con Microsoft",
      noAccount: "¿No tienes una cuenta?",
      register: "Regístrate",
    },
  },
  fr: {
    title: "Bon Retour",
    form: {
      email: "Adresse e-mail",
      password: "Mot de passe",
      remember: "Se souvenir de moi",
      forgot: "Mot de passe oublié ?",
      button: "Se connecter",
      or: "Ou connectez-vous avec",
      google: "Continuer avec Google",
      microsoft: "Continuer avec Microsoft",
      noAccount: "Vous n'avez pas de compte ?",
      register: "S'inscrire",
    },
  },
  ja: {
    title: "おかえりなさい",
    form: {
      email: "メールアドレス",
      password: "パスワード",
      remember: "ログイン状態を保持する",
      forgot: "パスワードをお忘れですか？",
      button: "サインイン",
      or: "または次でサインイン",
      google: "Googleで続行",
      microsoft: "Microsoftで続行",
      noAccount: "アカウントをお持ちでないですか？",
      register: "サインアップ",
    },
  },
  zh: {
    title: "欢迎回来",
    form: {
      email: "电子邮件地址",
      password: "密码",
      remember: "记住我",
      forgot: "忘记密码？",
      button: "登录",
      or: "或使用以下方式登录",
      google: "使用 Google 登录",
      microsoft: "使用 Microsoft 登录",
      noAccount: "还没有账户？",
      register: "注册",
    },
  },
};

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

  const {
    register,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onTouched",
  });

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const emailRaw = data.get("email");
    const email = typeof emailRaw === "string" ? emailRaw.trim() : "";
    const passwordRaw = data.get("password");
    const password = typeof passwordRaw === "string" ? passwordRaw.trim() : "";

    const result = loginSchema.safeParse({ email, password });

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
      await loginUser({ username: email, password });
      router.push("/dashboard");
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

              <Form onSubmit={onSubmit}>
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

                <div className="text-center mb-3 text-muted">{t.form.or}</div>

                <div className="d-grid gap-2">
                  <Button
                    outline
                    color="primary"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <FaGoogle className="me-2" />
                    {t.form.google}
                  </Button>

                  <Button
                    outline
                    color="primary"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <FaMicrosoft className="me-2" />
                    {t.form.microsoft}
                  </Button>
                </div>

                <div className="text-center mt-3">
                  {t.form.noAccount}{" "}
                  <Link href="/register" className="text-primary">
                    {t.form.register}
                  </Link>
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

export default LoginPage;
