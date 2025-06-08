"use client";

import { z } from "zod";
import Head from "next/head";
import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Footer from "@/components/Footer";
import Header from "@/screens/common/Header";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import { Container, Form, Button, Alert } from "reactstrap";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendPasswordResetEmail } from "@/services/auth";

const translations = {
  en: {
    title: "Reset Your Password",
    subtitle: "Enter your email to receive a password reset link",
    successMessage:
      "Reset email sent! Check your inbox for further instructions.",
    form: {
      email: "Email Address",
      button: "Send Reset Link",
      remember: "Remember your password?",
      login: "Sign in",
    },
  },
  es: {
    title: "Restablecer tu Contraseña",
    subtitle:
      "Ingresa tu correo electrónico para recibir un enlace de restablecimiento",
    successMessage:
      "¡Correo enviado! Revisa tu bandeja de entrada para más instrucciones.",
    form: {
      email: "Correo Electrónico",
      button: "Enviar Enlace",
      remember: "¿Recuerdas tu contraseña?",
      login: "Iniciar sesión",
    },
  },
  fr: {
    title: "Réinitialiser votre mot de passe",
    subtitle: "Entrez votre email pour recevoir un lien de réinitialisation",
    successMessage:
      "Email envoyé! Vérifiez votre boîte de réception pour les instructions.",
    form: {
      email: "Adresse e-mail",
      button: "Envoyer le lien",
      remember: "Vous souvenez-vous de votre mot de passe?",
      login: "Se connecter",
    },
  },
  ja: {
    title: "パスワードのリセット",
    subtitle:
      "パスワードリセットリンクを受け取るにはメールアドレスを入力してください",
    successMessage:
      "リセットメールを送信しました！ 受信トレイを確認してください。",
    form: {
      email: "メールアドレス",
      button: "リンクを送信",
      remember: "パスワードを覚えていますか？",
      login: "サインイン",
    },
  },
  zh: {
    title: "重置密码",
    subtitle: "输入您的电子邮件以接收密码重置链接",
    successMessage: "重置邮件已发送！请查看收件箱获取进一步说明。",
    form: {
      email: "电子邮件地址",
      button: "发送重置链接",
      remember: "记得密码？",
      login: "登录",
    },
  },
};

const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage: NextPage = () => {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    setError,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
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
    setIsSubmitting(true);

    const result = forgotPasswordSchema.safeParse({ email: email });
    if (!result.success) {
      const zodErrors = result.error.flatten().fieldErrors;
      if (zodErrors.email) {
        setError("email", { type: "manual", message: zodErrors.email[0] });
      }

      setError("root", {
        type: "manual",
        message: "Please fix the errors above",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await sendPasswordResetEmail(email);
      setEmailSent(true);
    } catch (err) {
      setError("root", {
        type: "manual",
        message:
          err instanceof Error ? err.message : "Failed to send reset email",
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
        <title>Pro-Meets - Forgot Password</title>
        <meta name="description" content="Reset your Pro-Meets password" />
      </Head>

      <Header />

      <main>
        <Container className="py-5">
          <div className="row justify-content-center pt-5">
            <div className="col-md-8 col-lg-6">
              <h1 className="text-center mb-2">{t.title}</h1>
              <p className="text-center text-muted mb-4">{t.subtitle}</p>

              {errors.root && (
                <Alert color="danger">{errors.root.message}</Alert>
              )}

              {emailSent ? (
                <div className="text-center p-4">
                  <FaCheckCircle className="text-success mb-3" size="3em" />
                  <h4 className="mb-3">{t.successMessage}</h4>
                  <Button color="primary" onClick={() => router.push("/login")}>
                    {t.form.login}
                  </Button>
                </div>
              ) : (
                <Form onSubmit={onSubmit}>
                  <FormInput
                    id="email"
                    label={t.form.email}
                    type="email"
                    register={register("email")}
                    error={errors.email}
                    icon={<FaEnvelope />}
                  />

                  <Button
                    color="primary"
                    type="submit"
                    className="w-100 mb-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : t.form.button}
                  </Button>

                  <div className="text-center mt-3">
                    {t.form.remember}{" "}
                    <Link href="/login" className="text-primary">
                      {t.form.login}
                    </Link>
                  </div>
                </Form>
              )}
            </div>
          </div>
        </Container>

        <Footer language={language} />
      </main>
    </>
  );
};

export default ForgotPasswordPage;
