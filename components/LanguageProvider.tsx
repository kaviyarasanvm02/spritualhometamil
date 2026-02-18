"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { content, Content } from '@/lib/content';

type Language = 'en' | 'ta';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        // Load persisted language preference
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'ta')) {
            setLanguage(savedLang);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: content[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
