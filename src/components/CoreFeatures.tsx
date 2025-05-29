import { Lang } from "@/lib/lang";
import { Briefcase, Check, Clock, User, Users, Video } from "lucide-react";

const translations = {
  es: {
    tag: "Características Principales",
    title: "Diseñado para Flujos Profesionales",
    description:
      "Todo lo que necesitas para gestionar entrevistas y reuniones con clientes de manera eficiente",
    ctaTitle: "¿Listo para optimizar tus entrevistas?",
    ctaText: "Únete a miles de profesionales que ya confían en Pro-Meets",
    ctaButton: "Comenzar Ahora",
    features: [
      {
        icon: Video,
        title: "Videollamadas Integradas",
        description:
          "Sin aplicaciones externas - inicia reuniones con un solo clic y mantén todo centralizado",
      },
      {
        icon: User,
        title: "Seguimiento de Candidatos",
        description:
          "Organiza entrevistados con etiquetas, notas y estados para un proceso más eficiente",
      },
      {
        icon: Clock,
        title: "Inteligencia de Zonas Horarias",
        description:
          "Muestra automáticamente horarios en la zona horaria de cada participante",
      },
      {
        icon: Users,
        title: "Programación en Equipo",
        description:
          "Coordina entrevistas entre múltiples miembros del equipo sin complicaciones",
      },
      {
        icon: Briefcase,
        title: "Gestión de Clientes",
        description:
          "Mantén todas las reuniones y notas de clientes organizadas en un solo lugar",
      },
      {
        icon: Check,
        title: "Recordatorios Automáticos",
        description:
          "Reduce las ausencias con notificaciones por email y SMS inteligentes",
      },
    ],
  },
  en: {
    tag: "Core Features",
    title: "Designed for Professional Workflows",
    description:
      "Everything you need to manage interviews and client meetings efficiently",
    ctaTitle: "Ready to optimize your interviews?",
    ctaText: "Join thousands of professionals already trusting Pro-Meets",
    ctaButton: "Get Started Now",
    features: [
      {
        icon: Video,
        title: "Integrated Video Calls",
        description:
          "No external apps – start meetings with one click and keep everything centralized",
      },
      {
        icon: User,
        title: "Candidate Tracking",
        description:
          "Organize interviewees with tags, notes, and statuses for an efficient process",
      },
      {
        icon: Clock,
        title: "Time Zone Intelligence",
        description:
          "Automatically displays times in each participant's time zone",
      },
      {
        icon: Users,
        title: "Team Scheduling",
        description:
          "Coordinate interviews among multiple team members effortlessly",
      },
      {
        icon: Briefcase,
        title: "Client Management",
        description:
          "Keep all meetings and client notes organized in one place",
      },
      {
        icon: Check,
        title: "Automated Reminders",
        description: "Reduce no-shows with smart email and SMS notifications",
      },
    ],
  },
  fr: {
    tag: "Fonctionnalités Clés",
    title: "Conçu pour des Flux de Travail Professionnels",
    description:
      "Tout ce dont vous avez besoin pour gérer efficacement les entretiens et réunions client",
    ctaTitle: "Prêt à optimiser vos entretiens ?",
    ctaText:
      "Rejoignez des milliers de professionnels qui font déjà confiance à Pro-Meets",
    ctaButton: "Commencer Maintenant",
    features: [
      {
        icon: Video,
        title: "Appels Vidéo Intégrés",
        description:
          "Pas d'applications externes – démarrez les réunions en un clic et centralisez tout",
      },
      {
        icon: User,
        title: "Suivi des Candidats",
        description:
          "Organisez les candidats avec des étiquettes, des notes et des statuts pour un processus efficace",
      },
      {
        icon: Clock,
        title: "Gestion des Fuseaux Horaires",
        description:
          "Affiche automatiquement l’heure dans le fuseau horaire de chaque participant",
      },
      {
        icon: Users,
        title: "Planification en Équipe",
        description:
          "Coordonnez facilement les entretiens entre plusieurs membres de l'équipe",
      },
      {
        icon: Briefcase,
        title: "Gestion des Clients",
        description:
          "Centralisez toutes les réunions et notes client dans un seul endroit",
      },
      {
        icon: Check,
        title: "Rappels Automatiques",
        description:
          "Réduisez les absences avec des notifications intelligentes par email et SMS",
      },
    ],
  },
  ja: {
    tag: "主な機能",
    title: "プロフェッショナルなワークフローのために設計",
    description: "面接やクライアントとの会議を効率的に管理するためのすべて",
    ctaTitle: "面接を最適化する準備はできましたか？",
    ctaText: "すでにPro-Meetsを信頼している何千人もの専門家に参加しよう",
    ctaButton: "今すぐ開始",
    features: [
      {
        icon: Video,
        title: "統合されたビデオ通話",
        description:
          "外部アプリ不要 – ワンクリックで会議を開始し、すべてを一元管理",
      },
      {
        icon: User,
        title: "候補者の追跡",
        description: "タグ、メモ、ステータスで面接者を整理し、効率化",
      },
      {
        icon: Clock,
        title: "タイムゾーンのインテリジェンス",
        description: "各参加者のタイムゾーンに自動で時間を表示",
      },
      {
        icon: Users,
        title: "チームでのスケジューリング",
        description: "複数のチームメンバーとの面接を簡単に調整",
      },
      {
        icon: Briefcase,
        title: "クライアント管理",
        description: "会議やクライアントノートを1か所で整理",
      },
      {
        icon: Check,
        title: "自動リマインダー",
        description: "スマートなメール・SMS通知で欠席を減少",
      },
    ],
  },
  zh: {
    tag: "核心功能",
    title: "为专业流程而设计",
    description: "高效管理面试和客户会议所需的一切",
    ctaTitle: "准备好优化你的面试流程了吗？",
    ctaText: "加入成千上万信赖 Pro-Meets 的专业人士",
    ctaButton: "立即开始",
    features: [
      {
        icon: Video,
        title: "集成视频通话",
        description: "无需外部应用 – 一键开始会议，集中管理所有内容",
      },
      {
        icon: User,
        title: "候选人跟踪",
        description: "使用标签、笔记和状态高效组织面试者",
      },
      {
        icon: Clock,
        title: "时区智能识别",
        description: "自动显示每位参与者的本地时间",
      },
      {
        icon: Users,
        title: "团队排程",
        description: "轻松协调多个团队成员的面试",
      },
      {
        icon: Briefcase,
        title: "客户管理",
        description: "将所有会议和客户笔记集中在一个地方",
      },
      {
        icon: Check,
        title: "自动提醒",
        description: "通过智能邮件和短信通知减少缺席",
      },
    ],
  },
};

interface CoreFeatureProps {
  readonly language?: Lang;
}

const CoreFeatures = ({ language = "en" }: CoreFeatureProps) => {
  const t = translations[language] || translations.en;

  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Check className="w-4 h-4 mr-2" />
            {t.tag}
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-gray-200 shadow-lg">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {t.ctaTitle}
              </h3>
              <p className="text-gray-600">{t.ctaText}</p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
              {t.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
