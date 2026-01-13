"use client";

import { useLanguage } from "./LanguageProvider";
import { BookOpen, Download } from "lucide-react";

export default function EbookSection() {
    const { t } = useLanguage();

    const ebooks = [
        {
            title: t.ebook.tamilTitle,
            description: t.ebook.tamilDesc,
            file: "/FREE E BOOK ENGLISH TAMIL.pdf",
            color: "text-amber-600",
            bgColor: "bg-amber-50",
            buttonColor: "bg-amber-600 hover:bg-amber-700",
        },
        {
            title: t.ebook.englishTitle,
            description: t.ebook.englishDesc,
            file: "/FREE E BOOK ENGLISH OK.pdf",
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
        },
    ];

    return (
        <section id="ebooks" className="relative py-20 sm:py-28 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {t.ebook.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {t.ebook.subtitle}
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {ebooks.map((ebook) => (
                        <div
                            key={ebook.title}
                            className="flex flex-col items-start p-8 bg-white rounded-3xl shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className={`p-4 rounded-2xl ${ebook.bgColor} mb-6`}>
                                <BookOpen className={`h-8 w-8 ${ebook.color}`} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {ebook.title}
                            </h3>

                            <p className="text-gray-600 mb-8 flex-grow">
                                {ebook.description}
                            </p>

                            <a
                                href={ebook.file}
                                download
                                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-colors ${ebook.buttonColor}`}
                            >
                                <Download className="w-5 h-5" />
                                {t.ebook.download}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
