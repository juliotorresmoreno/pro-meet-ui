"use client";

import { Card, CardBody, Col, Container, Nav, Row } from "reactstrap";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import DashboardHeader from "./Header";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";

const translations = {
  en: {
    overview: "Overview",
    meetings: "Meetings",
    calendar: "Calendar",
    settings: "Settings",
  },
  es: {
    overview: "Resumen",
    meetings: "Reuniones",
    calendar: "Calendario",
    settings: "Configuración",
  },
  fr: {
    overview: "Aperçu",
    meetings: "Réunions",
    calendar: "Calendrier",
    settings: "Paramètres",
  },
  ja: {
    overview: "概要",
    meetings: "ミーティング",
    calendar: "カレンダー",
    settings: "設定",
  },
  zh: {
    overview: "概览",
    meetings: "会议",
    calendar: "日历",
    settings: "设置",
  },
};

interface DashboardLayoutProps {
  readonly children?: React.ReactNode;
  readonly navItems?: Array<{
    href: string;
    icon: string;
    label: string;
  }>;
}

export default function DashboardLayout({
  children,
  navItems,
}: DashboardLayoutProps) {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const localizedNavItems = useMemo(() => {
    if (navItems) return navItems;
    return [
      { href: "/dashboard", icon: "bi-speedometer2", label: t.overview },
      {
        href: "/dashboard/meetings",
        icon: "bi-calendar-check",
        label: t.meetings,
      },
      { href: "/dashboard/calendar", icon: "bi-calendar3", label: t.calendar },
      { href: "/dashboard/settings", icon: "bi-gear", label: t.settings },
    ];
  }, [navItems, t]);

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
                    {localizedNavItems.map(({ href, icon, label }) => (
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
