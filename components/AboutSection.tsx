import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { Youtube, Instagram, MessageCircle, Send, User } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/assets/pic 1.jpg",
    "/assets/pic 2.jpg",
    "/assets/pic 3.jpg",
    "/assets/pic 4.jpg",
    "/assets/pic 5.jpg",
    "/assets/pic 6.jpg",
    "/assets/pic 7.jpg",
    "/assets/pic 8.jpg",
    "/assets/pic 9.jpg"
];

export default function AboutSection() {
    const { t } = useLanguage();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                {/* Left Column: About Pic - Automatic Change (Slideshow) */}
                <div className="relative mx-auto w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up lg:order-1 order-2">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={images[currentImageIndex]}
                                alt={`Spiritual Home Gallery ${currentImageIndex + 1}`}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-center">
                        <span className="inline-block px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-white/90 text-xs font-medium border border-white/20">
                            Moments of Transformation
                        </span>
                    </div>
                </div>

                {/* Right Column: Profile / Intro Section */}
                <div className="text-left animate-fade-in lg:order-2 order-1">
                    <div className="flex items-center gap-4 mb-6 pl-8 sm:pl-0">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-100/50 dark:bg-amber-900/30 ring-1 ring-amber-200 dark:ring-amber-800">
                            <User className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-gray-900 dark:text-white leading-none">
                            {t.about.title}
                        </h2>
                    </div>

                    <div className="relative p-8 bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300">
                        {/* Decorative Quote Mark */}
                        <span className="absolute -top-6 -left-4 text-7xl text-amber-200 dark:text-amber-900/50 opacity-50 font-serif leading-none">“</span>

                        <p className="text-xl sm:text-2xl font-semibold font-sans text-gray-800 dark:text-gray-100 mb-4 leading-relaxed">
                            {t.about.name}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 font-sans leading-relaxed mb-6">
                            {t.about.description1}
                        </p>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-6" />
                        <p className="text-lg font-medium text-amber-700 dark:text-amber-400">
                            {t.about.description2}
                        </p>
                    </div>
                </div>
            </div>

            {/* Social / Platform Section (Marquee) */}
            <div className="mx-auto max-w-7xl overflow-hidden">
                <div className="text-center mb-12">
                    <span className="text-amber-600 dark:text-amber-400 font-bold font-sans tracking-wider uppercase text-sm">{t.platform.title}</span>
                    <h3 className="mt-2 text-3xl font-bold font-serif text-gray-900 dark:text-white">Join Our Growing Community</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {socialLinks.map((item, index) => (
                        <a
                            key={`${item.name}-${index}`}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative flex flex-col items-center p-6 bg-white/60 dark:bg-black/20 backdrop-blur-lg rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl ${item.hoverBorder} w-full`}
                        >
                            <div className={`mb-4 p-4 rounded-2xl ${item.bgColor} dark:bg-white/5 transition-transform duration-300`}>
                                <item.icon className={`h-8 w-8 ${item.color}`} />
                            </div>
                            <h4 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-2 text-center">{item.name.split(':')[0]}</h4>
                            <p className="text-sm font-medium font-sans text-gray-500 dark:text-gray-400 mb-6 text-center">{item.name.split(':')[1] || "Connect with us"}</p>
                            <span className={`mt-auto inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-colors ${item.bgColor} dark:bg-gray-700 ${item.color}`}>
                                {item.buttonText}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
