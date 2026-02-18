import type { Metadata } from "next";
import { Playfair_Display, Lato, Noto_Sans_Tamil, Noto_Serif_Tamil } from "next/font/google"; // 2
import "./globals.css"; // 3
import Navbar from "@/components/Navbar"; // 4
import Footer from "@/components/Footer"; // 5
import { AuthProvider } from "@/components/AuthProvider"; // 6
import { LanguageProvider } from "@/components/LanguageProvider"; // 7
import { ThemeProvider } from "@/components/ThemeProvider"; // 8
import JsonLd from "@/components/JsonLd"; // 9
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister"; // 10
import { Toaster } from "react-hot-toast"; // 11

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: '--font-lato',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: '--font-noto-sans-tamil',
});

const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ["tamil"],
  variable: '--font-noto-serif-tamil',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spritualhometamil.com'),
  manifest: '/manifest.json',
  title: {
    template: '%s | Spiritual Home Tamil',
    default: 'Spiritual Home Tamil - Exclusive Spiritual Content & Wisdom',
  },
  description: "Join Spiritual Home Tamil for exclusive guided videos, ancient wisdom, and law of attraction mastery in Tamil. Unlock your potential with our premium manifestation courses.",
  keywords: [
    "spiritual", "tamil", "meditation", "law of attraction", "manifestation",
    "courses", "video", "wisdom", "exclusive", "healing", "divine energy",
    "loa tamil", "money manifestation", "relationship healing", "tamil spiritual courses"
  ],
  authors: [{ name: "Stanlee Varun", url: "https://www.spritualhometamil.com" }],
  creator: "Spiritual Home Tamil",
  publisher: "Spiritual Home Tamil",
  category: "Education",
  applicationName: "Spiritual Home Tamil",
  appleWebApp: {
    capable: true,
    title: "Spiritual Home Tamil",
    statusBarStyle: "default",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ta_IN",
    alternateLocale: ["en_US"],
    url: "https://www.spritualhometamil.com",
    siteName: "Spiritual Home Tamil",
    title: "Spiritual Home Tamil - Transform Your Life Spiritually",
    description: "Discover ancient wisdom, guided meditation, and premium spiritual videos in Tamil. Start your journey to a higher life today.",
    images: [
      {
        url: "/assets/hero-banner.png", // Changed to smaller image for better WhatsApp compatibility
        width: 1200,
        height: 630,
        alt: "Spiritual Home Tamil Official Banner",
      },
      {
        url: "/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Spiritual Home Tamil Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spiritualhometamil",
    creator: "@spiritualhometamil",
    title: "Spiritual Home Tamil",
    description: "Exclusive spiritual content and law of attraction mastery in Tamil.",
    images: ["/assets/hero-banner.png"],
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
    canonical: 'https://www.spritualhometamil.com',
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  verification: {
    google: "google_verification_token", // Add actual token if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} ${notoSansTamil.variable} ${notoSerifTamil.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider defaultTheme="light" storageKey="spiritual-home-theme">
            <JsonLd />
            <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
            <AuthProvider>
              <Navbar />
              <ServiceWorkerRegister />
              <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
                {children}
              </main>
              <Footer />
            </AuthProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
