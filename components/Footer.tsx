"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import { Youtube, Instagram, MessageCircle, Send } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();

    const socialLinks = [
        { icon: Youtube, href: "https://youtube.com/@spiritualhometamil?si=k3WvWfBsSX0tz5Kg", hover: "hover:text-red-500" },
        { icon: Instagram, href: "https://www.instagram.com/spiritual_home_tamil_?igsh=MWNpcXo0MDhpc2YyOA==", hover: "hover:text-pink-500" },
        { icon: MessageCircle, href: "https://whatsapp.com/channel/0029Vb5RCxb545urLKyLDB3L", hover: "hover:text-green-500" },
        { icon: Send, href: "https://t.me/SPIRITUALHOMETAMILDAILYLEARNING", hover: "hover:text-blue-500" },
    ];

    return (
        <footer className="bg-gray-950 py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/assets/logo.png"
                                alt="Spiritual Home Tamil"
                                width={180}
                                height={60}
                                className="h-16 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                            {t.footer.desc}
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.hover}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t.footer.quickLinks}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: t.nav.home, href: "/" },
                                { name: t.nav.videos, href: "#courses" },
                                { name: t.nav.myLibrary, href: "/my-videos" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t.footer.legal}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: t.footer.privacy, href: "#" },
                                { name: t.footer.terms, href: "#" },
                                { name: t.footer.contact, href: "#" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} {t.footer.rights}
                    </div>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                        Made with <span className="text-red-500">♥</span> for a better world.
                    </p>
                </div>
            </div>
        </footer>
    );
}
