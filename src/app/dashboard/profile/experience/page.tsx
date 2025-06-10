"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import { useEffect } from "react";
import Experience from "@/screens/profile/Experience";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import ProfileLayout from "@/screens/profile/Layout";

export default function ProfilePage() {
  const language = useLanguageStore((state) => state.language) || getLanguage();

  useEffect(() => {
    document.documentElement.classList.add("full-screen");
    document.body.classList.add("full-screen");
    return () => {
      document.documentElement.classList.remove("full-screen");
      document.body.classList.remove("full-screen");
    };
  }, []);

  return (
    <ProfileLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        <Experience language={language} />
      </Container>
    </ProfileLayout>
  );
}
