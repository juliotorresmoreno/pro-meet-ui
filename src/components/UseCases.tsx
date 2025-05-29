import { Lang } from "@/lib/lang";
import { Briefcase, Target, User, Users } from "lucide-react";
import React from "react";

const translations = {
  en: {
    useCasesTitle: "Who Uses Pro-Meets",
    useCasesSubtitle:
      "Professionals from all industries rely on our platform to optimize their meeting processes",
    cases: [
      {
        title: "Recruiters",
        description:
          "Optimize your interview process from first contact to job offer",
      },
      {
        title: "Consultants",
        description: "Manage client meetings without scheduling hassles",
      },
      {
        title: "Sales Teams",
        description:
          "Schedule more demos and track interactions with prospects",
      },
    ],
    stats: [
      { value: "10,000+", label: "Active Professionals" },
      { value: "50+", label: "Different Industries" },
      { value: "99.9%", label: "Uptime" },
    ],
    useCasesLabel: "Use Cases",
  },
  es: {
    useCasesTitle: "Quién Usa Pro-Meets",
    useCasesSubtitle:
      "Profesionales de todas las industrias confían en nuestra plataforma para optimizar sus procesos de reuniones",
    cases: [
      {
        title: "Reclutadores",
        description:
          "Optimiza tu proceso de entrevistas desde el primer contacto hasta la oferta laboral",
      },
      {
        title: "Consultores",
        description:
          "Gestiona reuniones con clientes sin las complicaciones de programación",
      },
      {
        title: "Equipos de Ventas",
        description:
          "Programa más demostraciones y haz seguimiento de interacciones con prospectos",
      },
    ],
    stats: [
      { value: "10,000+", label: "Profesionales Activos" },
      { value: "50+", label: "Industrias Diferentes" },
      { value: "99.9%", label: "Tiempo de Actividad" },
    ],
    useCasesLabel: "Casos de Uso",
  },
  fr: {
    useCasesTitle: "Qui Utilise Pro-Meets",
    useCasesSubtitle:
      "Des professionnels de tous les secteurs font confiance à notre plateforme pour optimiser leurs processus de réunion",
    cases: [
      {
        title: "Recruteurs",
        description:
          "Optimisez votre processus d'entretien du premier contact à l'offre d'emploi",
      },
      {
        title: "Consultants",
        description:
          "Gérez les réunions avec les clients sans les tracas de planification",
      },
      {
        title: "Équipes de vente",
        description:
          "Planifiez plus de démonstrations et suivez les interactions avec les prospects",
      },
    ],
    stats: [
      { value: "10 000+", label: "Professionnels Actifs" },
      { value: "50+", label: "Secteurs Différents" },
      { value: "99,9%", label: "Disponibilité" },
    ],
    useCasesLabel: "Cas d'Utilisation",
  },
  ja: {
    useCasesTitle: "Pro-Meetsを使う人々",
    useCasesSubtitle:
      "あらゆる業界のプロフェッショナルが、ミーティングプロセスの最適化に当社のプラットフォームを利用しています",
    cases: [
      {
        title: "リクルーター",
        description: "初回コンタクトから内定までの面接プロセスを最適化",
      },
      {
        title: "コンサルタント",
        description: "スケジューリングの手間なくクライアントミーティングを管理",
      },
      {
        title: "営業チーム",
        description: "デモの予約を増やし、見込み客とのやり取りを追跡",
      },
    ],
    stats: [
      { value: "10,000+", label: "アクティブプロフェッショナル" },
      { value: "50+", label: "異なる業界" },
      { value: "99.9%", label: "稼働率" },
    ],
    useCasesLabel: "利用ケース",
  },
  zh: {
    useCasesTitle: "谁在使用 Pro-Meets",
    useCasesSubtitle: "来自各行业的专业人士依靠我们的平台优化他们的会议流程",
    cases: [
      {
        title: "招聘人员",
        description: "优化您的面试流程，从首次联系到录用通知",
      },
      {
        title: "顾问",
        description: "轻松管理客户会议，无需安排烦恼",
      },
      {
        title: "销售团队",
        description: "安排更多演示并跟踪潜在客户的互动",
      },
    ],
    stats: [
      { value: "10,000+", label: "活跃专业人士" },
      { value: "50+", label: "不同行业" },
      { value: "99.9%", label: "运行时间" },
    ],
    useCasesLabel: "使用案例",
  },
};

interface UseCasesProps {
  language?: Lang;
}

const UseCases = ({ language = "en" }: UseCasesProps) => {
  const t = translations[language];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            {t.useCasesLabel}
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
            {t.useCasesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.useCasesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.cases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {React.createElement(useCases[index].icon, {
                  className: "w-8 h-8 text-blue-600",
                })}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200/60"
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

const useCases = [{ icon: Briefcase }, { icon: User }, { icon: Users }];
