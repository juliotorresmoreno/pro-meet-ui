"use client";

import { Lang } from "@/lib/lang";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useAuthStore } from "@/store/authStore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Esquema de validación
const registerSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "The first name must have at least 2 characters",
    }),
    lastName: z.string().min(2, {
      message: "The last name must have at least 2 characters",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(8, {
      message: "The password must have at least 8 characters",
    }),
    confirmPassword: z.string({
      message: "Please confirm your password",
    }),
    acceptTerms: z
      .boolean({
        message: "You must accept the terms and conditions",
      })
      .refine((val) => val === true, {
        message: "You must accept the terms and conditions",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

const translations = {
  en: {
    title: "Create Account",
    description: "Join Pro-Meets and improve your interviews",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    acceptTerms: "I accept the {terms} and {privacy}",
    submit: "Create Account",
    haveAccount: "Already have an account?",
    login: "Login here",
  },
  zh: {
    title: "创建账户",
    description: "加入 Pro-Meets，提升你的面试能力",
    firstName: "名字",
    lastName: "姓氏",
    email: "电子邮件",
    password: "密码",
    confirmPassword: "确认密码",
    acceptTerms: "我接受{terms}和{privacy}",
    submit: "创建账户",
    haveAccount: "已经有账户了？",
    login: "点此登录",
  },
  es: {
    title: "Crear cuenta",
    description: "Únete a Pro-Meets y mejora tus entrevistas",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    acceptTerms: "Acepto los {terms} y la {privacy}",
    submit: "Crear cuenta",
    haveAccount: "¿Ya tienes una cuenta?",
    login: "Inicia sesión aquí",
  },
  ja: {
    title: "アカウント作成",
    description: "Pro-Meets に参加して面接スキルを向上させよう",
    firstName: "名",
    lastName: "姓",
    email: "メールアドレス",
    password: "パスワード",
    confirmPassword: "パスワード確認",
    acceptTerms: "{terms}と{privacy}に同意します",
    submit: "アカウント作成",
    haveAccount: "すでにアカウントをお持ちですか？",
    login: "こちらからログイン",
  },
  fr: {
    title: "Créer un compte",
    description: "Rejoignez Pro-Meets et améliorez vos entretiens",
    firstName: "Prénom",
    lastName: "Nom",
    email: "E-mail",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    acceptTerms: "J'accepte les {terms} et la {privacy}",
    submit: "Créer un compte",
    haveAccount: "Vous avez déjà un compte ?",
    login: "Connectez-vous ici",
  },
};

interface RegisterProps {
  readonly children?: React.ReactNode;
  readonly language?: Lang;
}

const Register = ({ children, language = "en" }: RegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { open, setOpen } = useAuthStore();

  const t = translations[language] || translations.en;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch, // Añadimos watch para observar los valores del formulario
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  // Observamos el valor de acceptTerms
  const acceptTerms = watch("acceptTerms");

  const renderAcceptTerms = () => {
    const parts = t.acceptTerms.split(/\{(\w+)\}/);
    return parts.map((part) => {
      if (part === "terms") {
        return (
          <Link
            key={part}
            href="/terms"
            className="text-blue-600 hover:text-blue-500 underline underline-offset-2"
            target="_blank"
          >
            {language === "es"
              ? "términos y condiciones"
              : "terms and conditions"}
          </Link>
        );
      }
      if (part === "privacy") {
        return (
          <Link
            key={part}
            href="/privacy"
            className="text-blue-600 hover:text-blue-500 underline underline-offset-2"
            target="_blank"
          >
            {language === "es" ? "política de privacidad" : "privacy policy"}
          </Link>
        );
      }
      return part;
    });
  };

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      console.log("Registration data:", data);
      // Simular petición
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert(
        language === "es" ? "¡Registro exitoso!" : "Registration successful!"
      );
      setOpen(null);
      reset();
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen("register")}
        className="cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-200"
      >
        {children || (language === "es" ? "Registrarse" : "Register")}
      </Button>

      <Dialog
        open={open === "register"}
        onOpenChange={() => {
          setOpen(null);
          reset();
        }}
      >
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto p-0 rounded-xl border-0">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 rounded-t-xl">
            <DialogHeader className="text-left">
              <div className="flex justify-between items-center">
                <div>
                  <DialogTitle className="text-white text-2xl font-bold">
                    {t.title}
                  </DialogTitle>
                  <DialogDescription className="text-blue-100">
                    {t.description}
                  </DialogDescription>
                </div>
                <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none cursor-pointer">
                  <X className="h-5 w-5 text-white" />
                </DialogClose>
              </div>
            </DialogHeader>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t.firstName}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="firstName"
                    {...register("firstName")}
                    type="text"
                    placeholder={t.firstName}
                    className="w-full pl-10 h-11 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t.lastName}
                </label>
                <input
                  id="lastName"
                  {...register("lastName")}
                  type="text"
                  placeholder={t.lastName}
                  className="w-full h-11 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="example@email.com"
                  className="w-full pl-10 h-11 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {t.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 h-11 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                {t.confirmPassword}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 h-11 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="flex items-start space-x-3 pt-1">
              <input
                id="acceptTerms"
                {...register("acceptTerms")}
                type="checkbox"
                className="h-4 w-4 mt-0.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="acceptTerms"
                className="block text-sm text-gray-700 leading-tight"
              >
                {renderAcceptTerms()}
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-500 text-xs mt-1">
                {errors.acceptTerms.message}
              </p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting || !acceptTerms} // Deshabilitar si no se aceptan los términos
              className={`w-full h-11 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 flex items-center justify-center ${
                !acceptTerms
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              {isSubmitting ? (
                <span className="animate-pulse">
                  {language === "es"
                    ? "Creando cuenta..."
                    : "Creating account..."}
                </span>
              ) : (
                <>
                  {t.submit}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <div className="px-6 pb-6 text-center">
            <p className="text-sm text-gray-600">
              {t.haveAccount}{" "}
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-500 font-medium p-0 h-auto text-sm cursor-pointer"
                onClick={() => setOpen("login")}
              >
                {t.login}
              </Button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Register;
