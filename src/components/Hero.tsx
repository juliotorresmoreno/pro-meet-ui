"use client";

import { Lang } from "@/lib/lang";
import { useAuthStore } from "@/store/authStore";
import { Play } from "lucide-react";
import Image from "next/image";

const translations = {
  en: {
    title: "Professional scheduling",
    highlight: "without all the back and forth",
    description:
      "Streamline your interview process with integrated video calls and candidate management.",
    start: "Start Free",
    watch: "See How It Works",
  },
  zh: {
    title: "专业的排程",
    highlight: "无需来回沟通",
    description: "通过集成视频通话和候选人管理优化面试流程。",
    start: "免费开始",
    watch: "查看使用方式",
  },
  es: {
    title: "Programación profesional",
    highlight: "sin tanto ir y venir",
    description:
      "Optimiza tu proceso de entrevistas con videollamadas integradas y gestión de candidatos.",
    start: "Comenzar Gratis",
    watch: "Ver Cómo Funciona",
  },
  ja: {
    title: "プロフェッショナルなスケジューリング",
    highlight: "面倒なやり取りなしで",
    description:
      "ビデオ通話と候補者管理を統合して面接プロセスを最適化します。",
    start: "無料で開始",
    watch: "使い方を見る",
  },
  fr: {
    title: "Planification professionnelle",
    highlight: "sans allers-retours inutiles",
    description:
      "Optimisez vos entretiens avec des appels vidéo intégrés et une gestion des candidats.",
    start: "Commencer gratuitement",
    watch: "Voir comment ça marche",
  },
};

interface HeroProps {
  readonly language?: Lang;
}

const Hero = ({ language = "en" }: HeroProps) => {
  const { setOpen } = useAuthStore();
  const t = translations[language];

  return (
    <section className="py-20 bg-gradient-to-r bg-blue-100">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t.title} <span className="text-blue-600">{t.highlight}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">{t.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setOpen("register")}
                className="cursor-pointer px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg font-medium text-lg"
              >
                {t.start}
              </button>
              <button className="cursor-pointer px-8 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition font-medium text-lg flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                {t.watch}
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
                  alt="Dashboard"
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
