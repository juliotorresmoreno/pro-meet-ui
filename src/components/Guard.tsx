"use client";

import { useAuthStore } from "@/stores/auth";
import { usePathStore } from "@/stores/path";
import { SessionWithAccessToken } from "@/types/session";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface GuardProps {
  readonly children: React.ReactNode;
}

export default function Guard({ children }: GuardProps) {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const { path, setPath } = usePathStore();
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.data?.user) {
      const data = session.data as SessionWithAccessToken | null;
      const accessToken = data?.accessToken;

      if (!accessToken) return;

      setAccessToken(accessToken);
      if (path !== "") {
        router.push(path);
        setPath("");
        return;
      }
      
      router.push("/dashboard");
    }
  }, [session.data, path, setAccessToken, router, setPath]);

  return children;
}
