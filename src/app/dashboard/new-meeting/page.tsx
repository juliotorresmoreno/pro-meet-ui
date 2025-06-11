// app/dashboard/page.tsx
"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import DashboardLayout from "@/screens/dashboard/Layout";
import { useFullScreenScroll } from "@/hooks/useFullScreenScroll";

export default function NewMeetingsPage() {
  useFullScreenScroll();

  return (
    <DashboardLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="main-content px-md-4">
        New Meeting Page
      </Container>
    </DashboardLayout>
  );
}
