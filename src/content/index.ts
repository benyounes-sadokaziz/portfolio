import { en } from "./en";
import { fr } from "./fr";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./meta";
import type { Dictionary } from "./dictionary";

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "fr" : "en";
}

export * from "./meta";
export type { Dictionary, ProjectCopy, CaseStudyCopy, ExperienceCopy } from "./dictionary";
