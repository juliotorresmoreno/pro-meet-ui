import { Calendar, Users, Video } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Video className="w-4 h-4 mr-2" />
            Proceso Sencillo
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
            Cómo Funciona Pro-Meets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Programación simple diseñada para flujos de trabajo profesionales.
            En solo 3 pasos, estarás realizando entrevistas más eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Icon */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>

              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full border border-gray-200 shadow-lg">
            <span className="text-gray-600">¿Listo para comenzar?</span>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Crear Cuenta Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Data
const steps = [
  {
    title: "Crea Tu Enlace",
    description:
      "Configura tu disponibilidad y comparte tu enlace de programación personalizado con candidatos.",
    icon: Calendar,
  },
  {
    title: "Deja Que Reserven",
    description:
      "Los candidatos eligen un horario que funcione para ambos desde tu calendario disponible.",
    icon: Users,
  },
  {
    title: "Reúnete y Haz Seguimiento",
    description:
      "Únete a la videollamada integrada y realiza el seguimiento de los próximos pasos de manera eficiente.",
    icon: Video,
  },
];

export default HowItWorks;
