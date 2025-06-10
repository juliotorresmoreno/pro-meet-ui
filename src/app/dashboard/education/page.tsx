"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import { useEffect, useMemo } from "react";
import DashboardLayout from "@/screens/dashboard/Layout";
import Education from "@/screens/profile/Education";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";

const translations = {
  en: {
    profile: "Profile",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  es: {
    profile: "Perfil",
    experience: "Experiencia",
    education: "Educación",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
  },
  fr: {
    profile: "Profil",
    experience: "Expérience",
    education: "Éducation",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },
  ja: {
    profile: "プロフィール",
    experience: "経験",
    education: "教育",
    skills: "スキル",
    projects: "プロジェクト",
    contact: "連絡先",
  },
  zh: {
    profile: "个人资料",
    experience: "经验",
    education: "教育",
    skills: "技能",
    projects: "项目",
    contact: "联系",
  },
};

export default function ProfilePage() {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const navItems = useMemo(
    () => [
      { href: "/dashboard/profile", icon: "bi-person", label: t.profile },
      {
        href: "/dashboard/experience",
        icon: "bi-briefcase",
        label: t.experience,
      },
      {
        href: "/dashboard/education",
        icon: "bi-mortarboard",
        label: t.education,
      },
      { href: "/dashboard/skills", icon: "bi-tools", label: t.skills },
      { href: "/dashboard/projects", icon: "bi-kanban", label: t.projects },
      { href: "/dashboard/contact", icon: "bi-envelope", label: t.contact },
    ],
    [t]
  );

  useEffect(() => {
    document.documentElement.classList.add("full-screen");
    document.body.classList.add("full-screen");
    return () => {
      document.documentElement.classList.remove("full-screen");
      document.body.classList.remove("full-screen");
    };
  }, []);

  return (
    <DashboardLayout navItems={navItems}>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        <Education language={language} />
      </Container>
    </DashboardLayout>
  );
}
