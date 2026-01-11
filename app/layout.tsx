import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/AuthProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import JsonLd from "@/components/JsonLd";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://spiritualhometamil.com'),
  manifest: '/manifest.json',
  title: {
    template: '%s | Spiritual Home Tamil',
    default: 'Spiritual Home Tamil - Exclusive Spiritual Content & Wisdom',
  },
  description: "Join Spiritual Home Tamil for exclusive guided videos, ancient wisdom, and law of attraction mastery. Transform your life with our premium spiritual courses.",
  keywords: ["spiritual", "tamil", "meditation", "law of attraction", "manifestation", "courses", "video", "wisdom", "exclusive", "healing", "divine energy"],
  authors: [{ name: "Stanlee Varun" }],
  creator: "Spiritual Home Tamil",
  publisher: "Spiritual Home Tamil",
  category: "Spiritual/Education",
  classification: "Spiritual & educational content",
  verification: {
    google: "verification_token_placeholder", // Replace with actual token
    yandex: "yandex_verification_token",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ta_IN",
    url: "https://spiritualhometamil.com",
    siteName: "Spiritual Home Tamil",
    title: "Spiritual Home Tamil - Transform Your Life Spiritually",
    description: "Discover ancient wisdom, guided meditation, and premium spiritual videos in Tamil. Start your journey to a higher life today.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Spiritual Home Tamil Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Home Tamil",
    description: "Exclusive spiritual content and law of attraction mastery in Tamil.",
    images: ["/assets/logo.png"],
    creator: "@spiritualhometamil", // Placeholder if not real
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
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
          <JsonLd />
          <AuthProvider>
            <Navbar />
            <ServiceWorkerRegister />
            <main className="min-h-screen bg-gray-50">
              {children}
            </main>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
