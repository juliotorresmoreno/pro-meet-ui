"use client";

import React from "react";
import { Button } from "reactstrap";
import Link from "next/link";
import Section from "../Section";
import { translations } from "./translations";

interface CTAProps {
  language?: string;
}

const CallToAction = ({ language = "en" }: CTAProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="call-to-action"
      title={t.title}
      subtitle={t.subtitle}
      background="light"
      padding="lg"
    >
      <div className="d-flex flex-wrap justify-content-center gap-3 pt-3">
        <Link href="/register">
          <Button
            color="primary"
            size="lg"
            className="rounded-pill px-4 fw-medium"
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
            {t.ctaSecondary}
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default CallToAction;
