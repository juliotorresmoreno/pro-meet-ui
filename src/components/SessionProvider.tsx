"use client";

import { SessionProvider as NextSessionProvider } from "next-auth/react";
import Guard from "./Guard";

interface SessionProviderProps {
  readonly children: React.ReactNode;
}
export function SessionProvider({ children }: SessionProviderProps) {
  return (
    <NextSessionProvider>
      <Guard>{children}</Guard>
    </NextSessionProvider>
  );
}
