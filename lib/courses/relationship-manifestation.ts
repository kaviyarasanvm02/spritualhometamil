import { Course } from "./types";

export const relationshipManifestation: Course = {
    slug: "relationship-manifestation",
    type: 'paid',
    category: 'standard',
    title: {
        en: "Relationship Manifestation",
        ta: "உறவு ஈர்ப்பு"
    },
    dbTitleMatch: "Relationship Manifestation",
    thumbnail: "/assets/loa-programm.png",
    pricing: [
        { duration: "Monthly", durationTa: "மாதாந்திரம்", price: 299, period: 'monthly' },
        { duration: "6 Months", durationTa: "6 மாதங்கள்", price: 599, period: '6_months' },
        { duration: "1 Year", durationTa: "1 வருடம்", price: 999, period: '1_year' },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 1499, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "Introduction of Relationship",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. Introduction of Relationship (It's just a part) Intention from Positive" },
                { title: "2. Vibration Match (Remove Negative Believes)" },
                { title: "3. Write Clear Intention and Read Morning and Night" },
                { title: "4. Do Daily Practice Whatever It Happens" }
            ],
            description: "Do I really want? How much for 10/10? I do anything for this relationship? 22 to 66 days? Don't chase just be happy.",
            sections: [
                {
                    title: "Practice Morning and Evening",
                    content: [
                        "22 to 66 days (Below Age 30)",
                        "22 to 132 days (Above Age 30)",
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
                { title: "1. உறவுமுறை பற்றிய அறிமுகம்: இது வாழ்க்கையின் ஒரு பகுதி மட்டுமே. நேர்மறையான நோக்கத்துடன் அணுகுதல்." },
                { title: "2. அதிர்வலை பொருத்தம் (Vibration Match): எதிர்மறையான நம்பிக்கைகளை நீக்குதல்." },
                { title: "3. எழுதுதல் (Write): உங்கள் நோக்கத்தைத் தெளிவாக எழுதுங்கள்; அதை காலையிலும் இரவிலும் படியுங்கள்." },
                { title: "4. செயல்முறை (Do): சூழல் எப்படி இருந்தாலும், தினசரி பயிற்சியை செய்யுங்கள்." }
            ],
            description: "• எனக்கு இது உண்மையில் வேண்டுமா? 10-க்கு எவ்வளவு முக்கியத்துவம் கொடுப்பேன்?\n• இந்த உறவுக்காக நான் எதையும் செய்யத் தயாரா?\n• 22 முதல் 66 நாட்கள் வரை செய்ய முடியுமா?\n• தேடி ஓடாதீர்கள், மகிழ்ச்சியாக இருங்கள். \"இதை நான் செய்வேனா?\" என்று உறுதியெடுங்கள்.\n• என்னால் செய்ய முடியும் என்றால் மட்டுமே தொடரவும்.",
            sections: [
                {
                    title: "காலை மற்றும் மாலை நேரப் பயிற்சி",
                    content: [
                        "• 22 முதல் 66 நாட்கள் (30 வயதிற்குட்பட்டவர்கள்)",
                        "• 22 முதல் 132 நாட்கள் (30 வயதிற்கு மேற்பட்டவர்கள்)",
                        "1. வழிகாட்டப்பட்ட காட்சிப்படுத்தல் (Guided Visualization)",
                        "2. வழிகாட்டப்பட்ட சுய உறுதிமொழிகள் (Guided Affirmation) - தமிழ் மற்றும் ஆங்கிலத்தில்",
                        "3. ஆழ்மனதிற்கான இசை (Subliminal Music)",
                        "4. வழிகாட்டப்பட்ட நன்றியுணர்வுப் பயிற்சி (Guided Gratitude)"
                    ]
                }
            ]
        }
    }
};
