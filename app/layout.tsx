import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/AuthProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Spiritual Home Tamil',
    default: 'Spiritual Home Tamil',
  },
  description: "Exclusive spiritual content, ancient wisdom, and guided videos. Join our community for premium access to spiritual growth.",
  keywords: ["spiritual", "tamil", "meditation", "courses", "video", "wisdom", "exclusive"],
  applicationName: "Spiritual Home",
  openGraph: {
    type: "website",
    locale: "ta_IN",
    url: "https://spiritualhometamil.com",
    siteName: "Spiritual Home Tamil",
    title: "Spiritual Home Tamil - Exclusive Spiritual Content",
    description: "Discover ancient wisdom and premium spiritual videos in Tamil.",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Spiritual Home Tamil Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <AuthProvider>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
              {children}
            </main>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
