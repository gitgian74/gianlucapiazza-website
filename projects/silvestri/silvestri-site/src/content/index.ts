import type { Locale } from "@/lib/routes";
import type { Dict } from "./types";
import en from "./en";
import it from "./it";

const DICTS: Record<Locale, Dict> = { en, it };

export const dict = (locale: Locale): Dict => DICTS[locale];
export type { Dict };
