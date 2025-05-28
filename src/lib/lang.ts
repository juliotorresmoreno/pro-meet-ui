export type Lang = "en" | "es";

/**
 * Detecta el idioma preferido del usuario con prioridad:
 * 1. Cookie 'lang' (si existe)
 * 2. Navegador (header Accept-Language)
 * 3. Valor por defecto ('en')
 */
export function getLanguage(request?: Request): "en" | "es" {
  // 1. Intentar obtener de cookies (SSR o CSR)
  const cookieLang = getCookie("lang", request);
  if (cookieLang === "es" || cookieLang === "en") {
    return cookieLang;
  }

  // 2. Obtener del navegador (Accept-Language header)
  const browserLang = getBrowserLanguage(request);
  if (browserLang) {
    return browserLang;
  }

  // 3. Valor por defecto
  return "en";
}

// ===== Funciones auxiliares ===== //

function getCookie(name: string, request?: Request): string | null {
  if (typeof window !== "undefined") {
    // Cliente: leer de document.cookie
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop()?.split(";").shift() || null : null;
  } else if (request) {
    // Servidor (Next.js): leer de headers
    const cookieHeader = request.headers.get("cookie");
    return cookieHeader?.match(new RegExp(`(^| )${name}=([^;]+)`))?.[2] || null;
  }
  return null;
}

function getBrowserLanguage(request?: Request): "en" | "es" | null {
  let acceptLanguage: string | null = null;

  if (typeof window !== "undefined") {
    // Cliente: navigator.language
    acceptLanguage = navigator.language;
  } else if (request) {
    // Servidor: header Accept-Language
    acceptLanguage = request.headers.get("accept-language");
  }

  if (!acceptLanguage) return null;

  // Priorizar español si encuentra 'es' en cualquier posición
  return acceptLanguage.toLowerCase().includes("es") ? "es" : "en";
}
