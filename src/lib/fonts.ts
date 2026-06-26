import { Geist, Geist_Mono, Merriweather } from "next/font/google";

export const body = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const display = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
