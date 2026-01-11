"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "./LanguageProvider";

export default function ContactForm() {
    const { t } = useLanguage();
    const { contactPage } = t;
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Error sending message:', error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-2xl font-bold text-white mb-8 relative z-10">{contactPage.title}</h2>

            {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-20">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                        <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{contactPage.successTitle}</h3>
                    <p className="text-gray-400">{contactPage.successDesc}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{contactPage.form.name}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                placeholder={contactPage.form.namePlaceholder}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{contactPage.form.email}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                placeholder={contactPage.form.emailPlaceholder}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">{contactPage.form.subject}</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            placeholder={contactPage.form.subjectPlaceholder}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">{contactPage.form.message}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                            placeholder={contactPage.form.messagePlaceholder}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 rounded-xl hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg shadow-amber-900/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <Send className="w-5 h-5" />
                        )}
                        {isSubmitting ? contactPage.form.sending : contactPage.form.sendButton}
                    </button>
                </form>
            )}
        </div>
    );
}
