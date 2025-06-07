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
  NavLink,
} from "reactstrap";
import Link from "next/link";
import NextLink from "../NextLink";
import LanguageSelector from "../LanguageSelector";
import { useLanguageStore } from "@/stores/language";

const translations = {
  en: {
    login: "Log in",
    register: "Sign up",
    features: "Features",
    pricing: "Pricing",
    useCases: "Use Cases",
    howItWorks: "How It Works",
  },
  es: {
    login: "Iniciar sesión",
    register: "Registrarse",
    features: "Características",
    pricing: "Precios",
    useCases: "Casos de Uso",
    howItWorks: "Cómo Funciona",
  },
  fr: {
    login: "Connexion",
    register: "Inscription",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    useCases: "Cas d'Utilisation",
    howItWorks: "Comment ça Marche",
  },
  ja: {
    login: "ログイン",
    register: "登録",
    features: "特徴",
    pricing: "価格",
    useCases: "使用例",
    howItWorks: "使い方",
  },
  zh: {
    login: "登录",
    register: "注册",
    features: "特点",
    pricing: "价钱",
    useCases: "使用案例",
    howItWorks: "工作原理",
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const language = useLanguageStore((state) => state.language) || "en";

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t =
    translations[language as keyof typeof translations] || translations.en;

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
              href="/#features"
              className="px-3 py-2 rounded-pill position-relative nav-link-custom"
              activeClassName="active"
            >
              {t.features}
            </NavLink>
          </NavItem>
          <NavItem className="mx-1 my-1 my-md-0">
            <NavLink
              tag={NextLink}
              href="/#use-cases"
              className="px-3 py-2 rounded-pill position-relative nav-link-custom"
              activeClassName="active"
            >
              {t.useCases}
            </NavLink>
          </NavItem>
          <NavItem className="mx-1 my-1 my-md-0">
            <NavLink
              tag={NextLink}
              href="/#how-it-works"
              className="px-3 py-2 rounded-pill position-relative nav-link-custom"
              activeClassName="active"
            >
              {t.howItWorks}
            </NavLink>
          </NavItem>
          <NavItem className="mx-1 my-1 my-md-0">
            <NavLink
              tag={NextLink}
              href="/#pricing"
              className="px-3 py-2 rounded-pill position-relative nav-link-custom"
              activeClassName="active"
            >
              {t.pricing}
            </NavLink>
          </NavItem>
        </Nav>

        <Nav navbar className="mt-3 mt-md-0">
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

           <LanguageSelector />
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
