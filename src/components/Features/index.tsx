import React from "react";
import { Row, Col } from "reactstrap";
import {
  FaCalendarAlt,
  FaClock,
  FaUserFriends,
  FaSlidersH,
  FaGoogle,
  FaShieldAlt,
} from "react-icons/fa";
import Section from "../Section";

interface FeaturesProps {
  language?: string;
}

const Features = ({ language = "en" }: FeaturesProps) => {
  const translations = {
    en: {
      title: "What can you achieve with Pro-Meets?",
      subtitle: "Transform your scheduling process with our powerful features",
      features: [
        {
          title: "One-Click Scheduling",
          description:
            "Share your personalized link and let invitees book in one click.",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />,
        },
        {
          title: "Time Zone Intelligence",
          description: "Automatic timezone detection for global teams.",
          icon: <FaClock className="text-primary" size="1.5em" />,
        },
        {
          title: "Team Coordination",
          description: "Coordinate across multiple team members' calendars.",
          icon: <FaUserFriends className="text-primary" size="1.5em" />,
        },
        {
          title: "Custom Branding",
          description:
            "White-label scheduling pages with your logo and colors.",
          icon: <FaSlidersH className="text-primary" size="1.5em" />,
        },
        {
          title: "Calendar Sync",
          description: "Real-time sync with Google, Outlook and iCloud.",
          icon: <FaGoogle className="text-primary" size="1.5em" />,
        },
        {
          title: "Secure Scheduling",
          description: "Enterprise-grade security and privacy controls.",
          icon: <FaShieldAlt className="text-primary" size="1.5em" />,
        },
      ],
    },
    es: {
      title: "¿Qué puedes lograr con Pro-Meets?",
      subtitle:
        "Transforma tu proceso de programación con nuestras potentes funciones",
      features: [
        {
          title: "Agendamiento en un clic",
          description:
            "Comparte tu enlace personalizado y deja que los invitados reserven con un clic.",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />,
        },
        {
          title: "Inteligencia de zonas horarias",
          description:
            "Detección automática de zonas horarias para equipos globales.",
          icon: <FaClock className="text-primary" size="1.5em" />,
        },
        {
          title: "Coordinación de equipo",
          description:
            "Coordina entre los calendarios de múltiples miembros del equipo.",
          icon: <FaUserFriends className="text-primary" size="1.5em" />,
        },
        {
          title: "Marca personalizada",
          description:
            "Páginas de agendamiento con tu logo y colores corporativos.",
          icon: <FaSlidersH className="text-primary" size="1.5em" />,
        },
        {
          title: "Sincronización de calendarios",
          description:
            "Sincronización en tiempo real con Google, Outlook e iCloud.",
          icon: <FaGoogle className="text-primary" size="1.5em" />,
        },
        {
          title: "Agendamiento seguro",
          description:
            "Controles de seguridad y privacidad de nivel empresarial.",
          icon: <FaShieldAlt className="text-primary" size="1.5em" />,
        },
      ],
    },
    fr: {
      title: "Que pouvez-vous accomplir avec Pro-Meets ?",
      subtitle:
        "Transformez votre processus de planification avec nos fonctionnalités puissantes",
      features: [
        {
          title: "Planification en un clic",
          description:
            "Partagez votre lien personnalisé et laissez les invités réserver en un clic.",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />,
        },
        {
          title: "Gestion des fuseaux horaires",
          description:
            "Détection automatique des fuseaux horaires pour les équipes mondiales.",
          icon: <FaClock className="text-primary" size="1.5em" />,
        },
        {
          title: "Coordination d'équipe",
          description:
            "Coordonnez les calendriers de plusieurs membres de l'équipe.",
          icon: <FaUserFriends className="text-primary" size="1.5em" />,
        },
        {
          title: "Marque personnalisée",
          description:
            "Pages de planification avec votre logo et vos couleurs.",
          icon: <FaSlidersH className="text-primary" size="1.5em" />,
        },
        {
          title: "Synchronisation des calendriers",
          description:
            "Synchronisation en temps réel avec Google, Outlook et iCloud.",
          icon: <FaGoogle className="text-primary" size="1.5em" />,
        },
        {
          title: "Planification sécurisée",
          description:
            "Contrôles de sécurité et de confidentialité de niveau entreprise.",
          icon: <FaShieldAlt className="text-primary" size="1.5em" />,
        },
      ],
    },
    ja: {
      title: "Pro-Meetsでできること",
      subtitle: "強力な機能でスケジュール管理を変革",
      features: [
        {
          title: "ワンクリックスケジューリング",
          description:
            "パーソナライズされたリンクを共有し、1クリックで予約可能。",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />,
        },
        {
          title: "タイムゾーン対応",
          description: "グローバルチームのための自動タイムゾーン検出。",
          icon: <FaClock className="text-primary" size="1.5em" />,
        },
        {
          title: "チーム調整",
          description: "複数のチームメンバーのカレンダーを調整。",
          icon: <FaUserFriends className="text-primary" size="1.5em" />,
        },
        {
          title: "カスタムブランディング",
          description: "あなたのロゴと色でスケジュールページをカスタマイズ。",
          icon: <FaSlidersH className="text-primary" size="1.5em" />,
        },
        {
          title: "カレンダー同期",
          description: "Google、Outlook、iCloudとリアルタイム同期。",
          icon: <FaGoogle className="text-primary" size="1.5em" />,
        },
        {
          title: "安全なスケジューリング",
          description: "企業レベルのセキュリティとプライバシー管理。",
          icon: <FaShieldAlt className="text-primary" size="1.5em" />,
        },
      ],
    },
    zh: {
      title: "Pro-Meets 能为您做什么？",
      subtitle: "用我们强大的功能改变您的日程安排流程",
      features: [
        {
          title: "一键安排",
          description: "分享您的个性化链接，让受邀者一键预订。",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />,
        },
        {
          title: "时区智能",
          description: "为全球团队自动检测时区。",
          icon: <FaClock className="text-primary" size="1.5em" />,
        },
        {
          title: "团队协调",
          description: "协调多个团队成员的日历。",
          icon: <FaUserFriends className="text-primary" size="1.5em" />,
        },
        {
          title: "自定义品牌",
          description: "使用您的标志和颜色的白标日程页面。",
          icon: <FaSlidersH className="text-primary" size="1.5em" />,
        },
        {
          title: "日历同步",
          description: "与Google、Outlook和iCloud实时同步。",
          icon: <FaGoogle className="text-primary" size="1.5em" />,
        },
        {
          title: "安全日程安排",
          description: "企业级安全和隐私控制。",
          icon: <FaShieldAlt className="text-primary" size="1.5em" />,
        },
      ],
    },
  };

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="features"
      title={t.title}
      subtitle={t.subtitle}
      background="light"
      padding="lg"
    >
      <Row className="g-4">
        {t.features.map((feature) => (
          <Col md={6} lg={4} key={feature.title}>
            <div className="feature-card h-100 p-4 bg-white rounded-3 shadow-sm">
              <div className="d-flex align-items-start">
                <div className="icon-container me-3">{feature.icon}</div>
                <div>
                  <h3 className="h5 fw-bold mb-2 text-dark">{feature.title}</h3>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default Features;
