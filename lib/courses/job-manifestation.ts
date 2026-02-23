import { Course } from "./types";

export const jobManifestation: Course = {
    slug: "job-manifestation",
    type: 'paid',
    category: 'standard',
    title: {
        en: "Job Manifestation",
        ta: "வேலை ஈர்ப்பு"
    },
    dbTitleMatch: "Job Manifestation",
    thumbnail: "/assets/job-manifestationn.png",
    pricing: [
        { duration: "1 Month Access", durationTa: "1 மாத அணுகல்", price: 299, period: 'monthly' },
        { duration: "3 Months Access", durationTa: "3 மாதங்கள் அணுகல்", price: 599, period: '3_months' },
        { duration: "6 Months Access", durationTa: "6 மாதங்கள் அணுகல்", price: 999, period: '6_months', label: "Best Value" },
    ],
    content: {
        en: {
            introTitle: "Introduction of Job",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. Introduction of Job (It's just a part) Intention from Positive" },
                { title: "2. Vibration Match (Remove Negative Believes)" },
                { title: "3. Write Clear Intention and Read Morning and Night" },
                { title: "4. Do Daily Practice Whatever It Happens" }
            ],
            description: "If you want to attract or improve your job or business, you need to clear your mind and body. You must also feel truly worthy of the job or business you desire. Here, you will learn how to do this in a practical and effective way.",
            sections: [
                {
                    title: "Guided Content",
                    content: [
                        "1. Guided Visualization",
                        "2. Guided Affirmation Tamil and English",
                        "3. Subliminal Music",
                        "4. Guided Gratitude"
                    ]
                }
            ]
        },
        ta: {
            introTitle: "அறிமுகம் (Intro)",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. வேலை பற்றிய அறிமுகம்: வேலை என்பது வாழ்க்கையின் ஒரு பகுதி மட்டுமே. நேர்மறையான நோக்கத்துடன் அணுகுதல்." },
                { title: "2. அதிர்வலை பொருத்தம் (Vibration Match): எதிர்மறை எண்ணங்களை நீக்கி, உங்கள் லட்சியத்தோடு உங்கள் மனநிலையைப் பொருத்துங்கள்." },
                { title: "3. தெளிவான நோக்கத்தை எழுதுதல்: உங்கள் இலக்கைத் தெளிவாக எழுதி, அதைத் தினமும் காலையிலும் இரவிலும் வாசிக்கவும்." },
                { title: "4. தினசரி பயிற்சி: என்ன நடந்தாலும் சரி, பயிற்சியைத் தொடர்ந்து செய்யவும்." }
            ],
            description: "நீங்கள் விரும்பும் வேலை அல்லது வியாபாரத்தை ஈர்க்கவோ அல்லது மேம்படுத்தவோ நினைத்தால், முதலில் உங்கள் மனமும் உடலும் தெளிவாக இருக்க வேண்டும். அதற்குத் தகுதியானவர் என்ற உணர்வையும் உங்கள் உள்ளத்தில் வளர்த்துக் கொள்ள வேண்டும். இதை நடைமுறையில் எப்படி செய்ய வேண்டும் என்பதை இங்கு நீங்கள் கற்றுக்கொள்வீர்கள்.",
            sections: [
                {
                    title: "வழிகாட்டப்பட்ட பயிற்சிகள் (Guided Practices)",
                    content: [
                        "1. வழிகாட்டப்பட்டக் காட்சிப்படுத்துதல் (Guided Visualization): உங்கள் இலக்கை அடைந்தது போல மனதால் கற்பனை செய்தல்.",
                        "2. தமிழ் மற்றும் ஆங்கிலத்தில் உறுதிமொழிகள் (Guided Affirmation): நேர்மறையான எண்ணங்களை உரக்கச் சொல்லுதல்.",
                        "3. ஆழ்மன இசை (Subliminal Music): ஆழ்மனதைச் சீரமைக்கும் மெல்லிசை.",
                        "4. வழிகாட்டப்பட்ட நன்றியுணர்வு (Guided Gratitude): இருப்பதற்கு நன்றி கூறுதல்."
                    ]
                }
            ]
        }
    },
    reviews: [
        { type: 'voice', src: '/reviews/job-manifestation/person 1.mp3', title: 'Student Success Story 1' },
        { type: 'voice', src: '/reviews/job-manifestation/person 2.mp3', title: 'Student Success Story 2' }
    ]
};
