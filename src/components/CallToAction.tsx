import { Lang } from "@/lib/lang";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const translations = {
  en: {
    badge: "Join Thousands of Professionals",
    heading: "Ready to Transform\nYour Scheduling?",
    description:
      "Join thousands of professionals saving hours every week with Pro-Meets",
    start: "Start Free",
    demo: "View Demo",
    stats: [
      { value: "10,000+", label: "Satisfied Professionals" },
      { value: "50k+", label: "Interviews Completed" },
      { value: "40%", label: "Time Saved" },
    ],
  },
  es: {
    badge: "Únete a Miles de Profesionales",
    heading: "¿Listo para Transformar\nTu Programación?",
    description:
      "Únete a miles de profesionales que ahorran horas cada semana con Pro-Meets",
    start: "Comenzar Gratis",
    demo: "Ver Demostración",
    stats: [
      { value: "10,000+", label: "Profesionales Satisfechos" },
      { value: "50k+", label: "Entrevistas Realizadas" },
      { value: "40%", label: "Tiempo Ahorrado" },
    ],
  },
  fr: {
    badge: "Rejoignez des Milliers de Professionnels",
    heading: "Prêt à Transformer\nVotre Planification ?",
    description:
      "Rejoignez des milliers de professionnels qui économisent des heures chaque semaine avec Pro-Meets",
    start: "Commencer Gratuitement",
    demo: "Voir la Démo",
    stats: [
      { value: "10,000+", label: "Professionnels Satisfaits" },
      { value: "50k+", label: "Entretiens Réalisés" },
      { value: "40%", label: "Temps Économisé" },
    ],
  },
  ja: {
    badge: "何千人ものプロフェッショナルが参加",
    heading: "スケジューリングを\n変革する準備はできていますか？",
    description:
      "毎週数時間を節約している何千人ものプロがPro-Meetsを利用しています",
    start: "無料で始める",
    demo: "デモを見る",
    stats: [
      { value: "10,000+", label: "満足しているプロフェッショナル" },
      { value: "50k+", label: "完了した面接" },
      { value: "40%", label: "節約された時間" },
    ],
  },
  zh: {
    badge: "加入数千名专业人士的行列",
    heading: "准备好\n改变你的日程安排了吗？",
    description: "加入每周节省数小时时间的专业人士，使用 Pro-Meets 提升效率",
    start: "免费开始",
    demo: "查看演示",
    stats: [
      { value: "10,000+", label: "满意的专业人士" },
      { value: "50k+", label: "已完成面试" },
      { value: "40%", label: "节省时间" },
    ],
  },
};

interface CallToActionProps {
  language?: Lang;
}

const CallToAction = ({ language = "en" }: CallToActionProps) => {
  const t = translations[language] || translations.en;

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container max-w-6xl mx-auto px-6 relative">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            {t.badge}
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight whitespace-pre-line">
            {t.heading}
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/register"
              className="group px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:-translate-y-1 flex items-center gap-2"
            >
              {t.start}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              {t.demo}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
