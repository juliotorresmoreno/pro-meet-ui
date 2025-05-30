import React from "react";
import { Row, Col } from "reactstrap";
import { 
  FaUserTie, 
  FaUsers, 
  FaGraduationCap,
  FaCalendarCheck,
  FaHandshake,
  FaLaptopCode
} from "react-icons/fa";
import Section from "./Section";

interface UseCasesProps {
  language?: string;
}

const UseCases = ({ language = "en" }: UseCasesProps) => {
  const translations = {
    en: {
      title: "Who Benefits from Pro-Meets?",
      subtitle: "Optimized scheduling solutions for every professional need",
      cases: [
        {
          title: "Executives & Managers",
          description: "Streamline your meeting scheduling without back-and-forth emails.",
          icon: <FaUserTie className="text-primary" size="1.5em" />
        },
        {
          title: "Sales Teams",
          description: "Let prospects book meetings directly in your available slots.",
          icon: <FaUsers className="text-primary" size="1.5em" />
        },
        {
          title: "Educators & Trainers",
          description: "Manage student appointments and consultations efficiently.",
          icon: <FaGraduationCap className="text-primary" size="1.5em" />
        },
        {
          title: "Recruiters",
          description: "Simplify interview scheduling with candidates.",
          icon: <FaCalendarCheck className="text-primary" size="1.5em" />
        },
        {
          title: "Consultants",
          description: "Offer professional booking experience to your clients.",
          icon: <FaHandshake className="text-primary" size="1.5em" />
        },
        {
          title: "Freelancers",
          description: "Manage client meetings without the scheduling hassle.",
          icon: <FaLaptopCode className="text-primary" size="1.5em" />
        }
      ]
    },
    es: {
      title: "¿Quién se beneficia con Pro-Meets?",
      subtitle: "Soluciones de programación optimizadas para cada necesidad profesional",
      cases: [
        {
          title: "Ejecutivos y Gerentes",
          description: "Agiliza la programación de reuniones sin correos interminables.",
          icon: <FaUserTie className="text-primary" size="1.5em" />
        },
        {
          title: "Equipos de Ventas",
          description: "Permite que los prospectos agenden reuniones directamente en tus horarios disponibles.",
          icon: <FaUsers className="text-primary" size="1.5em" />
        },
        {
          title: "Educadores y Capacitadores",
          description: "Gestiona citas y consultas con estudiantes de manera eficiente.",
          icon: <FaGraduationCap className="text-primary" size="1.5em" />
        },
        {
          title: "Reclutadores",
          description: "Simplifica la programación de entrevistas con candidatos.",
          icon: <FaCalendarCheck className="text-primary" size="1.5em" />
        },
        {
          title: "Consultores",
          description: "Ofrece una experiencia profesional de reserva a tus clientes.",
          icon: <FaHandshake className="text-primary" size="1.5em" />
        },
        {
          title: "Freelancers",
          description: "Gestiona reuniones con clientes sin complicaciones de agenda.",
          icon: <FaLaptopCode className="text-primary" size="1.5em" />
        }
      ]
    },
    fr: {
      title: "Qui bénéficie de Pro-Meets ?",
      subtitle: "Solutions de planification optimisées pour chaque besoin professionnel",
      cases: [
        {
          title: "Cadres & Managers",
          description: "Simplifiez la planification de vos réunions sans échanges de mails interminables.",
          icon: <FaUserTie className="text-primary" size="1.5em" />
        },
        {
          title: "Équipes Commerciales",
          description: "Permettez aux prospects de réserver des réunions directement dans vos créneaux disponibles.",
          icon: <FaUsers className="text-primary" size="1.5em" />
        },
        {
          title: "Éducateurs & Formateurs",
          description: "Gérez efficacement les rendez-vous et consultations avec les étudiants.",
          icon: <FaGraduationCap className="text-primary" size="1.5em" />
        },
        {
          title: "Recruteurs",
          description: "Simplifiez la planification des entretiens avec les candidats.",
          icon: <FaCalendarCheck className="text-primary" size="1.5em" />
        },
        {
          title: "Consultants",
          description: "Offrez une expérience de réservation professionnelle à vos clients.",
          icon: <FaHandshake className="text-primary" size="1.5em" />
        },
        {
          title: "Indépendants",
          description: "Gérez les réunions clients sans tracas de planification.",
          icon: <FaLaptopCode className="text-primary" size="1.5em" />
        }
      ]
    },
    ja: {
      title: "Pro-Meetsの受益者は？",
      subtitle: "あらゆる専門的なニーズに最適化されたスケジューリングソリューション",
      cases: [
        {
          title: "経営陣とマネージャー",
          description: "メールのやり取りなしで会議のスケジュールを効率化。",
          icon: <FaUserTie className="text-primary" size="1.5em" />
        },
        {
          title: "営業チーム",
          description: "見込み客が直接空き時間に会議を予約可能に。",
          icon: <FaUsers className="text-primary" size="1.5em" />
        },
        {
          title: "教育者とトレーナー",
          description: "学生とのアポイントメントや相談を効率的に管理。",
          icon: <FaGraduationCap className="text-primary" size="1.5em" />
        },
        {
          title: "採用担当者",
          description: "候補者との面接日程調整を簡素化。",
          icon: <FaCalendarCheck className="text-primary" size="1.5em" />
        },
        {
          title: "コンサルタント",
          description: "クライアントにプロフェッショナルな予約体験を提供。",
          icon: <FaHandshake className="text-primary" size="1.5em" />
        },
        {
          title: "フリーランサー",
          description: "面倒なスケジュール調整なしでクライアントと会議。",
          icon: <FaLaptopCode className="text-primary" size="1.5em" />
        }
      ]
    },
    zh: {
      title: "谁从Pro-Meets中受益？",
      subtitle: "为各种专业需求优化的日程安排解决方案",
      cases: [
        {
          title: "高管和经理",
          description: "无需来回邮件即可简化会议安排。",
          icon: <FaUserTie className="text-primary" size="1.5em" />
        },
        {
          title: "销售团队",
          description: "让潜在客户直接在您的空闲时间预订会议。",
          icon: <FaUsers className="text-primary" size="1.5em" />
        },
        {
          title: "教育工作者和培训师",
          description: "高效管理学生预约和咨询。",
          icon: <FaGraduationCap className="text-primary" size="1.5em" />
        },
        {
          title: "招聘人员",
          description: "简化与候选人的面试安排。",
          icon: <FaCalendarCheck className="text-primary" size="1.5em" />
        },
        {
          title: "顾问",
          description: "为客户提供专业的预订体验。",
          icon: <FaHandshake className="text-primary" size="1.5em" />
        },
        {
          title: "自由职业者",
          description: "无需繁琐安排即可管理客户会议。",
          icon: <FaLaptopCode className="text-primary" size="1.5em" />
        }
      ]
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="use-cases"
      title={t.title}
      subtitle={t.subtitle}
      background="white"
      padding="lg"
    >
      <Row className="g-4">
        {t.cases.map((useCase) => (
          <Col md={6} lg={4} key={useCase.title}>
            <div className="use-case-card h-100 p-4 bg-white rounded-3 border">
              <div className="d-flex align-items-start">
                <div className="icon-container me-3">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="h5 fw-bold mb-2 text-dark">{useCase.title}</h3>
                  <p className="text-muted mb-0">{useCase.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default UseCases;