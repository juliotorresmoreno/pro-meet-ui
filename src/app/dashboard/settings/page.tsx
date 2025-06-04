// app/dashboard/page.tsx
"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import DashboardLayout from "@/components/DashboardLayout";
import SettingsPanel from "@/components/SettingsPanel";

export default function OverviewPage() {
  return (
    <DashboardLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        <SettingsPanel />
      </Container>
    </DashboardLayout>
  );
}
