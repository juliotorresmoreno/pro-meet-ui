"use client";

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";
import Link from "next/link";
import NextLink from "./NextLink";

interface HeaderProps {
  readonly language?: string;
}

const languageOptions = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

const translations = {
  en: {
    login: "Log in",
    register: "Sign up",
    features: "Features",
    pricing: "Pricing",
  },
  es: {
    login: "Iniciar sesión",
    register: "Registrarse",
    features: "Características",
    pricing: "Precios",
  },
  fr: {
    login: "Connexion",
    register: "Inscription",
    features: "Fonctionnalités",
    pricing: "Tarifs",
  },
  ja: {
    login: "ログイン",
    register: "登録",
    features: "特徴",
    pricing: "価格",
  },
  zh: {
    login: "登录",
    register: "注册",
    features: "特点",
    pricing: "价钱",
  },
};

function Header({ language = "en" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t =
    translations[language as keyof typeof translations] || translations.en;

  const handleLanguageChange = (langCode: string) => {
    console.log("Language changed to:", langCode);
  };

  return (
    <Navbar
      color="light"
      light
      expand="md"
      fixed="top"
      className={`py-2 ${scrolled ? "navbar-scrolled shadow-sm" : ""}`}
      style={{
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "white",
      }}
    >
      <NavbarBrand
        tag={NextLink}
        href="/"
        className="d-flex align-items-center"
      >
        <div
          className="bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center me-2"
          style={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <i className="bi bi-calendar-check text-white fs-5"></i>
        </div>
        <span
          className="fw-bold fs-4 text-gradient"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pro-Meets
        </span>
      </NavbarBrand>

      <NavbarToggler onClick={toggle} className="border-0">
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} fs-2`}></i>
      </NavbarToggler>

      <Collapse isOpen={isOpen} navbar className="justify-content-between">
        <Nav className="mx-auto mx-md-0" navbar>
          <NavItem className="mx-1 my-1 my-md-0">
            <NavLink
              tag={NextLink}
              href="#features"
              className="px-3 py-2 rounded-pill position-relative nav-link-custom"
              activeClassName="active"
            >
              {t.features}
            </NavLink>
          </NavItem>
          <NavItem className="mx-1 my-1 my-md-0">
            <NavLink
              tag={NextLink}
              href="#use-cases"
              className="px-3 py-2 rounded-pill position-relative nav-link-custom"
              activeClassName="active"
            >
              Use Cases
            </NavLink>
          </NavItem>
          <NavItem className="mx-1 my-1 my-md-0">
            <NavLink
              tag={NextLink}
              href="#how-it-works"
              className="px-3 py-2 rounded-pill position-relative nav-link-custom"
              activeClassName="active"
            >
              How It Works
            </NavLink>
          </NavItem>
          <NavItem className="mx-1 my-1 my-md-0">
            <NavLink
              tag={NextLink}
              href="#pricing"
              className="px-3 py-2 rounded-pill position-relative nav-link-custom"
              activeClassName="active"
            >
              {t.pricing}
            </NavLink>
          </NavItem>
        </Nav>

        <Nav navbar className="mt-3 mt-md-0">
          <UncontrolledDropdown nav inNavbar className="me-2">
            <DropdownToggle
              nav
              caret
              className="d-flex align-items-center language-toggle"
            >
              <span className="flag-icon me-1">
                {languageOptions.find((lang) => lang.code === language)?.flag ||
                  "🌐"}
              </span>
              <span className="d-none d-lg-inline">
                {languageOptions.find((lang) => lang.code === language)?.name}
              </span>
            </DropdownToggle>
            <DropdownMenu end className="shadow-sm border-0">
              {languageOptions.map((lang) => (
                <DropdownItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  active={language === lang.code}
                  className="d-flex align-items-center"
                >
                  <span className="flag-icon me-2">{lang.flag}</span>
                  {lang.name}
                  {language === lang.code && (
                    <i className="bi bi-check2 ms-auto text-primary"></i>
                  )}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem className="mx-1 my-1 my-md-0">
            <Link href="/login">
              <Button
                outline
                color="primary"
                className="px-3 py-2 rounded-pill fw-medium"
                style={{
                  borderWidth: "2px",
                  transition: "all 0.3s ease",
                }}
              >
                {t.login}
              </Button>
            </Link>
          </NavItem>

          <NavItem className="mx-1 my-1 my-md-0">
            <Link href="/register">
              <Button
                color="primary"
                className="px-3 py-2 rounded-pill fw-medium"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                {t.register}
              </Button>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
