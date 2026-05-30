import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keagan Herman — Software Engineer",
  description: "Full-stack software engineer specialising in C#/.NET, Flutter, React, and high-performance frontend systems. Currently at IOSYSTEMS.",
  openGraph: {
    title: "Keagan Herman — Software Engineer",
    description: "Full-stack software engineer with production systems serving 200+ institutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmMono.variable} antialiased`}
      >
        {/* Global SVG Filters for editorial effects */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <filter id="ink-bleed">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="bleed" />
            <feComposite in="SourceGraphic" in2="bleed" operator="over" />
          </filter>
        </svg>

        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
