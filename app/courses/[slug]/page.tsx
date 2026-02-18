import { courses } from "@/lib/courses.data";
import { Metadata } from "next";
import CourseClient from "./CourseClient";
import NotFound from "@/components/NotFound";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        return {
            title: "Course Not Found",
        };
    }

    return {
        title: `${course.title.en} - Spiritual Home Tamil`,
        description: course.content.en.description || "Join our transformative spiritual courses.",
        openGraph: {
            title: course.title.en,
            description: course.content.en.description || "Join our transformative spiritual courses.",
            images: [
                {
                    url: course.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: course.title.en,
                },
            ],
            type: "website",
        },
        alternates: {
            canonical: `https://www.spritualhometamil.com/courses/${slug}`,
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        return <NotFound />;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title.en,
        "description": course.content.en.description || `Join the ${course.title.en} course at Spiritual Home Tamil.`,
        "provider": {
            "@type": "Organization",
            "name": "Spiritual Home Tamil",
            "sameAs": "https://www.spritualhometamil.com"
        },
        "offers": course.pricing?.map(p => ({
            "@type": "Offer",
            "category": "Paid",
            "priceCurrency": "INR",
            "price": p.price,
            "description": `${p.duration} Access`
        })) || [
                {
                    "@type": "Offer",
                    "category": "Free",
                    "price": "0",
                    "priceCurrency": "INR"
                }
            ],
        "inLanguage": ["en", "ta"],
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "Self-paced"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CourseClient course={course} />
        </>
    );
}
