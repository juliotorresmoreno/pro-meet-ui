// app/dashboard/page.tsx
"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import DashboardLayout from "@/screens/dashboard/Layout";
import CalendarView from "@/screens/dashboard/CalendarView";

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        <CalendarView />
      </Container>
    </DashboardLayout>
  );
}
