import { Briefcase, User, Users, Target } from "lucide-react";

const UseCases = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Casos de Uso
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
            Quién Usa Pro-Meets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesionales de todas las industrias confían en nuestra plataforma
            para optimizar sus procesos de reuniones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Icon container */}
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <useCase.icon className="w-8 h-8 text-blue-600" />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-blue-300/30 w-16 h-16 rounded-2xl mx-auto scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-20"></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200/60"
              style={{
                animationDelay: `${(index + 3) * 150}ms`,
              }}
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

// Use cases data
const useCases = [
  {
    icon: Briefcase,
    title: "Reclutadores",
    description:
      "Optimiza tu proceso de entrevistas desde el primer contacto hasta la oferta laboral",
  },
  {
    icon: User,
    title: "Consultores",
    description:
      "Gestiona reuniones con clientes sin las complicaciones de programación",
  },
  {
    icon: Users,
    title: "Equipos de Ventas",
    description:
      "Programa más demostraciones y haz seguimiento de interacciones con prospectos",
  },
];

// Stats data
const stats = [
  {
    value: "10,000+",
    label: "Profesionales Activos",
  },
  {
    value: "50+",
    label: "Industrias Diferentes",
  },
  {
    value: "99.9%",
    label: "Tiempo de Actividad",
  },
];

export default UseCases;
