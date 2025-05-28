import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container max-w-6xl mx-auto px-6 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Únete a Miles de Profesionales
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            ¿Listo para Transformar
            <br />
            <span className="text-blue-200">Tu Programación?</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Únete a miles de profesionales que ahorran horas cada semana con
            Pro-Meets
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/register"
              className="group px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:-translate-y-1 flex items-center gap-2"
            >
              Comenzar Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Ver Demostración
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
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

// Stats data
const stats = [
  {
    value: "10,000+",
    label: "Profesionales Satisfechos",
  },
  {
    value: "50k+",
    label: "Entrevistas Realizadas",
  },
  {
    value: "40%",
    label: "Tiempo Ahorrado",
  },
];

export default CallToAction;
