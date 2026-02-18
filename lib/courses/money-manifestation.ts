import { Course } from "./types";

export const moneyManifestation: Course = {
    slug: "money-manifestation",
    type: 'paid',
    category: 'standard',
    title: {
        en: "Money Manifestation",
        ta: "பணம் ஈர்ப்பு"
    },
    dbTitleMatch: "Money Manifestation",
    thumbnail: "/assets/money-manifestationn.png",
    pricing: [
        { duration: "Monthly", durationTa: "மாதாந்திரம்", price: 299, period: 'monthly' },
        { duration: "6 Months", durationTa: "6 மாதங்கள்", price: 599, period: '6_months' },
        { duration: "1 Year", durationTa: "1 வருடம்", price: 999, period: '1_year' },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 1499, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "Introduction Money",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. Introduction Money (It's just a buy product) Intention from Positive" },
                { title: "2. Vibration Match (Remove Negative Believes)" },
                { title: "3. Write Clear Intention and Read Morning and Night" },
                { title: "4. Do Daily Practice Whatever It Happens", duration: "Important" }
            ],
            description: "What I am going to give? Its service or money motive? 22 to 66 days? Send happily. Money is Neutral.",
            sections: [
                {
                    title: "Daily Practice Guided Music",
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
            introTitle: "அறிமுக வீடியோ (Intro Video)",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. அறிமுகம்: பணம் பணம் என்பது (ஒரு சேவையின்) துணை விளைவு மட்டுமே. நேர்மறையான நோக்கத்துடன் அணுகுதல்." },
                { title: "2. அதிர்வலை பொருத்தம் (Vibration Match) எதிர்மறையான நம்பிக்கைகளை நீக்குதல்." },
                { title: "3. எழுதுதல் (Write) உங்கள் நோக்கத்தைத் தெளிவாக எழுதுங்கள்; அதை காலையிலும் இரவிலும் படியுங்கள்." },
                { title: "4. செயல்முறை (Do) சூழல் எப்படி இருந்தாலும், தினசரி பயிற்சியை செய்யுங்கள்." }
            ],
            description: "• நான் என்ன கொடுக்கப் போகிறேன்?\n• இது சேவையா அல்லது பண நோக்கமா?\n• 22 முதல் 66 நாட்கள் வரை தொடர வேண்டுமா?\n• மகிழ்ச்சியுடன் கொடுங்கள்/செலவிடுங்கள்.\n• பணம் ஒரு நடுநிலையானது (Money is Neutral).",
            sections: [
                {
                    title: "தினசரி பயிற்சிக்கான இசை (Daily practice guided music)",
                    content: [
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
