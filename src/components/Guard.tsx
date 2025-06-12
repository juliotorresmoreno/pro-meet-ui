"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { decode } from "jsonwebtoken";

import { loginOAuth } from "@/services/auth";
import { useAuthStore } from "@/stores/auth";
import { usePathStore } from "@/stores/path";
import { SessionWithAccessToken } from "@/types/session";
import Loading from "@/screens/common/Loading";

const isTokenExpired = (token: string): boolean => {
  const decoded = decode(token);
  const exp = decoded && typeof decoded === "object" && decoded.exp;
  const now = Math.floor(Date.now() / 1000);
  return typeof exp === "number" ? exp <= now : true;
};
interface GuardProps {
  readonly children: React.ReactNode;
}

export default function Guard({ children }: GuardProps) {
  const { accessToken, setAccessToken, setRefreshToken, setMethod } =
    useAuthStore();
  const { setPath } = usePathStore();
  const { data, status } = useSession({ required: false });
  const pathname = usePathname();

  const [isProcessingOAuth, setIsProcessingOAuth] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  useEffect(() => {
    if (!data?.user || status !== "authenticated") return;
    const token = (data as SessionWithAccessToken).accessToken;
    if (!token || token === reference) return;

    if (accessToken && !isTokenExpired(accessToken)) return;
    if (isTokenExpired(token)) {
      setAccessToken("");
      setRefreshToken("");
      setReference(null);
      return;
    }

    setIsProcessingOAuth(true);

    loginOAuth(token)
      .then(({ access_token, refresh_token }) => {
        setReference(token);
        setAccessToken(access_token);
        setRefreshToken(refresh_token || "");
        setMethod("oauth");
      })
      .catch((error) => {
        signOut();
        setAccessToken("");
        setRefreshToken("");
        setReference(null);
        console.error("OAuth login failed:", error);
      })
      .finally(() => {
        setTimeout(() => setIsProcessingOAuth(false), 300);
      });
  }, [
    data,
    status,
    accessToken,
    reference,
    setAccessToken,
    setRefreshToken,
    setMethod,
  ]);

  useEffect(() => {
    setPath(pathname);
  }, [pathname, setPath]);

  return <Loading isVisible={isProcessingOAuth}>{children}</Loading>;
}
