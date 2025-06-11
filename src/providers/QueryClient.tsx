"use client";

import {
  QueryClient,
  QueryClientProvider as RQueryClientProvider,
} from "@tanstack/react-query";

interface QueryClientProviderProps {
  readonly children: React.ReactNode;
}

export default function QueryClientProvider({
  children,
}: QueryClientProviderProps) {
  return (
    <RQueryClientProvider client={new QueryClient()}>
      {children}
    </RQueryClientProvider>
  );
}
