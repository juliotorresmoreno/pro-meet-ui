"use client";

import { SessionProvider as NextSessionProvider } from "next-auth/react";
import Guard from "@/components/Guard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProvidersProps {
  readonly children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <QueryClientProvider client={new QueryClient()}>
        <NextSessionProvider>
          <Guard>{children}</Guard>
        </NextSessionProvider>
      </QueryClientProvider>
    </>
  );
}
