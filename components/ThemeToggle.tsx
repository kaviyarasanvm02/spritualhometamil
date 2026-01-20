"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            className={`relative p-2 rounded-full transition-colors duration-300 focus:outline-none ${theme === "dark"
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-amber-100 text-amber-600 hover:bg-amber-200"
                }`}
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${theme === "dark" ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"}`} />
                <Moon className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${theme === "dark" ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"}`} />
            </div>
        </button>
    );
}
