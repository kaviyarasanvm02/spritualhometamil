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
        { duration: "Monthly", durationTa: "மாதாந்திரம்", price: 299, period: 'monthly' },
        { duration: "6 Months", durationTa: "6 மாதங்கள்", price: 599, period: '6_months' },
        { duration: "1 Year", durationTa: "1 வருடம்", price: 999, period: '1_year' },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 1499, period: 'lifetime' },
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
            description: "Do I really want? How much for 10/10? I do anything for this job? 22 to 66 days? Don't chase just do process.",
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
            description: "முக்கியக் கேள்விகள் மற்றும் வழிமுறைகள்:\n• எனக்கு இது உண்மையிலேயே வேண்டுமா?: 10-க்கு எத்தனை மதிப்பெண் கொடுப்பீர்கள்? (உறுதித்தன்மையைச் சோதிக்க).\n• இந்த வேலைக்காக நான் எதையும் செய்யத் தயாரா?\n• பயிற்சி காலம்: 22 முதல் 66 நாட்கள் வரை தொடர்ந்து செய்யவும்.\n• தேடி அலைய வேண்டாம், பயிற்சியில் கவனம் செலுத்துங்கள்: வேலையைத் துரத்த வேண்டாம்; ஈர்ப்பு செயல்முறையைச் சரியாகச் செய்யுங்கள்.\n• முழு ஈடுபாடு இருந்தால் மட்டுமே தொடரவும்.",
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
    }
};
