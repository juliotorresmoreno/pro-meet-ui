"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import SettingsLayout from "@/screens/settings/Layout";
import Security from "@/screens/settings/Security";
import { useFullScreenScroll } from "@/hooks/useFullScreenScroll";

export default function SettingsPage() {
  const language = useLanguageStore((state) => state.language) || getLanguage();

  useFullScreenScroll();

  return (
    <SettingsLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        <Security language={language} />
      </Container>
    </SettingsLayout>
  );
}
