import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/data/site.config";
import "./globals.css";

/* DISPLAY LAYER — Switzer. Headlines only, heavy weights only. */
const switzer = localFont({
  variable: "--font-switzer",
  display: "swap",
  src: [
    { path: "./fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Switzer-Extrabold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Switzer-Black.woff2", weight: "900", style: "normal" },
  ],
});

/* BODY LAYER — General Sans. Paragraphs and UI text. */
const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
});

/* LABEL LAYER — IBM Plex Mono. Labels, numbers, metadata. Nothing else. */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // data-accent drives the entire accent system from one attribute.
      data-accent="signal"
      className={`${switzer.variable} ${generalSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
