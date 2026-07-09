import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "TRAVEDACH Bedachungen — Handwerk mit Höhe | Demo-Website";
const description =
  "Demo-Website für einen Dachdeckerbetrieb: Steildach, Flachdach, energetische Dachsanierung und Klempnerarbeiten in Lübeck und der Hansestadt-Region. Diese Seite ist eine Agentur-Demo und kein echtes Unternehmen.";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title,
    description,
    locale: "de_DE",
    type: "website",
    images: ["https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
