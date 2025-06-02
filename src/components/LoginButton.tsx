"use client";

import { signIn } from "next-auth/react";
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
  const handleSignIn = async () => {
    await signIn(provider);
  };

  return (
    <Button {...rest} onClick={handleSignIn}>
      {children}
    </Button>
  );
}
