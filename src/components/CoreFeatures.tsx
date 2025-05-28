import { Briefcase, Check, Clock, User, Users, Video } from "lucide-react";

const CoreFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50/30 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Check className="w-4 h-4 mr-2" />
            Características Principales
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
            Diseñado para Flujos Profesionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas para gestionar entrevistas y reuniones con
            clientes de manera eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon container */}
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-blue-300/30 w-16 h-16 rounded-2xl mx-auto scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-20"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-gray-200 shadow-lg">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                ¿Listo para optimizar tus entrevistas?
              </h3>
              <p className="text-gray-600">
                Únete a miles de profesionales que ya confían en Pro-Meets
              </p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features data
const features = [
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
];

export default CoreFeatures;
