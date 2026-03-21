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
    default: "Venkatesh Portfolio | offlvenkatesh | AI & Web",
    template: "%s | Venkatesh Portfolio (offlvenkatesh)",
  },
  description: "The official portfolio of Venkatesh (offlvenkatesh). I bridge the gap between stunning web interfaces and powerful artificial intelligence.",
  keywords: ["venkatesh portfolio", "offlvenkatesh", "Venkatesh", "AI Engineer", "Web Developer", "React", "Next.js"],
  authors: [{ name: "offlvenkatesh", url: "https://github.com/offlvenkatesh" }],
  creator: "offlvenkatesh",
  openGraph: {
    title: "Venkatesh Portfolio | offlvenkatesh",
    description: "The official portfolio of Venkatesh (offlvenkatesh). Bridging AI and web development.",
    url: "https://your-portfolio-domain.com",
    siteName: "Venkatesh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkatesh Portfolio | offlvenkatesh",
    description: "The official portfolio of Venkatesh (offlvenkatesh). Bridging AI and web development.",
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
