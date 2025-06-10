"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import { useEffect } from "react";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import SettingsLayout from "@/screens/settings/Layout";

export default function SettingsPage() {
  const language = useLanguageStore((state) => state.language) || getLanguage();

  useEffect(() => {
    document.documentElement.classList.add("full-screen");
    document.body.classList.add("full-screen");
    return () => {
      document.documentElement.classList.remove("full-screen");
      document.body.classList.remove("full-screen");
    };
  }, []);

  console.log("SettingsPage language:", language);

  return (
    <SettingsLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        dfsdfsd
      </Container>
    </SettingsLayout>
  );
}
