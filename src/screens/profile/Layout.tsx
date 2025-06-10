import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import { useMemo } from "react";
import DashboardLayout from "../dashboard/Layout";

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

interface ProfileLayoutProps {
  readonly children?: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const navItems = useMemo(
    () => [
      { href: "/dashboard/profile", icon: "bi-person", label: t.profile },
      {
        href: "/dashboard/profile/experience",
        icon: "bi-briefcase",
        label: t.experience,
      },
      {
        href: "/dashboard/profile/education",
        icon: "bi-mortarboard",
        label: t.education,
      },
      // { href: "/dashboard/profile/skills", icon: "bi-tools", label: t.skills },
      { href: "/dashboard/profile/projects", icon: "bi-kanban", label: t.projects },
      // { href: "/dashboard/profile/contact", icon: "bi-envelope", label: t.contact },
    ],
    [t]
  );

  return <DashboardLayout navItems={navItems}>{children}</DashboardLayout>;
};

export default ProfileLayout;
