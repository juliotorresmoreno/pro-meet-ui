// app/resend-verification/page.tsx
"use client";

import { FormEventHandler, useState } from "react";
import { Container, Form, Button, Alert, Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resendVerificationEmail } from "@/services/auth";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { FormInput } from "@/components/FormInput";

// Schema for form validation
const resendSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ResendFormData = z.infer<typeof resendSchema>;

export default function ResendVerificationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    formState: { errors },
  } = useForm<ResendFormData>({
    resolver: zodResolver(resendSchema),
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const emailRaw = data.get("email");
    const email = typeof emailRaw === "string" ? emailRaw.trim() : "";

    try {
      await resendVerificationEmail(email);
      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to resend verification email"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Resend Verification Email | Pro-Meets</title>
        <meta
          name="description"
          content="Resend your verification email for Pro-Meets"
        />
      </Head>

      <Container className="py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <div className="bg-light rounded-circle d-inline-flex p-3 mb-3">
                    <FaEnvelope size={48} className="text-primary" />
                  </div>
                  <h2>Resend Verification Email</h2>
                  <p className="text-muted">
                    {success
                      ? "We've sent a new verification link to your email"
                      : "Enter your email to receive a new verification link"}
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
                    <h4 className="mb-3">Verification Email Sent!</h4>
                    <p className="mb-4">
                      Please check your inbox and click the verification link to
                      activate your account.
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        color="primary"
                        onClick={() => router.push("/login")}
                      >
                        Go to Login
                      </Button>
                      <Button
                        outline
                        color="primary"
                        onClick={() => setSuccess(false)}
                      >
                        Resend Again
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Form onSubmit={onSubmit}>
                    <FormInput
                      id="email"
                      label="Email Address"
                      type="email"
                      register={register("email")}
                      error={errors.email}
                      icon={<FaEnvelope />}
                      placeholder="Enter your registered email"
                    />

                    <div className="d-grid mt-4">
                      <Button
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner size="sm" className="me-2" />
                            Sending...
                          </>
                        ) : (
                          "Resend Verification Email"
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
