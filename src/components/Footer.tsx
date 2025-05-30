"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import NextLink from "./NextLink";

interface FooterProps {
  readonly language?: string;
}

const translations = {
  en: {
    product: "Product",
    features: "Features",
    integrations: "Integrations",
    pricing: "Pricing",
    api: "API",
    resources: "Resources",
    blog: "Blog",
    help: "Help Center",
    tutorials: "Tutorials",
    webinars: "Webinars",
    company: "Company",
    about: "About Us",
    careers: "Careers",
    contact: "Contact",
    terms: "Terms & Privacy",
    rights: "All rights reserved",
    termsService: "Terms of Service",
    privacy: "Privacy Policy",
    cookies: "Cookie Settings",
  },
  es: {
    product: "Producto",
    features: "Características",
    integrations: "Integraciones",
    pricing: "Precios",
    api: "API",
    resources: "Recursos",
    blog: "Blog",
    help: "Centro de ayuda",
    tutorials: "Tutoriales",
    webinars: "Webinars",
    company: "Empresa",
    about: "Sobre nosotros",
    careers: "Carreras",
    contact: "Contacto",
    terms: "Términos y privacidad",
    rights: "Todos los derechos reservados",
    termsService: "Términos de servicio",
    privacy: "Política de privacidad",
    cookies: "Configuración de cookies",
  },
  fr: {
    product: "Produit",
    features: "Fonctionnalités",
    integrations: "Intégrations",
    pricing: "Tarifs",
    api: "API",
    resources: "Ressources",
    blog: "Blog",
    help: "Centre d'aide",
    tutorials: "Tutoriels",
    webinars: "Webinaires",
    company: "Entreprise",
    about: "À propos",
    careers: "Carrières",
    contact: "Contact",
    terms: "Conditions et confidentialité",
    rights: "Tous droits réservés",
    termsService: "Conditions d'utilisation",
    privacy: "Politique de confidentialité",
    cookies: "Paramètres des cookies",
  },
  ja: {
    product: "製品",
    features: "特徴",
    integrations: "統合",
    pricing: "価格",
    api: "API",
    resources: "リソース",
    blog: "ブログ",
    help: "ヘルプセンター",
    tutorials: "チュートリアル",
    webinars: "ウェビナー",
    company: "会社",
    about: "私たちについて",
    careers: "採用情報",
    contact: "お問い合わせ",
    terms: "利用規約とプライバシー",
    rights: "全著作権所有",
    termsService: "利用規約",
    privacy: "プライバシーポリシー",
    cookies: "クッキー設定",
  },
  zh: {
    product: "产品",
    features: "特点",
    integrations: "集成",
    pricing: "价钱",
    api: "API",
    resources: "资源",
    blog: "博客",
    help: "帮助中心",
    tutorials: "教程",
    webinars: "网络研讨会",
    company: "公司",
    about: "关于我们",
    careers: "职业",
    contact: "联系",
    terms: "条款和隐私",
    rights: "版权所有",
    termsService: "服务条款",
    privacy: "隐私政策",
    cookies: "Cookie设置",
  },
};

function Footer({ language = "en" }: FooterProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <footer
      className="bg-white border-top"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
      }}
    >
      <Container className="py-5">
        <Row>
          <Col md={3} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <i className="bi bi-calendar-check text-white fs-5"></i>
              </div>
              <span
                className="fw-bold fs-4 text-gradient"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Pro-Meets
              </span>
            </div>
            <p className="text-muted mb-3">
              {language === "en" &&
                "The professional solution for managing your meetings efficiently."}
              {language === "es" &&
                "La solución profesional para gestionar tus reuniones eficientemente."}
              {language === "fr" &&
                "La solution professionnelle pour gérer efficacement vos réunions."}
              {language === "ja" &&
                "会議を効率的に管理するための専門的なソリューション。"}
              {language === "zh" && "高效管理会议的专业解决方案。"}
            </p>
            <div className="social-icons">
              <a href="#" className="text-decoration-none me-3">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-decoration-none me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-decoration-none me-3">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-decoration-none">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">{t.product}</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NextLink
                  href="#features"
                  className="text-decoration-none text-muted"
                >
                  {t.features}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="#integrations"
                  className="text-decoration-none text-muted"
                >
                  {t.integrations}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="#pricing"
                  className="text-decoration-none text-muted"
                >
                  {t.pricing}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="#api"
                  className="text-decoration-none text-muted"
                >
                  {t.api}
                </NextLink>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">{t.resources}</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NextLink
                  href="/blog"
                  className="text-decoration-none text-muted"
                >
                  {t.blog}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="/help"
                  className="text-decoration-none text-muted"
                >
                  {t.help}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="/tutorials"
                  className="text-decoration-none text-muted"
                >
                  {t.tutorials}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="/webinars"
                  className="text-decoration-none text-muted"
                >
                  {t.webinars}
                </NextLink>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold mb-3">{t.company}</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NextLink
                  href="/about"
                  className="text-decoration-none text-muted"
                >
                  {t.about}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="/careers"
                  className="text-decoration-none text-muted"
                >
                  {t.careers}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="/contact"
                  className="text-decoration-none text-muted"
                >
                  {t.contact}
                </NextLink>
              </li>
              <li className="mb-2">
                <NextLink
                  href="/terms"
                  className="text-decoration-none text-muted"
                >
                  {t.terms}
                </NextLink>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} Pro-Meets. {t.rights}
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <NextLink
              href="/terms"
              className="text-decoration-none text-muted me-3"
            >
              {t.termsService}
            </NextLink>
            <NextLink
              href="/privacy"
              className="text-decoration-none text-muted me-3"
            >
              {t.privacy}
            </NextLink>
            <NextLink
              href="/cookies"
              className="text-decoration-none text-muted"
            >
              {t.cookies}
            </NextLink>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
