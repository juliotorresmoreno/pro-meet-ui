"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import Education from "@/screens/profile/Education";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import ProfileLayout from "@/screens/profile/Layout";
import { useFullScreenScroll } from "@/hooks/useFullScreenScroll";

export default function ProfilePage() {
  const language = useLanguageStore((state) => state.language) || getLanguage();

  useFullScreenScroll();

  return (
    <ProfileLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        <Education language={language} />
      </Container>
    </ProfileLayout>
  );
}
