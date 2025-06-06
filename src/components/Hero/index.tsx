"use client";

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import { translations } from "./translations";

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
