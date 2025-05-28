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
    spanish: "Español",
  },
  es: {
    login: "Iniciar sesión",
    signup: "Registrarse",
    english: "Inglés",
    spanish: "Español",
  },
};

interface NavigationProps {
  readonly language?: Lang;
}

const Navigation = ({ language = "en" }: NavigationProps) => {
  return (
    <nav className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <CalendarIcon className="w-8 h-8 text-blue-600" />
        <span className="text-2xl font-bold text-gray-800">Pro-Meets</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Login language={language}>{translations[language].login}</Login>
        <Register language={language}>{translations[language].signup}</Register>
      </div>
    </nav>
  );
};

export default Navigation;
