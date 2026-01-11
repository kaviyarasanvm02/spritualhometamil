"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X, User, LogOut, LayoutDashboard, Library, PlayCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { user, logout } = useAuth();
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.videos, href: "/videos", icon: PlayCircle },
    ];

    const authLinks = user ? [
        { name: t.nav.myLibrary, href: "/my-videos", icon: Library },
        ...(user.role === "ADMIN" ? [{ name: t.nav.admin, href: "/admin/dashboard", icon: LayoutDashboard }] : []),
    ] : [];

    const isActive = (path: string) => pathname === path;

    // improved text visibility logic - Gold Theme
    // Force scrolled style if not on homepage
    const isActuallyScrolled = isScrolled || pathname !== "/";

    const textColor = isActuallyScrolled ? "text-gray-800" : "text-gray-100";
    const hoverColor = isActuallyScrolled ? "hover:text-amber-600" : "hover:text-amber-400";
    const activeColor = isActuallyScrolled ? "text-amber-600 font-bold" : "text-amber-400 font-bold";

    // Hide Navbar on Admin pages
    if (pathname?.startsWith("/admin")) return null;

    return (
        <>
            <nav
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isActuallyScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100 py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="group flex items-center gap-2">
                                {/* Use Logo Image */}
                                <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                    <Image
                                        src="/assets/logo.png"
                                        alt="Spiritual Home Tamil"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                {/* Hidden text for SEO but visible if needed, currently hiding to prioritize logo */}
                                <span className={`text-xl font-extrabold tracking-tight transition-colors hidden sm:block ${isActuallyScrolled ? "text-gray-900" : "text-white"}`}>
                                    Spiritual<span className="text-amber-500">Home</span>
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {/* Main Links */}
                            <div className="flex items-center space-x-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors ${hoverColor} ${isActive(link.href) ? activeColor : textColor}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {authLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors ${hoverColor} ${isActive(link.href) ? activeColor : textColor}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className={`w-px h-6 ${isActuallyScrolled ? "bg-gray-300" : "bg-white/30"}`}></div>

                            {/* Right Actions */}
                            <div className="flex items-center space-x-4">
                                <LanguageSwitcher />

                                {user ? (
                                    <button
                                        onClick={logout}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActuallyScrolled
                                            ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                            }`}
                                    >
                                        <LogOut className="w-4 h-4" />
                                        {t.nav.logout}
                                    </button>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href="/login"
                                            className={`font-medium text-sm transition-colors ${hoverColor} ${textColor}`}
                                        >
                                            {t.nav.login}
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-amber-600 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                                        >
                                            {t.nav.signup}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-4">
                            <LanguageSwitcher />
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isActuallyScrolled ? "text-gray-700 hover:text-amber-600" : "text-white hover:text-amber-400"}`}
                            >
                                <span className="sr-only">Open main menu</span>
                                {mobileMenuOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-50 text-base font-medium text-gray-700 hover:text-amber-600"
                            >
                                <link.icon className="w-5 h-5 text-gray-400" />
                                {link.name}
                            </Link>
                        ))}
                        {authLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-50 text-base font-medium text-gray-700 hover:text-amber-600"
                            >
                                <link.icon className="w-5 h-5 text-gray-400" />
                                {link.name}
                            </Link>
                        ))}

                        <div className="border-t border-gray-100 pt-4 mt-2">
                            {user ? (
                                <button
                                    onClick={() => { logout(); setMobileMenuOpen(false); }}
                                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 text-base font-medium text-red-600"
                                >
                                    <LogOut className="w-5 h-5" />
                                    {t.nav.logout}
                                </button>
                            ) : (
                                <div className="grid grid-cols-2 gap-4">
                                    <Link
                                        href="/login"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        {t.nav.login}
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-amber-500 hover:bg-amber-600"
                                    >
                                        {t.nav.signup}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
