import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import LanguageSelector from "../common/LanguageSelector";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";

const translations = {
  en: {
    newMeeting: "New Meeting",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
  },
  es: {
    newMeeting: "Nueva Reunión",
    profile: "Perfil",
    settings: "Configuración",
    logout: "Cerrar sesión",
  },
  fr: {
    newMeeting: "Nouvelle réunion",
    profile: "Profil",
    settings: "Paramètres",
    logout: "Déconnexion",
  },
  ja: {
    newMeeting: "新しいミーティング",
    profile: "プロフィール",
    settings: "設定",
    logout: "ログアウト",
  },
  zh: {
    newMeeting: "新会议",
    profile: "个人资料",
    settings: "设置",
    logout: "登出",
  },
};

export default function DashboardHeader() {
  const { status, setAccessToken, setRefreshToken, setMethod, method } =
    useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const router = useRouter();

  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const handleLogout = async () => {
    setAccessToken("");
    setRefreshToken("");
    if (method === "oauth") {
      setMethod(null);
      await signOut();
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <header className="dashboard-header bg-white shadow-sm">
      <Container fluid className="px-md-4">
        <div className="d-flex justify-content-between align-items-center py-3">
          <Link
            href="/dashboard"
            className="navbar-brand d-flex align-items-center"
          >
            <div className="logo-icon bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center me-2">
              <i className="bi bi-calendar-check text-white"></i>
            </div>
            <span className="fw-bold fs-4 text-gradient">Pro-Meets</span>
          </Link>

          <Nav className="align-items-center">
            <NavItem className="mx-2">
              <Link
                href="/dashboard/new-meeting"
                className="btn btn-primary rounded-pill px-3"
              >
                <i className="bi bi-plus-lg me-1"></i> {t.newMeeting}
              </Link>
            </NavItem>

            <Dropdown isOpen={dropdownOpen} toggle={toggle} nav inNavbar>
              <DropdownToggle nav caret className="d-flex align-items-center">
                <div className="avatar bg-light text-dark rounded-circle me-2">
                  <i className="bi bi-person-fill"></i>
                </div>
                <span className="d-none d-lg-inline">John Doe</span>
              </DropdownToggle>

              <DropdownMenu end>
                <DropdownItem tag={Link} href="/dashboard/profile">
                  <i className="bi bi-person-circle me-2"></i>
                  {t.profile}
                </DropdownItem>
                <DropdownItem tag={Link} href="/dashboard/settings">
                  <i className="bi bi-gear me-2"></i>
                  {t.settings}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right me-2"></i>
                  {t.logout}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <LanguageSelector />
          </Nav>
        </div>
      </Container>
    </header>
  );
}
