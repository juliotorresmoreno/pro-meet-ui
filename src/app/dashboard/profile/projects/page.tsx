"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import ProfileLayout from "@/screens/profile/Layout";
import Projects from "@/screens/profile/Projects";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
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
        <Projects language={language} />
      </Container>
    </ProfileLayout>
  );
}
