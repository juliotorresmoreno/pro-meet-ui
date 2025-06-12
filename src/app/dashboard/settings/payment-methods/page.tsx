"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import SettingsLayout from "@/screens/settings/Layout";
import PaymentMethods from "@/screens/settings/PaymentMethods";

export default function SettingsPage() {
  const language = useLanguageStore((state) => state.language) || getLanguage();

  return (
    <SettingsLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        <PaymentMethods language={language} />
      </Container>
    </SettingsLayout>
  );
}
