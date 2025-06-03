"use client";

import { loginOAuth } from "@/services/auth";
import { useAuthStore } from "@/stores/auth";
import { usePathStore } from "@/stores/path";
import { SessionWithAccessToken } from "@/types/session";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface GuardProps {
  readonly children: React.ReactNode;
}

export default function Guard({ children }: GuardProps) {
  const { accessToken, setAccessToken, setRefreshToken } = useAuthStore();
  const { path, setPath } = usePathStore();
  const session = useSession();
  const router = useRouter();
  const [isProcessingOAuth, setIsProcessingOAuth] = useState(false);

  useEffect(() => {
    if (session.data?.user) {
      const data = session.data as SessionWithAccessToken | null;
      if (!data?.accessToken) return;

      setIsProcessingOAuth(true);

      loginOAuth(data?.accessToken)
        .then((response) => {
          setAccessToken(response.access_token);
          setRefreshToken(response.refresh_token || "");
          console.log("OAuth login successful:", response);

          if (path !== "") {
            router.push(path);
            setPath("");
          } else {
            router.push("/dashboard");
          }
        })
        .catch((error) => {
          console.error("OAuth login failed:", error);
        })
        .finally(() => {
          setIsProcessingOAuth(false);
        });
    }
  }, [
    session.data,
    path,
    accessToken,
    setAccessToken,
    setRefreshToken,
    router,
    setPath,
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
