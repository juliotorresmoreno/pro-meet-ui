"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onTouched",
  });

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const nameRaw = data.get("name");
    const name = typeof nameRaw === "string" ? nameRaw.trim() : "";
    const emailRaw = data.get("email");
    const email = typeof emailRaw === "string" ? emailRaw.trim() : "";
    const passwordRaw = data.get("password");
    const password = typeof passwordRaw === "string" ? passwordRaw.trim() : "";
    const confirmPasswordRaw = data.get("confirmPassword");
    const confirmPassword =
      typeof confirmPasswordRaw === "string" ? confirmPasswordRaw.trim() : "";
    const termsRaw = data.get("terms");
    const terms = typeof termsRaw === "string" ? termsRaw === "on" : false;

    const result = registerSchema.safeParse({
      name,
      email,
      password,
      terms,
      confirmPassword,
    });

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
      await registerUser({ name, email, password });
    } catch (err) {
      setError("root", {
        type: "manual",
        message: err instanceof Error ? err.message : "Login failed",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const translations = {
    en: {
      title: "Create Your Account",
      form: {
        name: "Full Name",
        email: "Email Address",
        password: "Password",
        confirmPassword: "Confirm Password",
        terms: "I agree to the Terms of Service and Privacy Policy",
        button: "Sign Up",
        or: "Or sign up with",
        google: "Continue with Google",
        microsoft: "Continue with Microsoft",
        already: "Already have an account?",
        login: "Log in",
      },
    },
    es: {
      title: "Crea Tu Cuenta",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar Contraseña",
        terms: "Acepto los Términos de Servicio y la Política de Privacidad",
        button: "Registrarse",
        or: "O regístrate con",
        google: "Continuar con Google",
        microsoft: "Continuar con Microsoft",
        already: "¿Ya tienes una cuenta?",
        login: "Iniciar sesión",
      },
    },
    fr: {
      title: "Créez Votre Compte",
      form: {
        name: "Nom Complet",
        email: "Adresse e-mail",
        password: "Mot de passe",
        confirmPassword: "Confirmez le mot de passe",
        terms:
          "J'accepte les Conditions d'utilisation et la Politique de confidentialité",
        button: "S'inscrire",
        or: "Ou inscrivez-vous avec",
        google: "Continuer avec Google",
        microsoft: "Continuer avec Microsoft",
        already: "Vous avez déjà un compte ?",
        login: "Se connecter",
      },
    },
    ja: {
      title: "アカウント作成",
      form: {
        name: "氏名",
        email: "メールアドレス",
        password: "パスワード",
        confirmPassword: "パスワードの確認",
        terms: "利用規約とプライバシーポリシーに同意します",
        button: "サインアップ",
        or: "または次で登録",
        google: "Googleで続行",
        microsoft: "Microsoftで続行",
        already: "すでにアカウントをお持ちですか？",
        login: "ログイン",
      },
    },
    zh: {
      title: "创建您的账户",
      form: {
        name: "全名",
        email: "电子邮件地址",
        password: "密码",
        confirmPassword: "确认密码",
        terms: "我同意服务条款和隐私政策",
        button: "注册",
        or: "或使用以下方式注册",
        google: "使用 Google 注册",
        microsoft: "使用 Microsoft 注册",
        already: "已经有账户？",
        login: "登录",
      },
    },
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

              <Form onSubmit={onSubmit}>
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
