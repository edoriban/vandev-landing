import { ui, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return "es";
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)["es"]): string {
    const translations = ui[lang] as Record<string, string>;
    const fallback = ui["es"] as Record<string, string>;
    return translations[key] || fallback[key];
  };
}

export function getLocalizedPath(lang: Lang, path: string = ""): string {
  return `/${lang}/${path}`.replace(/\/+/g, "/").replace(/\/$/, "") || `/${lang}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}
