import { Lang } from "@/lib/lang";
import {
  Calendar,
  Mail,
  Phone,
  Globe,
  Twitter,
  Linkedin,
  Github,
  HelpCircle,
  Code,
  Server,
  Headphones,
  FileText,
  Shield,
  Cookie,
} from "lucide-react";
import Link from "next/link";

interface FooterProps {
  language?: Lang;
}

const Footer = ({ language = "en" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  // Variables de entorno (con valores por defecto)
  const socialLinks = {
    twitter:
      process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/pro-meets",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://linkedin.com/company/pro-meets",
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/pro-meets",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "soporte@pro-meets.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+15551234567",
    website: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://pro-meets.com",
  };

  const translations = {
    en: {
      description:
        "All-in-one solution for stress-free meeting scheduling. Connect with your clients professionally.",
      quickLinks: "Quick Links",
      howItWorks: "How it works",
      features: "Features",
      pricing: "Pricing",
      integrations: "Integrations",
      support: "Support",
      helpCenter: "Help Center",
      apiDocs: "API Docs",
      systemStatus: "System Status",
      contactSupport: "Contact Support",
      contact: "Contact",
      rights: `© ${currentYear} Pro-Meets. All rights reserved.`,
      terms: "Terms",
      privacy: "Privacy",
      cookies: "Cookies",
    },
    es: {
      description:
        "Solución todo en uno para programar reuniones sin estrés. Conecta con tus clientes de manera profesional.",
      quickLinks: "Enlaces rápidos",
      howItWorks: "Cómo funciona",
      features: "Funciones",
      pricing: "Precios",
      integrations: "Integraciones",
      support: "Soporte",
      helpCenter: "Centro de ayuda",
      apiDocs: "Documentación API",
      systemStatus: "Estado del sistema",
      contactSupport: "Contactar soporte",
      contact: "Contacto",
      rights: `© ${currentYear} Pro-Meets. Todos los derechos reservados.`,
      terms: "Términos",
      privacy: "Privacidad",
      cookies: "Cookies",
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Pro-Meets</span>
            </div>
            <p className="text-sm">{t.description}</p>
            <div className="flex space-x-4">
              <Link
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <HelpCircle className="h-4 w-4 text-blue-400" />
                <Link
                  href="/how-it-works"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {t.howItWorks}
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Code className="h-4 w-4 text-blue-400" />
                <Link
                  href="/features"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {t.features}
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Server className="h-4 w-4 text-blue-400" />
                <Link
                  href="/pricing"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {t.pricing}
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Headphones className="h-4 w-4 text-blue-400" />
                <Link
                  href="/integrations"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {t.integrations}
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t.support}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <HelpCircle className="h-4 w-4 text-blue-400" />
                <Link
                  href="/support/help-center"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {t.helpCenter}
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Code className="h-4 w-4 text-blue-400" />
                <Link
                  href="/developers/api-docs"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {t.apiDocs}
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Server className="h-4 w-4 text-blue-400" />
                <Link
                  href="/system-status"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {t.systemStatus}
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <Link
                  href="/support/contact"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {t.contactSupport}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t.contact}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {socialLinks.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${socialLinks.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {socialLinks.phone}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Globe className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <Link
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  {new URL(socialLinks.website).hostname.replace("www.", "")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright y legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">{t.rights}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/legal/terms"
              className="text-xs text-gray-500 hover:text-blue-400 flex items-center"
            >
              <FileText className="h-3 w-3 mr-1" /> {t.terms}
            </Link>
            <Link
              href="/legal/privacy"
              className="text-xs text-gray-500 hover:text-blue-400 flex items-center"
            >
              <Shield className="h-3 w-3 mr-1" /> {t.privacy}
            </Link>
            <Link
              href="/legal/cookies"
              className="text-xs text-gray-500 hover:text-blue-400 flex items-center"
            >
              <Cookie className="h-3 w-3 mr-1" /> {t.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
