import type { Config } from "tailwindcss";
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ["var(--font-lato)", "var(--font-noto-sans-tamil)", "sans-serif"],
                serif: ["var(--font-playfair)", "var(--font-noto-serif-tamil)", "serif"],
            },
        },
    },
    plugins: [
        aspectRatio,
    ],
};
export default config;
