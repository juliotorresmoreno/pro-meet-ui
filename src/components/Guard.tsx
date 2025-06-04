"use client";

import { loginOAuth } from "@/services/auth";
import { useAuthStore } from "@/stores/auth";
import { usePathStore } from "@/stores/path";
import { SessionWithAccessToken } from "@/types/session";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface GuardProps {
  readonly children: React.ReactNode;
}

export default function Guard({ children }: GuardProps) {
  const { accessToken, setAccessToken, setRefreshToken } = useAuthStore();
  const { path, setPath } = usePathStore();
  const session = useSession({
    required: false,
  });
  const router = useRouter();
  const [isProcessingOAuth, setIsProcessingOAuth] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (session.data?.user) {
      const data = session.data as SessionWithAccessToken | null;
      if (!data?.accessToken) return;
      if (session.status !== "authenticated") return;
      if (data?.accessToken === reference) return;

      setIsProcessingOAuth(true);

      loginOAuth(data?.accessToken)
        .then((response) => {
          setReference(data?.accessToken || null);
          setAccessToken(response.access_token);
          setRefreshToken(response.refresh_token || "");
        })
        .catch((error) => {
          console.error("OAuth login failed:", error);
        })
        .finally(() => {
          setTimeout(() => setIsProcessingOAuth(false), 300);
        });
    }
  }, [
    session.data,
    session.status,
    path,
    accessToken,
    setAccessToken,
    setRefreshToken,
    router,
    setPath,
    pathname,
    reference,
  ]);

  if (session.status === "loading" || isProcessingOAuth) {
    return (
      <>
        <LoadingScreen />
        {children}
      </>
    );
  }

  return children;
}
