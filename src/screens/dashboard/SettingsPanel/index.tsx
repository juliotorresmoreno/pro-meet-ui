// components/SettingsPanel.tsx
import { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
} from "reactstrap";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import Profile from "@/screens/profile/Profile";
import Notifications from "@/screens/dashboard/Notifications";
import Preferences from "@/screens/dashboard/Preferences";

const translations = {
  en: {
    tabs: {
      profile: "Profile",
      notifications: "Notifications",
      preferences: "Preferences",
      language: "Language",
    },
    profile: {
      title: "Profile Settings",
    },
    notifications: {
      title: "Notification Settings",
    },
    preferences: {
      title: "Preferences",
    },
  },
  es: {
    tabs: {
      profile: "Perfil",
      notifications: "Notificaciones",
      preferences: "Preferencias",
      language: "Idioma",
    },
    profile: {
      title: "Configuración de Perfil",
    },
    notifications: {
      title: "Configuración de Notificaciones",
    },
    preferences: {
      title: "Preferencias",
    },
  },
  fr: {
    tabs: {
      profile: "Profil",
      notifications: "Notifications",
      preferences: "Préférences",
      language: "Langue",
    },
    profile: {
      title: "Paramètres du profil",
    },
    notifications: {
      title: "Paramètres de notification",
    },
    preferences: {
      title: "Préférences",
    },
  },
  ja: {
    tabs: {
      profile: "プロフィール",
      notifications: "通知",
      preferences: "設定",
      language: "言語",
    },
    profile: {
      title: "プロフィール設定",
    },
    notifications: {
      title: "通知設定",
    },
    preferences: {
      title: "設定",
    },
  },
  zh: {
    tabs: {
      profile: "个人资料",
      notifications: "通知",
      preferences: "偏好设置",
      language: "语言",
    },
    profile: {
      title: "个人资料设置",
    },
    notifications: {
      title: "通知设置",
    },
    preferences: {
      title: "偏好设置",
    },
  },
};

export default function SettingsPanel() {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t =
    translations[language as keyof typeof translations] || translations.en;
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Card className="shadow-sm border-0">
      <CardBody>
        <Nav tabs className="mb-4">
          <NavItem>
            <NavLink
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            >
              {t.tabs.profile}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "notifications"}
              onClick={() => setActiveTab("notifications")}
            >
              {t.tabs.notifications}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "preferences"}
              onClick={() => setActiveTab("preferences")}
            >
              {t.tabs.preferences}
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="profile">
            <h5 className="mb-4">{t.profile.title}</h5>
            <Profile />
          </TabPane>

          <TabPane tabId="notifications">
            <h5 className="mb-4">{t.notifications.title}</h5>
            <Notifications />
          </TabPane>

          <TabPane tabId="preferences">
            <h5 className="mb-4">{t.preferences.title}</h5>
            <Preferences />
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
}
