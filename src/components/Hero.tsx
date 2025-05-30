"use client";

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

const translations = {
  en: {
    title: "Schedule meetings without the back-and-forth",
    subtitle:
      "Pro-Meets eliminates email threads for scheduling and saves time for your team and clients",
    ctaPrimary: "Get Started for Free",
    ctaSecondary: "Watch Demo",
    stats: "Trusted by 10,000+ professionals worldwide",
  },
  es: {
    title: "Programa reuniones sin idas y vueltas",
    subtitle:
      "Pro-Meets elimina los hilos de correo para programar y ahorra tiempo a tu equipo y clientes",
    ctaPrimary: "Comienza Gratis",
    ctaSecondary: "Ver Demo",
    stats: "Usado por más de 10,000 profesionales",
  },
  fr: {
    title: "Planifiez des réunions sans aller-retour",
    subtitle:
      "Pro-Meets élimine les échanges de mails pour la planification et fait gagner du temps à votre équipe et clients",
    ctaPrimary: "Commencer Gratuitement",
    ctaSecondary: "Voir la Démo",
    stats: "Utilisé par plus de 10 000 professionnels",
  },
  ja: {
    title: "面倒な調整なしで会議をスケジュール",
    subtitle:
      "Pro-Meetsはメールのやり取りをなくし、チームとクライアントの時間を節約します",
    ctaPrimary: "無料で始める",
    ctaSecondary: "デモを見る",
    stats: "世界中の10,000人以上のプロフェッショナルに信頼されています",
  },
  zh: {
    title: "无需来回沟通即可安排会议",
    subtitle: "Pro-Meets 消除安排会议时的邮件往来，为您的团队和客户节省时间",
    ctaPrimary: "免费开始",
    ctaSecondary: "观看演示",
    stats: "受到10,000多名专业人士的信赖",
  },
};
interface HeroProps {
  language?: string;
}

const Hero = ({ language = "en" }: HeroProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="hero-section py-5 py-lg-7 bg-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4 text-black">{t.title}</h1>
            <p className="lead mb-4 text-muted">{t.subtitle}</p>
            <div className="d-flex flex-wrap gap-3">
              <Link href="/register">
                <Button
                  color="primary"
                  size="lg"
                  className="rounded-pill px-4 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                  }}
                >
                  {t.ctaPrimary}
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  outline
                  color="primary"
                  size="lg"
                  className="rounded-pill px-4"
                >
                  <i className="bi bi-play-circle me-2"></i>
                  {t.ctaSecondary}
                </Button>
              </Link>
            </div>
            <p className="text-muted mt-4 small">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {t.stats}
            </p>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <Image
                src={"/assets/undraw_schedule-meeting_aklb.png"}
                alt="Pro-Meets Dashboard"
                width={800}
                height={600}
                className="img-fluid rounded"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
