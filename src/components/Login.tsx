"use client";

import { Lang } from "@/lib/lang";
import { Mail, Lock, Eye, EyeOff, ArrowRight, X } from "lucide-react";
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

// Validation schema
const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "The password must have at least 8 characters",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const translations = {
  en: {
    title: "Welcome Back",
    description: "Sign in to continue to Pro-Meets",
    email: "Email",
    password: "Password",
    submit: "Sign In",
    forgotPassword: "Forgot password?",
    noAccount: "Don't have an account?",
    register: "Register here",
  },
  es: {
    title: "Bienvenido de vuelta",
    description: "Inicia sesión para continuar en Pro-Meets",
    email: "Correo electrónico",
    password: "Contraseña",
    submit: "Iniciar sesión",
    forgotPassword: "¿Olvidaste tu contraseña?",
    noAccount: "¿No tienes una cuenta?",
    register: "Regístrate aquí",
  },
};

interface LoginProps {
  readonly children?: React.ReactNode;
  readonly language?: Lang;
}

const Login = ({ children, language = "en" }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { open, setOpen } = useAuthStore();

  const t = translations[language];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      console.log("Login data:", data);
      // Simulate request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert(language === "es" ? "¡Inicio exitoso!" : "Login successful!");
      setOpen(null);
      reset();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen("login")}
        className="cursor-pointer px-4 py-2 text-gray-600 hover:text-blue-600 font-medium bg-transparent border-none focus:outline-none"
      >
        {children || (language === "es" ? "Iniciar sesión" : "Login")}
      </button>

      <Dialog
        open={open === "login"}
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

            <div className="flex justify-end">
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-500 font-medium p-0 h-auto text-sm cursor-pointer"
                asChild
              >
                <Link href="/forgot-password">{t.forgotPassword}</Link>
              </Button>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full h-11 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="animate-pulse">
                  {language === "es" ? "Iniciando sesión..." : "Signing in..."}
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
              {t.noAccount}{" "}
              <Button
                variant="link"
                className="cursor-pointer text-blue-600 hover:text-blue-500 font-medium p-0 h-auto text-sm"
                onClick={() => setOpen("register")}
              >
                {t.register}
              </Button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
