// app/dashboard/page.tsx
"use client";

import DashboardHeader from "@/components/DashboardHeader";
import { Col, Container, Nav, NavItem, Row } from "reactstrap";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  readonly children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <>
      <DashboardHeader />

      <Container fluid className="main-content px-md-4">
        <Row className="mt-4">
          <Col md={3} lg={2} className="pe-md-3">
            <Nav vertical className="dashboard-nav">
              <NavItem>
                <Link
                  href="/dashboard"
                  className={`${classnames({
                    active: pathname === "/dashboard",
                  })} d-flex align-items-center nav-link`}
                >
                  <i className="bi bi-speedometer2 me-2"></i>{" "}
                  <span>Overview</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="/dashboard/meetings"
                  className={`${classnames({
                    active: pathname === "/dashboard/meetings",
                  })} d-flex align-items-center nav-link`}
                >
                  <i className="bi bi-calendar-check me-2"></i> Meetings
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="/dashboard/calendar"
                  className={`${classnames({
                    active: pathname === "/dashboard/calendar",
                  })} d-flex align-items-center nav-link`}
                >
                  <i className="bi bi-calendar3 me-2"></i> Calendar
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="/dashboard/settings"
                  className={`${classnames({
                    active: pathname === "/dashboard/settings",
                  })} d-flex align-items-center nav-link`}
                >
                  <i className="bi bi-gear me-2"></i> Settings
                </Link>
              </NavItem>
            </Nav>
          </Col>
          <Col md={9} lg={10} className="ps-md-4">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}
