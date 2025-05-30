import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { initializeLanguageStore } from "@/stores/language";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro-Meets – Smart Calendar for Interviews",
  description:
    "Schedule and manage your interviews efficiently with Pro-Meets, the smart calendar for professionals.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const acceptLanguage = headerList.get("accept-language");
  const browserLang = acceptLanguage?.split(",")?.[0] || "en";
  const initialLanguage = browserLang.startsWith("es") ? "es" : "en";

  // Inicializar el store en el servidor
  initializeLanguageStore(initialLanguage);
  initializeLanguageStore();

  return (
    <html lang={initialLanguage}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
