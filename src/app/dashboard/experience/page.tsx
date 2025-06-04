"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import { useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Experience from "@/components/Experience";

const defaultNavItems = [
  { href: "/dashboard/profile", icon: "bi-person", label: "Profile" },
  { href: "/dashboard/experience", icon: "bi-briefcase", label: "Experience" },
  { href: "/dashboard/education", icon: "bi-mortarboard", label: "Education" },
  { href: "/dashboard/skills", icon: "bi-tools", label: "Skills" },
  { href: "/dashboard/projects", icon: "bi-kanban", label: "Projects" },
  { href: "/dashboard/contact", icon: "bi-envelope", label: "Contact" },
];

export default function ProfilePage() {
  useEffect(() => {
    document.documentElement.classList.add("full-screen");
    document.body.classList.add("full-screen");
    return () => {
      document.documentElement.classList.remove("full-screen");
      document.body.classList.remove("full-screen");
    };
  }, []);

  return (
    <DashboardLayout navItems={defaultNavItems}>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        <Experience />
      </Container>
    </DashboardLayout>
  );
}
