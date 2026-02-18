"use client";

import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Loader2, ArrowRight } from "lucide-react";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || t.auth.error);
            }

            login(data.user);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/spiritual-bg.png"
                    alt="Spiritual Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-gray-900/95 via-gray-900/80 to-purple-900/40" />
            </div>

            <div className="max-w-md w-full space-y-8 relative z-10 p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white tracking-tight">
                        {t.auth.register}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        {t.auth.haveAccount}{" "}
                        <Link href="/login" className="font-medium text-amber-500 hover:text-amber-400 transition-colors">
                            {t.auth.linkLogin}
                        </Link>
                    </p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-sm text-red-400 text-center animate-shake">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative group">
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-xl leading-5 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent sm:text-sm transition-all duration-200"
                                placeholder={t.auth.name}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative group">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                            </div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-xl leading-5 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent sm:text-sm transition-all duration-200"
                                placeholder={t.auth.email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative group">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-xl leading-5 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent sm:text-sm transition-all duration-200"
                                placeholder={t.auth.password}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                            ) : (
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <ArrowRight className="h-5 w-5 text-amber-200 group-hover:text-white transition-colors" />
                                </span>
                            )}
                            {isSubmitting ? t.auth.processing : t.auth.submitRegister}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
