import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Precios Transparentes
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text">
            Elige el plan perfecto para ti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comienza gratis y escala según crezcan tus necesidades. Sin
            compromisos, sin tarifas ocultas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Gratuito */}
          <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Gratuito
              </h3>
              <p className="text-gray-600">Perfecto para comenzar</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500 ml-2">/mes</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Para siempre gratis</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Reuniones 1:1 ilimitadas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Videollamadas integradas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Seguimiento básico de candidatos
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Hasta 5 entrevistas/mes</span>
              </li>
            </ul>

            <button className="w-full py-4 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              Empezar Gratis
            </button>
          </div>

          {/* Plan Profesional */}
          <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white transform scale-105 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Más Popular
              </div>
            </div>

            <div className="mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-2">Profesional</h3>
              <p className="text-blue-100">Para equipos y empresas</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold">$15</span>
                <span className="text-blue-200 ml-2">/usuario/mes</span>
              </div>
              <p className="text-sm text-blue-200 mt-2">Facturación anual</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Todo lo del plan Gratuito</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Entrevistas ilimitadas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Analíticas avanzadas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Programación en equipo</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>Soporte prioritario</span>
              </li>
            </ul>

            <button className="w-full py-4 px-6 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg">
              Prueba Gratuita 14 Días
            </button>
          </div>

          {/* Plan Empresarial */}
          <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Empresarial
              </h3>
              <p className="text-gray-600">Para grandes organizaciones</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$49</span>
                <span className="text-gray-500 ml-2">/usuario/mes</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Facturación anual</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Todo lo del plan Profesional
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">SSO y seguridad avanzada</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">API personalizada</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Gerente de cuenta dedicado
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Integraciones ilimitadas</span>
              </li>
            </ul>

            <button className="w-full py-4 px-6 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200">
              Contactar Ventas
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-4">
            ¿Tienes preguntas? Estamos aquí para ayudarte.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Ver preguntas frecuentes →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
