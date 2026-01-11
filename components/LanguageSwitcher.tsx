"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1" role="group">
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${language === 'en'
                    ? 'bg-white text-amber-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                    }`}
            >
                English
            </button>
            <button
                onClick={() => setLanguage('ta')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${language === 'ta'
                    ? 'bg-white text-amber-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                    }`}
            >
                தமிழ்
            </button>
        </div>
    );
}
