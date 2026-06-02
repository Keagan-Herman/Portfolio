import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import { PaperTexture } from "@/components/PaperTexture";
import { GlobalFilters } from "@/components/layout/GlobalFilters";

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
  metadataBase: new URL('https://keagan-herman.vercel.app'),
  title: "Keagan Herman — Software Engineer",
  description: "Full-stack software engineer specialising in C#/.NET, Flutter, React, and high-performance frontend systems. Currently at IOSYSTEMS.",
  openGraph: {
    title: "Keagan Herman — Software Engineer",
    description: "Full-stack software engineer with production systems serving 200+ institutions.",
    url: 'https://keagan-herman.vercel.app',
    siteName: 'Keagan Herman Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Keagan Herman — Software Engineer',
      },
    ],
    locale: 'en_GB',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Keagan Herman — Software Engineer",
    description: "Full-stack software engineer with production systems serving 200+ institutions.",
    images: ['/og-image.png'],
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
        <GlobalFilters />
        <PaperTexture />
        {children}
      </body>
    </html>
  );
}
