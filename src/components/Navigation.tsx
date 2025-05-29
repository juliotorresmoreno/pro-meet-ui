import { CalendarIcon } from "@/app/icons";
import { Lang } from "@/lib/lang";
import Link from "next/link";
import Register from "./Register";
import Login from "./Login";

const translations = {
  en: {
    login: "Log in",
    signup: "Sign up",
    english: "English",
    spanish: "Spanish",
    french: "French",
    japanese: "Japanese",
    chinese: "Chinese",
  },
  es: {
    login: "Iniciar sesión",
    signup: "Registrarse",
    english: "Inglés",
    spanish: "Español",
    french: "Francés",
    japanese: "Japonés",
    chinese: "Chino",
  },
  fr: {
    login: "Connexion",
    signup: "Inscription",
    english: "Anglais",
    spanish: "Espagnol",
    french: "Français",
    japanese: "Japonais",
    chinese: "Chinois",
  },
  ja: {
    login: "ログイン",
    signup: "サインアップ",
    english: "英語",
    spanish: "スペイン語",
    french: "フランス語",
    japanese: "日本語",
    chinese: "中国語",
  },
  zh: {
    login: "登录",
    signup: "注册",
    english: "英语",
    spanish: "西班牙语",
    french: "法语",
    japanese: "日语",
    chinese: "中文",
  },
};

interface NavigationProps {
  readonly language?: Lang;
}

const Navigation = ({ language = "en" }: NavigationProps) => {
  const t = translations[language];

  return (
    <nav className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <CalendarIcon className="w-8 h-8 text-blue-600" />
        <span className="text-2xl font-bold text-gray-800">Pro-Meets</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Login language={language}>{t.login}</Login>
        <Register language={language}>{t.signup}</Register>
      </div>
    </nav>
  );
};

export default Navigation;
