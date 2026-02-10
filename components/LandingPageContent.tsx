"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
// import EbookSection from "@/components/EbookSection";
import FreeResourcesSection from "@/components/FreeResourcesSection";
import FreeCoursesSection from "@/components/FreeCoursesSection";
import PaidCoursesSection from "@/components/PaidCoursesSection";
import CourseTabs from "@/components/CourseTabs";
import PricingCard from "@/components/PricingCard";
import PaymentSection from "@/components/PaymentSection";
import VideoPreview from "@/components/VideoPreview";
// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; // Navbar also needs to be inside the provider context to see the toggle

export default function LandingPageContent({ videos }: { videos: any[] }) {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Note: Navbar was in layout.tsx. We need to decide if LanguageProvider wraps layout or just page. 
           If it wraps page, Navbar in layout won't see the context. 
           Wait, user wants bilingual support. Navbar needs to change lang.
           So Navbar logic must be aware of context. 
           FIX: We should move Navbar inside this component structure or move Provider to layout.tsx.
           For now, let's keep Navbar in layout but we might need to move Provider to layout.tsx for it to work globally.
           
           Actually, the best approach is moving LanguageProvider to app/layout.tsx.
        */}
            <Hero />
            <AboutSection />
            {/* <EbookSection /> removed as per request, merged into FreeResourcesSection */}
            <FreeResourcesSection />
            <FreeCoursesSection />
            <PaidCoursesSection />
            <VideoPreview />
            {/* <CourseTabs videos={videos} /> */}
            <PricingCard />
            <PaymentSection />
            {/* Footer moved to layout */}
        </main>
    );
}
