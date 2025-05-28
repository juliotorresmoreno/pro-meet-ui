import { Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r bg-blue-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Programación profesional{" "}
              <span className="text-blue-600">sin tanto ir y venir</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Optimiza tu proceso de entrevistas con videollamadas integradas y
              gestión de candidatos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg font-medium text-lg">
                Comenzar Gratis
              </button>
              <button className="cursor-pointer px-8 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition font-medium text-lg flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Ver Cómo Funciona
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-1"></div>
              <div className="relative bg-white p-2 rounded-xl border border-gray-200 shadow-lg">
                <Image
                  width={600}
                  height={400}
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                  alt="Dashboard de Pro-Meets"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
