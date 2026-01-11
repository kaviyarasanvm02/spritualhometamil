"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import { Youtube, Instagram, MessageCircle, Send, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();

    const socialLinks = [
        { icon: Youtube, href: "https://youtube.com/@spiritualhometamil?si=k3WvWfBsSX0tz5Kg", hover: "hover:bg-red-600 hover:text-white hover:border-red-600", color: "text-red-500" },
        { icon: Instagram, href: "https://www.instagram.com/spiritual_home_tamil_?igsh=MWNpcXo0MDhpc2YyOA==", hover: "hover:bg-pink-600 hover:text-white hover:border-pink-600", color: "text-pink-500" },
        { icon: MessageCircle, href: "https://whatsapp.com/channel/0029Vb5RCxb545urLKyLDB3L", hover: "hover:bg-green-600 hover:text-white hover:border-green-600", color: "text-green-500" },
        { icon: Send, href: "https://t.me/SPIRITUALHOMETAMILDAILYLEARNING", hover: "hover:bg-blue-500 hover:text-white hover:border-blue-500", color: "text-blue-500" },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-amber-950/30 pt-20 pb-10 relative overflow-hidden text-gray-300">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/assets/logo.png"
                                alt="Spiritual Home Tamil"
                                width={180}
                                height={60}
                                className="h-14 w-auto brightness-110"
                            />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            {t.footer.desc}
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center transition-all duration-300 ${social.hover} group`}
                                >
                                    <social.icon className={`w-5 h-5 transition-colors ${social.color} group-hover:text-white text-gray-300`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            {t.footer.quickLinks}
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: t.nav.home, href: "/" },
                                { name: t.nav.videos, href: "/videos" },
                                { name: t.nav.myLibrary, href: "/my-videos" },
                                { name: t.nav.login, href: "/login" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group text-sm">
                                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-amber-500 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            {t.footer.legal}
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: t.footer.privacy, href: "/privacy" },
                                { name: t.footer.terms, href: "/terms" },
                                { name: t.footer.refund, href: "/refund-policy" },
                                { name: t.footer.contact, href: "/contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group text-sm">
                                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-amber-500 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            {t.footer.newsletter.title}
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">
                            {t.footer.newsletter.desc}
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder={t.footer.newsletter.placeholder}
                                    className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                                />
                            </div>
                            <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-amber-900/20 flex items-center justify-center gap-2">
                                {t.footer.newsletter.button}
                                <Send className="w-3 h-3" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} {t.footer.rights}
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-gray-400 hover:text-white text-xs transition-colors">{t.footer.privacy}</Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white text-xs transition-colors">{t.footer.terms}</Link>
                        <p className="text-gray-500 text-xs flex items-center gap-1 ml-4 border-l border-gray-800 pl-4">
                            Made with <span className="text-red-500 animate-pulse">♥</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
