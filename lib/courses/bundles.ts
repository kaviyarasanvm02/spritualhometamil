import { Course } from "./types";

export const all5CoursesCombo: Course = {
    slug: "all-5-courses-combo",
    type: 'paid',
    category: 'standard',
    title: {
        en: "ALL 5 COURSES COMBO ACCESS",
        ta: "அனைத்து 5 பயிற்சிகளும்"
    },
    thumbnail: "/assets/miracle.png", // Temporary placeholder
    pricing: [
        { duration: "Monthly", durationTa: "மாதாந்திரம்", price: 999, period: 'monthly' },
        { duration: "6 Months", durationTa: "6 மாதங்கள்", price: 1999, period: '6_months' },
        { duration: "1 Year", durationTa: "1 வருடம்", price: 2999, period: '1_year', label: "Most Popular" },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 4999, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "All 5 Standard Courses",
            episodes: [],
            description: "Get access to all 5 standard manifestation courses: Money, Relationship, Job, Health, and Passion.",
            sections: []
        },
        ta: { introTitle: "Intro", episodes: [], sections: [] }
    }
};

export const transformationSpiritualCombo: Course = {
    slug: "transformation-spiritual-combo",
    type: 'paid',
    category: 'premium',
    title: {
        en: "COMBO COURSE – ONE PURCHASE",
        ta: "காம்போ பயிற்சி (30 நாட்கள் + ஆன்மீகம்)"
    },
    thumbnail: "/assets/30-days-guide.png", // Temporary placeholder
    pricing: [
        { duration: "1 Month Access", durationTa: "1 மாத அணுகல்", price: 1999, period: 'monthly' },
        { duration: "6 Months Access", durationTa: "6 மாதங்கள் அணுகல்", price: 5999, period: '6_months' },
        { duration: "1 Year Access", durationTa: "1 வருட அணுகல்", price: 10999, period: '1_year', label: "Most Popular" },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 14999, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "30-Day Transformation + Spiritual Awakening",
            episodes: [],
            description: "Access both the 30-Day Transformation Program and the Spiritual Awakening Course.",
            sections: []
        },
        ta: { introTitle: "Intro", episodes: [], sections: [] }
    }
};
