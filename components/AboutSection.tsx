"use client";

import { useLanguage } from "./LanguageProvider";
import { Youtube, Instagram, MessageCircle, Send, User } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
    const { t } = useLanguage();

    const socialLinks = [
        {
            name: t.platform.youtube,
            icon: Youtube,
            href: "https://youtube.com/@spiritualhometamil?si=k3WvWfBsSX0tz5Kg",
            color: "text-red-500",
            bgColor: "bg-red-50",
            buttonText: t.platform.subscribe,
            hoverBorder: "hover:border-red-200"
        },
        {
            name: t.platform.instagram,
            icon: Instagram,
            href: "https://www.instagram.com/spiritual_home_tamil_?igsh=MWNpcXo0MDhpc2YyOA==",
            color: "text-pink-500",
            bgColor: "bg-pink-50",
            buttonText: t.platform.follow,
            hoverBorder: "hover:border-pink-200"
        },
        {
            name: t.platform.whatsapp,
            icon: MessageCircle,
            href: "https://whatsapp.com/channel/0029Vb5RCxb545urLKyLDB3L",
            color: "text-green-500",
            bgColor: "bg-green-50",
            buttonText: t.platform.join,
            hoverBorder: "hover:border-green-200"
        },
        {
            name: t.platform.telegram,
            icon: Send,
            href: "https://t.me/SPIRITUALHOMETAMILDAILYLEARNING",
            color: "text-blue-500",
            bgColor: "bg-blue-50",
            buttonText: t.platform.join,
            hoverBorder: "hover:border-blue-200"
        }
    ];

    return (
        <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-amber-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Profile / Intro Section */}
                <div className="mx-auto max-w-3xl text-center mb-20 animate-fade-in">
                    <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-amber-100/50 dark:bg-amber-900/30 ring-1 ring-amber-200 dark:ring-amber-800">
                        <User className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
                        {t.about.title}
                    </h2>

                    <div className="relative p-8 bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300">
                        {/* Decorative Quote Mark */}
                        <span className="absolute -top-6 -left-4 text-7xl text-amber-200 dark:text-amber-900/50 opacity-50 font-serif leading-none">“</span>

                        <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 leading-relaxed">
                            {t.about.name}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            {t.about.description1}
                        </p>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
                        <p className="text-lg font-medium text-amber-700 dark:text-amber-400">
                            {t.about.description2}
                        </p>
                    </div>
                </div>

                {/* Social / Platform Section */}
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <span className="text-amber-600 dark:text-amber-400 font-bold tracking-wider uppercase text-sm">{t.platform.title}</span>
                        <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Join Our Growing Community</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative flex flex-col items-center p-8 bg-white/60 dark:bg-black/20 backdrop-blur-lg rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.hoverBorder}`}
                            >
                                <div className={`mb-6 p-4 rounded-2xl ${item.bgColor} dark:bg-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`h-8 w-8 ${item.color}`} />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.name.split(':')[0]}</h4>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">{item.name.split(':')[1] || "Connect with us"}</p>

                                <span className={`mt-auto inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-colors ${item.bgColor} dark:bg-gray-700 ${item.color} group-hover:bg-opacity-80`}>
                                    {item.buttonText}
                                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Image Gallery Section */}
                <div className="mt-20 animate-fade-in-up">
                    <div className="text-center mb-10">
                        <span className="text-amber-600 dark:text-amber-400 font-bold tracking-wider uppercase text-sm">Gallery</span>
                        <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Moments of Transformation</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "/assets/pic 1.JPG",
                            "/assets/pic 2.png",
                            "/assets/pic 3.png",
                            "/assets/pic 4.png",
                            "/assets/pic 5.png",
                            "/assets/pic 6.png"
                        ].map((src, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/5]">
                                <Image
                                    src={src}
                                    alt={`Spiritual Home Gallery ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
