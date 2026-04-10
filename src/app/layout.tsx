import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio-domain.com"), // Update this with the real domain later
  title: {
    default: "Divendra Portfolio | offldivendra | AI & Web",
    template: "%s | Divendra Portfolio (offldivendra)",
  },
  description: "The official portfolio of Divendra (offldivendra). I bridge the gap between stunning web interfaces and powerful artificial intelligence.",
  keywords: ["divendra portfolio", "offldivendra", "Divendra", "AI Engineer", "Web Developer", "React", "Next.js"],
  authors: [{ name: "offldivendra", url: "https://github.com/offlvenkatesh" }],
  creator: "offldivendra",
  openGraph: {
    title: "Divendra Portfolio | offldivendra",
    description: "The official portfolio of Divendra (offldivendra). Bridging AI and web development.",
    url: "https://your-portfolio-domain.com",
    siteName: "Divendra Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divendra Portfolio | offldivendra",
    description: "The official portfolio of Divendra (offldivendra). Bridging AI and web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="glow-bg" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
