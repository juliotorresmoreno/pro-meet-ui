// app/dashboard/page.tsx
"use client";

import Head from "next/head";
import { Col, Container, Row } from "reactstrap";
import DashboardLayout from "@/components/DashboardLayout";
import MeetingStatsCard from "@/components/MeetingStatsCard";
import UpcomingMeetings from "@/components/UpcomingMeetings";
import RecentActivity from "@/components/RecentActivity";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="main-content px-md-4">
        <Row className="g-4 mb-4">
          <Col md={6} lg={3}>
            <MeetingStatsCard
              title="Total Meetings"
              value="128"
              change="+12%"
              icon={<i className="bi bi-calendar-check fs-1"></i>}
            />
          </Col>
          <Col md={6} lg={3}>
            <MeetingStatsCard
              title="Upcoming"
              value="15"
              change="+5"
              icon={<i className="bi bi-clock fs-1"></i>}
            />
          </Col>
          <Col md={6} lg={3}>
            <MeetingStatsCard
              title="Completion Rate"
              value="92%"
              change="+3%"
              icon={<i className="bi bi-check-circle fs-1"></i>}
            />
          </Col>
          <Col md={6} lg={3}>
            <MeetingStatsCard
              title="Avg. Duration"
              value="32m"
              change="-2m"
              icon={<i className="bi bi-stopwatch fs-1"></i>}
            />
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={7}>
            <UpcomingMeetings />
          </Col>
          <Col lg={5}>
            <RecentActivity />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}
