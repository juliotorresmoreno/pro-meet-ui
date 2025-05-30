// app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Head from 'next/head';
import DashboardHeader from '@/components/DashboardHeader';
import MeetingStatsCard from '@/components/MeetingStatsCard';
import UpcomingMeetings from '@/components/UpcomingMeetings';
import RecentActivity from '@/components/RecentActivity';
import CalendarView from '@/components/CalendarView';
import SettingsPanel from '@/components/SettingsPanel';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <DashboardHeader />

      <Container fluid className="main-content px-md-4">
        <Row className="mt-4">
          <Col md={3} lg={2} className="pe-md-3">
            <Nav vertical className="dashboard-nav">
              <NavItem>
                <NavLink 
                  active={activeTab === 'overview'} 
                  onClick={() => setActiveTab('overview')}
                  className="d-flex align-items-center"
                >
                  <i className="bi bi-speedometer2 me-2"></i>
                  Overview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  active={activeTab === 'meetings'} 
                  onClick={() => setActiveTab('meetings')}
                  className="d-flex align-items-center"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Meetings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  active={activeTab === 'calendar'} 
                  onClick={() => setActiveTab('calendar')}
                  className="d-flex align-items-center"
                >
                  <i className="bi bi-calendar3 me-2"></i>
                  Calendar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  active={activeTab === 'settings'} 
                  onClick={() => setActiveTab('settings')}
                  className="d-flex align-items-center"
                >
                  <i className="bi bi-gear me-2"></i>
                  Settings
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col md={9} lg={10} className="ps-md-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="overview">
                <OverviewTab />
              </TabPane>
              <TabPane tabId="meetings">
                <MeetingsTab />
              </TabPane>
              <TabPane tabId="calendar">
                <CalendarTab />
              </TabPane>
              <TabPane tabId="settings">
                <SettingsTab />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// Componentes de cada pestaña
function OverviewTab() {
  return (
    <>
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
    </>
  );
}

function MeetingsTab() {
  return (
    <div>
      <h2 className="mb-4">Your Meetings</h2>
      {/* Aquí iría el componente de listado de reuniones */}
    </div>
  );
}

function CalendarTab() {
  return (
    <div className="calendar-container">
      <CalendarView />
    </div>
  );
}

function SettingsTab() {
  return (
    <div>
      <h2 className="mb-4">Settings</h2>
      <SettingsPanel />
    </div>
  );
}