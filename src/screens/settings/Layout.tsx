import { useLanguageStore } from "@/stores/language";
import DashboardLayout from "../dashboard/Layout";
import { getLanguage } from "@/utils/language";
import { useMemo } from "react";

const translations = {
  en: {
    account: "Account",
    security: "Security",
    notifications: "Notifications",
    preferences: "Preferences",
    billing: "Billing",
    paymentMethods: "Payment Methods",
    integrations: "Integrations",
    danger: "Danger Zone",
  },
  es: {
    account: "Cuenta",
    security: "Seguridad",
    notifications: "Notificaciones",
    preferences: "Preferencias",
    billing: "Facturación",
    paymentMethods: "Métodos de pago",
    integrations: "Integraciones",
    danger: "Zona peligrosa",
  },
  fr: {
    account: "Compte",
    security: "Sécurité",
    notifications: "Notifications",
    preferences: "Préférences",
    billing: "Facturation",
    paymentMethods: "Méthodes de paiement",
    integrations: "Intégrations",
    danger: "Zone dangereuse",
  },
  ja: {
    account: "アカウント",
    security: "セキュリティ",
    notifications: "通知",
    preferences: "設定",
    billing: "請求",
    paymentMethods: "支払い方法",
    integrations: "連携",
    danger: "危険ゾーン",
  },
  zh: {
    account: "账户",
    security: "安全",
    notifications: "通知",
    preferences: "偏好",
    billing: "账单",
    paymentMethods: "支付方式",
    integrations: "集成",
    danger: "危险区",
  },
};

interface ProfileLayoutProps {
  readonly children?: React.ReactNode;
}

const SettingsLayout = ({ children }: ProfileLayoutProps) => {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const navItems = useMemo(
    () => [
      {
        href: "/dashboard/settings",
        icon: "bi-person-circle",
        label: t.account,
      },
      {
        href: "/dashboard/settings/security",
        icon: "bi-shield-lock",
        label: t.security,
      },
      {
        href: "/dashboard/settings/notifications",
        icon: "bi-bell",
        label: t.notifications,
      },
      {
        href: "/dashboard/settings/billing",
        icon: "bi-credit-card",
        label: t.billing,
      },
      {
        href: "/dashboard/settings/payment-methods",
        icon: "bi-wallet2",
        label: t.paymentMethods,
      },
      {
        href: "/dashboard/settings/integrations",
        icon: "bi-plug",
        label: t.integrations,
      },
      {
        href: "/dashboard/settings/danger",
        icon: "bi-exclamation-triangle",
        label: t.danger,
      },
    ],
    [t]
  );

  return <DashboardLayout navItems={navItems}>{children}</DashboardLayout>;
};

export default SettingsLayout;
