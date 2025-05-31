"use client";

import React from "react";
import { Button } from "reactstrap";
import Link from "next/link";
import Section from "./Section";

interface CTAProps {
  language?: string;
}

const CallToAction = ({ language = "en" }: CTAProps) => {
  const translations = {
    en: {
      title: "Ready to simplify your scheduling?",
      subtitle: "Join 10,000+ professionals saving hours every week",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "See How It Works",
    },
    es: {
      title: "¿Listo para simplificar tu agenda?",
      subtitle:
        "Únete a más de 10,000 profesionales ahorrando horas cada semana",
      ctaPrimary: "Prueba Gratis",
      ctaSecondary: "Ver Demo",
    },
    fr: {
      title: "Prêt à simplifier votre planning?",
      subtitle:
        "Rejoignez 10 000+ professionnels qui gagnent des heures chaque semaine",
      ctaPrimary: "Essai Gratuit",
      ctaSecondary: "Voir la Démo",
    },
    ja: {
      title: "スケジュール管理をシンプルにしませんか？",
      subtitle: "週に数時間を節約する10,000人以上のプロフェッショナルに参加",
      ctaPrimary: "無料トライアル",
      ctaSecondary: "デモを見る",
    },
    zh: {
      title: "准备好简化您的日程安排了吗？",
      subtitle: "加入10,000多名每周节省数小时的专业人士行列",
      ctaPrimary: "免费试用",
      ctaSecondary: "查看演示",
    },
  };

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
