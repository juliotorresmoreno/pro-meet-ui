import React from "react";
import { Row, Col } from "reactstrap";
import { 
  FaCalendarAlt,
  FaShareSquare,
  FaCheckCircle,
  FaClock,
  FaUserCog,
  FaSyncAlt
} from "react-icons/fa";
import Section from "@/components/Section";

interface HowItWorksProps {
  language?: string;
}

const HowItWorks = ({ language = "en" }: HowItWorksProps) => {
  const translations = {
    en: {
      title: "How Pro-Meets Works",
      subtitle: "Get started in just three simple steps",
      steps: [
        {
          title: "Set Your Availability",
          description: "Define your working hours and meeting preferences in just a few clicks.",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />
        },
        {
          title: "Share Your Link",
          description: "Send your personalized booking page to clients or embed it on your website.",
          icon: <FaShareSquare className="text-primary" size="1.5em" />
        },
        {
          title: "Get Bookings",
          description: "Receive confirmed appointments without the back-and-forth emails.",
          icon: <FaCheckCircle className="text-primary" size="1.5em" />
        },
        {
          title: "Time Zone Handling",
          description: "Automatic timezone conversion for international clients.",
          icon: <FaClock className="text-primary" size="1.5em" />
        },
        {
          title: "Customize Settings",
          description: "Adjust buffer times, meeting durations and notifications.",
          icon: <FaUserCog className="text-primary" size="1.5em" />
        },
        {
          title: "Sync Calendars",
          description: "Real-time sync with your existing calendar apps.",
          icon: <FaSyncAlt className="text-primary" size="1.5em" />
        }
      ]
    },
    es: {
      title: "Cómo funciona Pro-Meets",
      subtitle: "Comienza en solo tres sencillos pasos",
      steps: [
        {
          title: "Configura tu disponibilidad",
          description: "Define tus horarios laborales y preferencias de reunión con unos clics.",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />
        },
        {
          title: "Comparte tu enlace",
          description: "Envía tu página de reservas personalizada o intégrala en tu sitio web.",
          icon: <FaShareSquare className="text-primary" size="1.5em" />
        },
        {
          title: "Recibe reservas",
          description: "Obtén citas confirmadas sin intercambios interminables de correos.",
          icon: <FaCheckCircle className="text-primary" size="1.5em" />
        },
        {
          title: "Manejo de zonas horarias",
          description: "Conversión automática de zonas horarias para clientes internacionales.",
          icon: <FaClock className="text-primary" size="1.5em" />
        },
        {
          title: "Personaliza ajustes",
          description: "Configura tiempos de buffer, duraciones de reunión y notificaciones.",
          icon: <FaUserCog className="text-primary" size="1.5em" />
        },
        {
          title: "Sincroniza calendarios",
          description: "Sincronización en tiempo real con tus aplicaciones de calendario.",
          icon: <FaSyncAlt className="text-primary" size="1.5em" />
        }
      ]
    },
    fr: {
      title: "Comment fonctionne Pro-Meets",
      subtitle: "Commencez en trois étapes simples",
      steps: [
        {
          title: "Définissez vos disponibilités",
          description: "Configurez vos heures de travail et préférences de réunion en quelques clics.",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />
        },
        {
          title: "Partagez votre lien",
          description: "Envoyez votre page de réservation personnalisée ou intégrez-la à votre site web.",
          icon: <FaShareSquare className="text-primary" size="1.5em" />
        },
        {
          title: "Recevez des réservations",
          description: "Obtenez des rendez-vous confirmés sans échanges de mails interminables.",
          icon: <FaCheckCircle className="text-primary" size="1.5em" />
        },
        {
          title: "Gestion des fuseaux horaires",
          description: "Conversion automatique des fuseaux horaires pour les clients internationaux.",
          icon: <FaClock className="text-primary" size="1.5em" />
        },
        {
          title: "Personnalisez les paramètres",
          description: "Ajustez les temps de buffer, durées de réunion et notifications.",
          icon: <FaUserCog className="text-primary" size="1.5em" />
        },
        {
          title: "Synchronisez les calendriers",
          description: "Synchronisation en temps réel avec vos applications de calendrier existantes.",
          icon: <FaSyncAlt className="text-primary" size="1.5em" />
        }
      ]
    },
    ja: {
      title: "Pro-Meetsの使い方",
      subtitle: "3つの簡単なステップで開始",
      steps: [
        {
          title: "空き時間を設定",
          description: "数回のクリックで勤務時間と会議の設定を定義。",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />
        },
        {
          title: "リンクを共有",
          description: "パーソナライズされた予約ページを送信またはウェブサイトに埋め込み。",
          icon: <FaShareSquare className="text-primary" size="1.5em" />
        },
        {
          title: "予約を受信",
          description: "メールのやり取りなしで確定した予約を取得。",
          icon: <FaCheckCircle className="text-primary" size="1.5em" />
        },
        {
          title: "タイムゾーン処理",
          description: "国際的なクライアントのための自動タイムゾーン変換。",
          icon: <FaClock className="text-primary" size="1.5em" />
        },
        {
          title: "設定をカスタマイズ",
          description: "バッファ時間、会議時間、通知を調整。",
          icon: <FaUserCog className="text-primary" size="1.5em" />
        },
        {
          title: "カレンダーを同期",
          description: "既存のカレンダーアプリとリアルタイム同期。",
          icon: <FaSyncAlt className="text-primary" size="1.5em" />
        }
      ]
    },
    zh: {
      title: "Pro-Meets 如何工作",
      subtitle: "只需三个简单步骤即可开始",
      steps: [
        {
          title: "设置您的可用时间",
          description: "只需点击几下即可定义您的工作时间和会议偏好。",
          icon: <FaCalendarAlt className="text-primary" size="1.5em" />
        },
        {
          title: "分享您的链接",
          description: "发送您的个性化预订页面或将其嵌入到您的网站中。",
          icon: <FaShareSquare className="text-primary" size="1.5em" />
        },
        {
          title: "获取预订",
          description: "无需来回邮件即可获得确认的约会。",
          icon: <FaCheckCircle className="text-primary" size="1.5em" />
        },
        {
          title: "时区处理",
          description: "为国际客户自动转换时区。",
          icon: <FaClock className="text-primary" size="1.5em" />
        },
        {
          title: "自定义设置",
          description: "调整缓冲时间、会议持续时间和通知。",
          icon: <FaUserCog className="text-primary" size="1.5em" />
        },
        {
          title: "同步日历",
          description: "与您现有的日历应用程序实时同步。",
          icon: <FaSyncAlt className="text-primary" size="1.5em" />
        }
      ]
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="how-it-works"
      title={t.title}
      subtitle={t.subtitle}
      background="light"
      padding="lg"
    >
      <Row className="g-4">
        {t.steps.map((step, index) => (
          <Col md={6} lg={4} key={step.title}>
            <div className="step-card h-100 p-4 bg-white rounded-3 shadow-sm">
              <div className="step-number text-primary fw-bold mb-3">0{index + 1}</div>
              <div className="d-flex align-items-start">
                <div className="icon-container me-3">
                  {step.icon}
                </div>
                <div>
                  <h3 className="h5 fw-bold mb-2 text-dark">{step.title}</h3>
                  <p className="text-muted mb-0">{step.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default HowItWorks;