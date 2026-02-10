"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    name: string;
    email: string;
    role: "USER" | "ADMIN";
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (userData: User, callbackUrl?: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: () => { },
    logout: () => { },
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            try {
                // In a real app, verify the token via an API call '/api/auth/me'
                // For now, we can rely on what we store in localStorage if we want speed,
                // but Cookies are HTTPOnly. So we MUST hit an API.
                // Let's implement /api/auth/me later usually.
                // For this MVP, I'll rely on the Login response setting state.
                // But on refresh, we lose state.
                // I'll add a simple check.
                const res = await fetch("/api/auth/me");
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                }
            } catch (error) {
                console.error("Auth check failed", error);
            } finally {
                setLoading(false);
            }
        }
        checkAuth();
    }, []);

    const login = (userData: User, callbackUrl?: string) => {
        setUser(userData);
        router.push(callbackUrl || (userData.role === "ADMIN" ? "/admin/dashboard" : "/videos"));
    };

    const logout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        setUser(null);
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
