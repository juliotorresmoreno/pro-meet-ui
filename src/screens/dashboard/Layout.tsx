// app/dashboard/page.tsx
"use client";

import DashboardHeader from "@/screens/dashboard/Header";
import { Card, CardBody, Col, Container, Nav, Row } from "reactstrap";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface DashboardLayoutProps {
  readonly children?: React.ReactNode;
  readonly navItems?: Array<{
    href: string;
    icon: string;
    label: string;
  }>;
}

const defaultNavItems = [
  { href: "/dashboard", icon: "bi-speedometer2", label: "Overview" },
  { href: "/dashboard/meetings", icon: "bi-calendar-check", label: "Meetings" },
  { href: "/dashboard/calendar", icon: "bi-calendar3", label: "Calendar" },
  { href: "/dashboard/settings", icon: "bi-gear", label: "Settings" },
];

export default function DashboardLayout({
  children,
  navItems = defaultNavItems,
}: DashboardLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("full-screen");
    document.body.classList.add("full-screen");
    return () => {
      document.documentElement.classList.remove("full-screen");
      document.body.classList.remove("full-screen");
    };
  }, []);

  return (
    <>
      <DashboardHeader />

      <Container fluid className="main-content px-md-4">
        <Row className="mt-4 d-flex flex-fill">
          <Col md={3} lg={2} className="pe-md-1 d-flex flex-column">
            <Card className="shadow-sm mb-2 border-0 d-flex">
              <CardBody>
                <Nav vertical className="dashboard-nav">
                  <ul className="list-unstyled m-0 p-0">
                    {navItems.map(({ href, icon, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className={`${classnames({
                            active: pathname === href,
                          })} d-flex align-items-center nav-link`}
                        >
                          <i className={`bi ${icon} me-2`}></i> {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Nav>
              </CardBody>
            </Card>
          </Col>
          <Col md={9} lg={10} className="ps-md-1 d-flex flex-fill">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}
