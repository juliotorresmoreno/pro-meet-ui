export type Lang = "en" | "es" | "zh" | "ja" | "fr";


export function getLanguage(request?: Request): "en" | "es" {
  const cookieLang = getCookie("lang", request);
  if (cookieLang === "es" || cookieLang === "en") {
    return cookieLang;
  }

  const browserLang = getBrowserLanguage(request);
  if (browserLang) {
    return browserLang;
  }

  return "en";
}


function getCookie(name: string, request?: Request): string | null {
  if (typeof window !== "undefined") {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop()?.split(";").shift() || null : null;
  } else if (request) {
    const cookieHeader = request.headers.get("cookie");
    return cookieHeader?.match(new RegExp(`(^| )${name}=([^;]+)`))?.[2] || null;
  }
  return null;
}

function getBrowserLanguage(request?: Request): "en" | "es" | null {
  let acceptLanguage: string | null = null;

  if (typeof window !== "undefined") {
    acceptLanguage = navigator.language;
  } else if (request) {
    acceptLanguage = request.headers.get("accept-language");
  }

  if (!acceptLanguage) return null;

  return acceptLanguage.toLowerCase().includes("es") ? "es" : "en";
}
