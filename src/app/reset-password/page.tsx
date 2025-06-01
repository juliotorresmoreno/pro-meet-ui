// app/reset-password/page.tsx
"use client";

import { FormEventHandler, useState } from "react";
import { Container, Form, Button, Alert, Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resetPassword } from "@/services/auth";
import { useRouter, useSearchParams } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { FaLock, FaCheckCircle } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";

const resetSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/,
        "Must include upper, lower, number and special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetFormData = z.infer<typeof resetSchema>;

export default function ResetPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const {
    register,
    formState: { errors },
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const password = String(data.get("password"));

    try {
      await resetPassword(password, token);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reset password");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password | Pro-Meets</title>
        <meta name="description" content="Reset your Pro-Meets password" />
      </Head>

      <Container className="py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <div className="bg-light rounded-circle d-inline-flex p-3 mb-3">
                    <FaLock size={48} className="text-primary" />
                  </div>
                  <h2>Reset Password</h2>
                  <p className="text-muted">
                    {success
                      ? "Your password has been reset successfully"
                      : "Enter your new password below"}
                  </p>
                </div>

                {error && (
                  <Alert color="danger" className="text-center">
                    {error}
                  </Alert>
                )}

                {success ? (
                  <div className="text-center py-4">
                    <div className="d-flex justify-content-center mb-3">
                      <FaCheckCircle size={64} className="text-success" />
                    </div>
                    <h4 className="mb-3">Password Reset!</h4>
                    <p className="mb-4">
                      You can now log in with your new password.
                    </p>
                    <Button
                      color="primary"
                      onClick={() => router.push("/login")}
                    >
                      Go to Login
                    </Button>
                  </div>
                ) : (
                  <Form onSubmit={onSubmit}>
                    <FormInput
                      id="password"
                      label="New Password"
                      type="password"
                      register={register("password")}
                      error={errors.password}
                      icon={<FaLock />}
                      placeholder="Enter your new password"
                    />
                    <FormInput
                      id="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      register={register("confirmPassword")}
                      error={errors.confirmPassword}
                      icon={<FaLock />}
                      placeholder="Confirm your new password"
                    />

                    <div className="d-grid mt-4">
                      <Button
                        color="primary"
                        type="submit"
                        disabled={isSubmitting || !token}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner size="sm" className="me-2" />
                            Resetting...
                          </>
                        ) : (
                          "Reset Password"
                        )}
                      </Button>
                    </div>
                  </Form>
                )}

                <div className="text-center mt-4">
                  <p className="text-muted mb-2">
                    Need help with your account?
                  </p>
                  <Link
                    href="/contact-support"
                    className="text-decoration-none"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
