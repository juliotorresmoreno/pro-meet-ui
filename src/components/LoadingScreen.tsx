// components/LoadingScreen.tsx
"use client";

import { FC } from "react";
import { Spinner } from "reactstrap";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";

const translations = {
  en: {
    loading: "Loading...",
    message: "Please wait while we process your request",
  },
  es: {
    loading: "Cargando...",
    message: "Por favor espere mientras procesamos su solicitud",
  },
  fr: {
    loading: "Chargement...",
    message: "Veuillez patienter pendant que nous traitons votre demande",
  },
  ja: {
    loading: "読み込み中...",
    message: "リクエストを処理中です。しばらくお待ちください",
  },
  zh: {
    loading: "加载中...",
    message: "请稍候，我们正在处理您的请求",
  },
};

const LoadingScreen: FC = () => {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: 9999,
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="text-center mb-3">
        <Spinner color="primary" style={{ width: "3rem", height: "3rem" }}>
          {t.loading}
        </Spinner>
      </div>
      <h4 className="text-primary mb-2">{t.loading}</h4>
      <p className="text-muted">{t.message}</p>

      {/* Optional progress bar */}
      <div className="w-50 mt-3">
        <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            style={{ width: "75%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
