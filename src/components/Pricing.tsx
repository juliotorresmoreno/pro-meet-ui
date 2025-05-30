"use client";

import { Row, Col, Button } from "reactstrap";
import { FaCheck, FaStar, FaRocket } from "react-icons/fa";
import Section from "./Section";

const translations = {
  en: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the perfect plan for your needs",
    plans: [
      {
        name: "Starter",
        price: "0",
        period: "forever",
        features: [
          "1 event type",
          "Basic scheduling",
          "Email notifications",
          "Google Calendar sync",
          "Limited support",
        ],
        cta: "Get Started",
        featured: false,
      },
      {
        name: "Professional",
        price: "10",
        period: "per month",
        features: [
          "5 event types",
          "Remove Pro-Meets branding",
          "Payment integrations",
          "Meeting polls",
          "Priority support",
          "Advanced analytics",
        ],
        cta: "Start Free Trial",
        featured: true,
      },
      {
        name: "Enterprise",
        price: "20",
        period: "per user/month",
        features: [
          "Unlimited event types",
          "Team scheduling",
          "Collective availability",
          "API access",
          "24/7 support",
          "SSO & advanced security",
        ],
        cta: "Contact Sales",
        featured: false,
      },
    ],
    footnote: "All plans come with a 14-day money-back guarantee",
  },
  es: {
    title: "Precios Sencillos y Transparentes",
    subtitle: "Elige el plan perfecto para tus necesidades",
    plans: [
      {
        name: "Básico",
        price: "0",
        period: "para siempre",
        features: [
          "1 tipo de evento",
          "Programación básica",
          "Notificaciones por email",
          "Sincronización con Google Calendar",
          "Soporte limitado",
        ],
        cta: "Empezar",
        featured: false,
      },
      {
        name: "Profesional",
        price: "10",
        period: "por mes",
        features: [
          "5 tipos de eventos",
          "Sin marca Pro-Meets",
          "Integración de pagos",
          "Encuestas de reunión",
          "Soporte prioritario",
          "Analíticas avanzadas",
        ],
        cta: "Prueba Gratis",
        featured: true,
      },
      {
        name: "Empresa",
        price: "20",
        period: "por usuario/mes",
        features: [
          "Tipos de eventos ilimitados",
          "Programación en equipo",
          "Disponibilidad colectiva",
          "Acceso a API",
          "Soporte 24/7",
          "SSO y seguridad avanzada",
        ],
        cta: "Contactar Ventas",
        featured: false,
      },
    ],
    footnote: "Todos los planes incluyen garantía de devolución de 14 días",
  },
  fr: {
    title: "Tarification Simple et Transparente",
    subtitle: "Choisissez le plan parfait pour vos besoins",
    plans: [
      {
        name: "Débutant",
        price: "0",
        period: "à vie",
        features: [
          "1 type d'événement",
          "Planification de base",
          "Notifications par email",
          "Synchronisation Google Calendar",
          "Support limité",
        ],
        cta: "Commencer",
        featured: false,
      },
      {
        name: "Professionnel",
        price: "10",
        period: "par mois",
        features: [
          "5 types d'événements",
          "Suppression de la marque Pro-Meets",
          "Intégrations de paiement",
          "Sondages de réunion",
          "Support prioritaire",
          "Analyses avancées",
        ],
        cta: "Essai Gratuit",
        featured: true,
      },
      {
        name: "Entreprise",
        price: "20",
        period: "par utilisateur/mois",
        features: [
          "Types d'événements illimités",
          "Planification d'équipe",
          "Disponibilité collective",
          "Accès API",
          "Support 24/7",
          "SSO et sécurité avancée",
        ],
        cta: "Contacter les ventes",
        featured: false,
      },
    ],
    footnote:
      "Tous les plans incluent une garantie de remboursement de 14 jours",
  },
  ja: {
    title: "シンプルで透明な価格設定",
    subtitle: "ニーズに合った完璧なプランを選択",
    plans: [
      {
        name: "スターター",
        price: "0",
        period: "永久無料",
        features: [
          "1イベントタイプ",
          "基本スケジューリング",
          "メール通知",
          "Googleカレンダー同期",
          "限定サポート",
        ],
        cta: "始める",
        featured: false,
      },
      {
        name: "プロフェッショナル",
        price: "10",
        period: "月額",
        features: [
          "5イベントタイプ",
          "Pro-Meetsブランディング削除",
          "支払い統合",
          "会議投票",
          "優先サポート",
          "高度な分析",
        ],
        cta: "無料トライアル",
        featured: true,
      },
      {
        name: "エンタープライズ",
        price: "20",
        period: "ユーザー/月",
        features: [
          "無制限イベントタイプ",
          "チームスケジューリング",
          "共同利用可能時間",
          "APIアクセス",
          "24/7サポート",
          "SSOと高度なセキュリティ",
        ],
        cta: "営業に連絡",
        featured: false,
      },
    ],
    footnote: "全プラン14日間返金保証付き",
  },
  zh: {
    title: "简单透明的定价",
    subtitle: "选择适合您需求的完美计划",
    plans: [
      {
        name: "入门版",
        price: "0",
        period: "永久免费",
        features: [
          "1种活动类型",
          "基本日程安排",
          "电子邮件通知",
          "Google日历同步",
          "有限支持",
        ],
        cta: "开始使用",
        featured: false,
      },
      {
        name: "专业版",
        price: "10",
        period: "每月",
        features: [
          "5种活动类型",
          "移除Pro-Meets品牌",
          "支付集成",
          "会议投票",
          "优先支持",
          "高级分析",
        ],
        cta: "免费试用",
        featured: true,
      },
      {
        name: "企业版",
        price: "20",
        period: "每用户/月",
        features: [
          "无限活动类型",
          "团队日程安排",
          "集体可用性",
          "API访问",
          "24/7支持",
          "单点登录和高级安全",
        ],
        cta: "联系销售",
        featured: false,
      },
    ],
    footnote: "所有计划均提供14天退款保证",
  },
};

interface PricingProps {
  language?: string;
}

const Pricing = ({ language = "en" }: PricingProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="pricing"
      title={t.title}
      subtitle={t.subtitle}
      background="white"
      padding="lg"
    >
      <Row className="g-4 justify-content-center">
        {t.plans.map((plan) => (
          <Col lg={4} md={6} key={plan.name}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              className={`h-100 p-4 rounded-3 ${
                plan.featured ? "border border-2 border-primary" : "border"
              } bg-white`}
            >

              <div
                style={{
                  visibility: plan.featured ? "visible" : "hidden",
                }}
                className="text-center mb-3"
              >
                <span className="badge bg-primary text-white rounded-pill px-3 py-2">
                  <FaStar className="me-2" />
                  Most Popular
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <h3 className="text-center fw-bold mb-3">{plan.name}</h3>

                <div className="text-center mb-4">
                  <span className="display-4 fw-bold">${plan.price}</span>
                  <span className="text-muted ms-2">/{plan.period}</span>
                </div>

                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="mb-2 d-flex align-items-start">
                      <FaCheck className="text-success me-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center mt-4">
                <Button
                  color={plan.featured ? "primary" : "outline-primary"}
                  className={`rounded-pill px-4 ${
                    plan.featured ? "shadow-primary" : ""
                  }`}
                  block
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5 text-muted">
        <p className="mb-0">
          <FaRocket className="me-2 text-primary" />
          {t.footnote}
        </p>
      </div>
    </Section>
  );
};

export default Pricing;
