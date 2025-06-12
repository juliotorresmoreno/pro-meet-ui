"use client";

import Head from "next/head";
import Profile from "@/screens/profile";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import ProfileLayout from "@/screens/profile/Layout";

export default function ProfilePage() {
  const language = useLanguageStore((state) => state.language) || getLanguage();

  return (
    <ProfileLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <div className="px-md-4">
        <Profile language={language} />
      </div>
    </ProfileLayout>
  );
}
