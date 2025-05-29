import { Check } from "lucide-react";
import { Lang } from "@/lib/lang";
import Link from "next/link";

const translations = {
  en: {
    transparentPricing: "Transparent Pricing",
    choosePlan: "Choose the perfect plan for you",
    startFree:
      "Start for free and scale as your needs grow. No commitments, no hidden fees.",
    free: "Free",
    perfectToStart: "Perfect to start",
    foreverFree: "Forever free",
    unlimitedMeetings: "Unlimited 1:1 meetings",
    integratedVideoCalls: "Integrated video calls",
    basicCandidateTracking: "Basic candidate tracking",
    upTo5Interviews: "Up to 5 interviews/month",
    startFreeButton: "Start Free",
    professional: "Professional",
    forTeams: "For teams and companies",
    perUserPerMonth: "/user/month",
    annualBilling: "Annual billing",
    everythingInFree: "Everything in Free plan",
    unlimitedInterviews: "Unlimited interviews",
    advancedAnalytics: "Advanced analytics",
    teamScheduling: "Team scheduling",
    prioritySupport: "Priority support",
    try14Days: "14-Day Free Trial",
    enterprise: "Enterprise",
    forLargeOrganizations: "For large organizations",
    ssoAndSecurity: "SSO and advanced security",
    customAPI: "Custom API",
    dedicatedAccountManager: "Dedicated account manager",
    unlimitedIntegrations: "Unlimited integrations",
    contactSales: "Contact Sales",
    haveQuestions: "Have questions? We're here to help.",
    viewFAQ: "View frequently asked questions →",
    mostPopular: "Most Popular",
  },
  es: {
    transparentPricing: "Precios Transparentes",
    choosePlan: "Elige el plan perfecto para ti",
    startFree:
      "Comienza gratis y escala según crezcan tus necesidades. Sin compromisos, sin tarifas ocultas.",
    free: "Gratuito",
    perfectToStart: "Perfecto para comenzar",
    foreverFree: "Para siempre gratis",
    unlimitedMeetings: "Reuniones 1:1 ilimitadas",
    integratedVideoCalls: "Videollamadas integradas",
    basicCandidateTracking: "Seguimiento básico de candidatos",
    upTo5Interviews: "Hasta 5 entrevistas/mes",
    startFreeButton: "Empezar Gratis",
    professional: "Profesional",
    forTeams: "Para equipos y empresas",
    perUserPerMonth: "/usuario/mes",
    annualBilling: "Facturación anual",
    everythingInFree: "Todo lo del plan Gratuito",
    unlimitedInterviews: "Entrevistas ilimitadas",
    advancedAnalytics: "Analíticas avanzadas",
    teamScheduling: "Programación en equipo",
    prioritySupport: "Soporte prioritario",
    try14Days: "Prueba Gratuita 14 Días",
    enterprise: "Empresarial",
    forLargeOrganizations: "Para grandes organizaciones",
    ssoAndSecurity: "SSO y seguridad avanzada",
    customAPI: "API personalizada",
    dedicatedAccountManager: "Gerente de cuenta dedicado",
    unlimitedIntegrations: "Integraciones ilimitadas",
    contactSales: "Contactar Ventas",
    haveQuestions: "¿Tienes preguntas? Estamos aquí para ayudarte.",
    viewFAQ: "Ver preguntas frecuentes →",
    mostPopular: "Más Popular",
  },
  fr: {
    login: "Connexion",
    signup: "Inscription",
    english: "Anglais",
    spanish: "Espagnol",
    french: "Français",
    japanese: "Japonais",
    chinese: "Chinois",
    transparentPricing: "Tarification Transparente",
    choosePlan: "Choisissez le plan parfait pour vous",
    startFree:
      "Commencez gratuitement et évoluez selon vos besoins. Aucun engagement, aucun frais caché.",
    free: "Gratuit",
    perfectToStart: "Parfait pour commencer",
    foreverFree: "Gratuit pour toujours",
    unlimitedMeetings: "Réunions 1:1 illimitées",
    integratedVideoCalls: "Appels vidéo intégrés",
    basicCandidateTracking: "Suivi basique des candidats",
    upTo5Interviews: "Jusqu'à 5 entretiens/mois",
    startFreeButton: "Commencer Gratuitement",
    professional: "Professionnel",
    forTeams: "Pour les équipes et entreprises",
    perUserPerMonth: "/utilisateur/mois",
    annualBilling: "Facturation annuelle",
    everythingInFree: "Tout ce qui est dans le plan Gratuit",
    unlimitedInterviews: "Entretiens illimités",
    advancedAnalytics: "Analytique avancée",
    teamScheduling: "Planification en équipe",
    prioritySupport: "Support prioritaire",
    try14Days: "Essai Gratuit 14 Jours",
    enterprise: "Entreprise",
    forLargeOrganizations: "Pour les grandes organisations",
    ssoAndSecurity: "SSO et sécurité avancée",
    customAPI: "API personnalisée",
    dedicatedAccountManager: "Responsable de compte dédié",
    unlimitedIntegrations: "Intégrations illimitées",
    contactSales: "Contacter les Ventes",
    haveQuestions: "Des questions ? Nous sommes là pour vous aider.",
    viewFAQ: "Voir les questions fréquentes →",
    mostPopular: "Le Plus Populaire",
  },
  ja: {
    login: "ログイン",
    signup: "サインアップ",
    english: "英語",
    spanish: "スペイン語",
    french: "フランス語",
    japanese: "日本語",
    chinese: "中国語",
    transparentPricing: "透明な料金体系",
    choosePlan: "あなたに最適なプランを選択してください",
    startFree: "無料で開始して、必要に応じて拡張。契約不要、隠れた料金なし。",
    free: "無料",
    perfectToStart: "開始に最適",
    foreverFree: "ずっと無料",
    unlimitedMeetings: "無制限の1対1ミーティング",
    integratedVideoCalls: "統合されたビデオ通話",
    basicCandidateTracking: "基本的な候補者追跡",
    upTo5Interviews: "月5件までの面接",
    startFreeButton: "無料で始める",
    professional: "プロフェッショナル",
    forTeams: "チームと企業向け",
    perUserPerMonth: "ユーザー/月",
    annualBilling: "年間請求",
    everythingInFree: "無料プランのすべて",
    unlimitedInterviews: "無制限の面接",
    advancedAnalytics: "高度な分析",
    teamScheduling: "チームスケジューリング",
    prioritySupport: "優先サポート",
    try14Days: "14日間の無料トライアル",
    enterprise: "エンタープライズ",
    forLargeOrganizations: "大規模組織向け",
    ssoAndSecurity: "SSOと高度なセキュリティ",
    customAPI: "カスタムAPI",
    dedicatedAccountManager: "専任アカウントマネージャー",
    unlimitedIntegrations: "無制限の統合",
    contactSales: "営業に連絡",
    haveQuestions: "ご質問がありますか？お気軽にお問い合わせください。",
    viewFAQ: "よくある質問を見る →",
    mostPopular: "最も人気",
  },
  zh: {
    login: "登录",
    signup: "注册",
    english: "英语",
    spanish: "西班牙语",
    french: "法语",
    japanese: "日语",
    chinese: "中文",
    transparentPricing: "透明定价",
    choosePlan: "选择最适合您的计划",
    startFree: "免费开始，按需扩展。无绑定，无隐藏费用。",
    free: "免费",
    perfectToStart: "入门首选",
    foreverFree: "永久免费",
    unlimitedMeetings: "无限次1对1会议",
    integratedVideoCalls: "集成视频通话",
    basicCandidateTracking: "基本候选人跟踪",
    upTo5Interviews: "每月最多5次面试",
    startFreeButton: "免费开始",
    professional: "专业版",
    forTeams: "适用于团队和企业",
    perUserPerMonth: "每用户/月",
    annualBilling: "按年计费",
    everythingInFree: "包括免费版全部功能",
    unlimitedInterviews: "无限次面试",
    advancedAnalytics: "高级分析",
    teamScheduling: "团队日程安排",
    prioritySupport: "优先支持",
    try14Days: "14天免费试用",
    enterprise: "企业版",
    forLargeOrganizations: "适用于大型组织",
    ssoAndSecurity: "SSO和高级安全性",
    customAPI: "自定义API",
    dedicatedAccountManager: "专属客户经理",
    unlimitedIntegrations: "无限集成",
    contactSales: "联系销售",
    haveQuestions: "有疑问？我们随时为您提供帮助。",
    viewFAQ: "查看常见问题 →",
    mostPopular: "最受欢迎",
  },
};

