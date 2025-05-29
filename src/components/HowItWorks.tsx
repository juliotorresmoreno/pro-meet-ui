import { Calendar, Users, Video } from "lucide-react";
import { Lang } from "@/lib/lang";

const translations = {
  en: {
    tag: "Simple Process",
    heading: "How Pro-Meets Works",
    description:
      "Simple scheduling designed for professional workflows. In just 3 steps, you'll run more efficient interviews.",
    steps: [
      {
        title: "Create Your Link",
        description:
          "Set your availability and share your personalized scheduling link with candidates.",
      },
      {
        title: "Let Them Book",
        description:
          "Candidates choose a time that works for both from your available calendar.",
      },
      {
        title: "Meet and Follow Up",
        description:
          "Join the integrated video call and efficiently follow up on next steps.",
      },
    ],
    cta: "Ready to get started?",
    button: "Create Free Account",
  },
  zh: {
    tag: "简单流程",
    heading: "Pro-Meets 如何运作",
    description:
      "为专业工作流程设计的简单排程。只需三个步骤，您就能更高效地进行面试。",
    steps: [
      {
        title: "创建链接",
        description: "设置您的可用时间并与候选人分享您的专属排程链接。",
      },
      {
        title: "让他们预订",
        description: "候选人从您可用的时间中选择一个合适的时段。",
      },
      {
        title: "开会并跟进",
        description: "加入集成的视频通话并高效地进行后续步骤。",
      },
    ],
    cta: "准备好开始了吗？",
    button: "免费创建账户",
  },
  es: {
    tag: "Proceso Sencillo",
    heading: "Cómo Funciona Pro-Meets",
    description:
      "Programación simple diseñada para flujos de trabajo profesionales. En solo 3 pasos, estarás realizando entrevistas más eficientes.",
    steps: [
      {
        title: "Crea Tu Enlace",
        description:
          "Configura tu disponibilidad y comparte tu enlace de programación personalizado con candidatos.",
      },
      {
        title: "Deja Que Reserven",
        description:
          "Los candidatos eligen un horario que funcione para ambos desde tu calendario disponible.",
      },
      {
        title: "Reúnete y Haz Seguimiento",
        description:
          "Únete a la videollamada integrada y realiza el seguimiento de los próximos pasos de manera eficiente.",
      },
    ],
    cta: "¿Listo para comenzar?",
    button: "Crear Cuenta Gratis",
  },
  ja: {
    tag: "シンプルなプロセス",
    heading: "Pro-Meetsの使い方",
    description:
      "プロ向けワークフローのためのシンプルなスケジューリング。たった3ステップで、より効率的な面接が実現します。",
    steps: [
      {
        title: "リンクを作成",
        description: "利用可能時間を設定し、候補者にリンクを共有します。",
      },
      {
        title: "予約してもらう",
        description: "候補者が都合の良い時間を選択します。",
      },
      {
        title: "面談してフォローアップ",
        description: "ビデオ通話に参加して、次のステップを効率的に進めます。",
      },
    ],
    cta: "始める準備はできましたか？",
    button: "無料アカウント作成",
  },
  fr: {
    tag: "Processus simple",
    heading: "Comment fonctionne Pro-Meets",
    description:
      "Planification simple conçue pour des flux de travail professionnels. En seulement 3 étapes, vous mènerez des entretiens plus efficaces.",
    steps: [
      {
        title: "Créez votre lien",
        description:
          "Définissez votre disponibilité et partagez votre lien personnalisé avec les candidats.",
      },
      {
        title: "Laissez-les réserver",
        description:
          "Les candidats choisissent un créneau qui convient aux deux parties.",
      },
      {
        title: "Rencontrez et suivez",
        description:
          "Rejoignez l'appel vidéo intégré et suivez les étapes suivantes efficacement.",
      },
    ],
    cta: "Prêt à commencer ?",
    button: "Créer un compte gratuit",
  },
};

interface HowItWorksProps {
  readonly language?: Lang;
}

const HowItWorks = ({ language = "en" }: HowItWorksProps) => {
  const t = translations[language] || translations.en;

  const steps = [
    {
      ...t.steps[0],
      icon: Calendar,
    },
    {
      ...t.steps[1],
      icon: Users,
    },
    {
      ...t.steps[2],
      icon: Video,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Video className="w-4 h-4 mr-2" />
            {t.tag}
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
            {t.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full border border-gray-200 shadow-lg">
            <span className="text-gray-600">{t.cta}</span>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              {t.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
