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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
