import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const fontSans = {
  fontFamily: '"DM Sans", sans-serif',
  fontFeatureSettings: '"cv11", "ss01"',
  fontVariationSettings: '"opsz" 32',
};
