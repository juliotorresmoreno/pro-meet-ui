// app/verify-email/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Container, Alert, Button, Spinner } from "reactstrap";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyEmail } from "@/services/auth";
import Head from "next/head";
import Link from "next/link";
import { FaCheckCircle, FaTimesCircle, FaEnvelope } from "react-icons/fa";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<
    "loading" | "success" | "error" | "invalid"
  >("loading");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setStatus("invalid");
      setMessage(
        "Invalid verification link. Please check your email for the correct link."
      );
      return;
    }

    const verify = async () => {
      try {
        await verifyEmail(token);
        setStatus("success");
        setMessage(
          "Your email has been successfully verified! You can now log in to your account."
        );
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "Email verification failed. The link may have expired or is invalid."
        );
      }
    };

    verify();
  }, [searchParams]);

  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="text-center py-5">
            <Spinner color="primary" />
            <p className="mt-3">Verifying your email address...</p>
          </div>
        );

      case "success":
        return (
          <div className="text-center py-4">
            <div className="d-flex justify-content-center mb-3">
              <FaCheckCircle size={64} className="text-success" />
            </div>
            <h3 className="mb-3">Email Verified Successfully!</h3>
            <p className="mb-4">{message}</p>
            <Button
              color="primary"
              onClick={() => router.push("/login")}
              className="px-4"
            >
              Go to Login
            </Button>
          </div>
        );

      case "error":
        return (
          <div className="text-center py-4">
            <div className="d-flex justify-content-center mb-3">
              <FaTimesCircle size={64} className="text-danger" />
            </div>
            <h3 className="mb-3">Verification Failed</h3>
            <Alert color="danger" className="text-start">
              {message}
            </Alert>
            <div className="mt-4">
              <p>Need help? Try these options:</p>
              <div className="d-flex justify-content-center gap-3">
                <Button
                  outline
                  color="primary"
                  onClick={() => router.push("/resend-verification")}
                >
                  <FaEnvelope className="me-2" />
                  Resend Verification Email
                </Button>
                <Button
                  color="primary"
                  onClick={() => router.push("/contact-support")}
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        );

      case "invalid":
        return (
          <div className="text-center py-4">
            <div className="d-flex justify-content-center mb-3">
              <FaTimesCircle size={64} className="text-warning" />
            </div>
            <h3 className="mb-3">Invalid Verification Link</h3>
            <Alert color="warning" className="text-start">
              {message}
            </Alert>
            <div className="mt-4">
              <Link href="/login" className="btn btn-primary">
                Return to Login
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Email Verification | Pro-Meets</title>
        <meta
          name="description"
          content="Verify your email address for Pro-Meets"
        />
      </Head>

      <Container className="py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2>Email Verification</h2>
                  <p className="text-muted">Pro-Meets Account Verification</p>
                </div>

                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