interface PricingProps {
  readonly language?: Lang;
}

const Pricing = ({ language = "en" }: PricingProps) => {
  const t = translations[language];

  return (
    <section className="py-24 bg-gradient-to-br bg-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          {t.transparentPricing}
        </h2>
        <p className="text-lg text-gray-600 mb-12">{t.choosePlan}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800">{t.free}</h3>
            <p className="text-gray-500">{t.perfectToStart}</p>
            <p className="text-4xl font-bold text-gray-800 mt-4">€0</p>
            <p className="text-gray-500 mb-6">{t.foreverFree}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.unlimitedMeetings}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.integratedVideoCalls}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.basicCandidateTracking}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.upTo5Interviews}
              </li>
            </ul>
            <Link
              href="/register"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              {t.startFreeButton}
            </Link>
          </div>

          {/* Professional Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-4 border-blue-600 relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm">
              {t.mostPopular}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {t.professional}
            </h3>
            <p className="text-gray-500">{t.forTeams}</p>
            <p className="text-4xl font-bold text-gray-800 mt-4">€25</p>
            <p className="text-gray-500 mb-6">
              {t.perUserPerMonth} · {t.annualBilling}
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.everythingInFree}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.unlimitedInterviews}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.advancedAnalytics}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.teamScheduling}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.prioritySupport}
              </li>
            </ul>
            <Link
              href="/register"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              {t.try14Days}
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800">
              {t.enterprise}
            </h3>
            <p className="text-gray-500">{t.forLargeOrganizations}</p>
            <p className="text-4xl font-bold text-gray-800 mt-4">Custom</p>
            <p className="text-gray-500 mb-6">-</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.ssoAndSecurity}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.customAPI}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.dedicatedAccountManager}
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {t.unlimitedIntegrations}
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              {t.contactSales}
            </Link>
          </div>
        </div>
        <p className="mt-12 text-gray-600">
          {t.haveQuestions}{" "}
          <Link href="/faq" className="text-blue-600 hover:underline">
            {t.viewFAQ}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
