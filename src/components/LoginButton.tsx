"use client";

import { useAuthStore } from "@/stores/auth";
import { usePathStore } from "@/stores/path";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, ButtonProps } from "reactstrap";

interface LoginButtonProps extends ButtonProps {
  readonly children?: React.ReactNode;
  readonly provider: "google" | "microsoft";
}

export default function LoginButton({
  children,
  provider,
  ...rest
}: LoginButtonProps) {
  const { accessToken, setAccessToken, setRefreshToken, setStatus, status } =
    useAuthStore();
  const { path, setPath } = usePathStore();
  const router = useRouter();

  const handleSignIn = async () => {
    setStatus("loading");
    setAccessToken("");
    setRefreshToken("");
    await signIn(provider, {
      redirect: false,
    }).then((result) => {
      if (result?.error) {
        console.error("Sign in error:", result.error);
      } else {
        // Optionally handle successful sign-in
        console.log("Sign in successful");
      }
    });
  };

  useEffect(() => {
    if (status === "authenticated" && accessToken) {
      if (path !== "") {
        router.push(path);
        setPath("");
      } else {
        router.push("/dashboard");
      }
    }
  }, [accessToken, status, path, router, setPath]);

  return (
    <Button {...rest} onClick={handleSignIn}>
      {children}
    </Button>
  );
}
