import { Course } from "./types";

export const thirtyDaysLoa: Course = {
    slug: "30-days-loa",
    type: 'paid', // Premium
    category: 'premium',
    title: {
        en: "30-Day Transformation Program",
        ta: "30 நாட்கள் முழு ஈர்ப்பு விதி பயிற்சி"
    },
    dbTitleMatch: "30-Day Transformation Program",
    thumbnail: "/assets/loa-program.png",
    pricing: [
        { duration: "1 Month Access", durationTa: "1 மாத அணுகல்", price: 1499, period: 'monthly' },
        { duration: "6 Months Access", durationTa: "6 மாதங்கள் அணுகல்", price: 4499, period: '6_months' },
        { duration: "1 Year Access", durationTa: "1 வருட அணுகல்", price: 8999, period: '1_year', label: "Best Value" },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 12999, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "Introduction",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [], // Episodes are described as weekly blocks, simplifying for now
            sections: [
                {
                    title: "1st Week: Foundation",
                    content: [
                        "1. Understanding our subconscious mind & set clear intention",
                        "2. Subconscious 50% consciousness 50%",
                        "3. Subconscious will not allow you",
                        "4. Intention writing (it's already happened)",
                        "5. Understanding consciousness (breaking negative pattern)",
                        "6. Understanding energy (everything is vibration)",
                        "7. Identify negative belief & self-analyse (write thoughts)"
                    ]
                },
                {
                    title: "2nd Week: Deepening",
                    content: [
                        "8. Karma and how to reduce",
                        "9. Super conscious mind",
                        "10. Inner world and outer world all mind are connected",
                        "11. Alignment of all inner world",
                        "12. Everything is energy vibration frequency",
                        "13. Astrology vs law of attraction",
                        "14. Rewrite negative thoughts"
                    ]
                },
                {
                    title: "3rd Week: Quantum Field",
                    content: [
                        "15. Quantum field intro human – (thoughts- empty field- matter)",
                        "16. Energy going out. Get back",
                        "17. Sub-atomic particle - electron",
                        "18. Past & future; present",
                        "19. Overcome environment, body & time",
                        "20. Brain and heart connection and gratitude health",
                        "21. Train your body the emotion being"
                    ]
                },
                {
                    title: "4th Week: Transformation",
                    content: [
                        "22. 5 sense practice for consciousness 11 min rule",
                        "23. Switch the sense with consciousness & memory",
                        "24. Use gratitude, affirmations and self-love for present (decide)",
                        "25. Future letter everything is connected",
                        "26. Beyond organization everything happens for reason",
                        "27. Don’t focus on outer world",
                        "28. Breathing practice",
                        "29. 7 yoga pose 12 min(daily) or 20 min (weekly 3 times)",
                        "30. Welcome to spiritual awakening… it’s just a beginning"
                    ]
                }
            ]
        },
        ta: {
            introTitle: "30 நாட்கள் முழு ஈர்ப்பு விதி பயிற்சி",
            episodes: [],
            sections: [
                {
                    title: "முதல் வாரம்",
                    content: [
                        "1. நமது ஆள்மனதைப் புரிந்துகொள்வது மற்றும் தெளிவான நோக்கத்தை அமைத்தல்",
                        "2. ஆள்மனம் 50%, விழிப்புணர்வு 50%",
                        "3. உங்கள் ஆள்மனம் உங்களை அனுமதிக்காது",
                        "4. நோக்கத்தை எழுதுதல் (அது ஏற்கனவே நடந்துவிட்டது என்ற உணர்வுடன்)",
                        "5. விழிப்புணர்வைப் புரிந்துகொள்ளுதல் (எதிர்மறைப் பழக்கங்களை உடைத்தல்)",
                        "6. ஆற்றலைப் புரிந்துகொள்ளுதல் (அனைத்தும் அதிர்வுகளே)",
                        "7. எதிர்மறை நம்பிக்கைகளை அடையாளம் காணுதல் மற்றும் சுய ஆய்வு (எண்ணங்களை எழுதுதல்)"
                    ]
                },
                {
                    title: "இரண்டாம் வாரம்",
                    content: [
                        "8. கர்மா மற்றும் அதைக் குறைக்கும் வழிமுறைகள்",
                        "9. மேல்நிலை விழிப்புணர்வு மனம்",
                        "10. உள் உலகம் மற்றும் வெளி உலகம் - அனைத்து மனங்களும் இணைக்கப்பட்டுள்ளன",
                        "11. உள் உலகத்தை ஒருமுகப்படுத்துதல்",
                        "12. அனைத்தும் ஆற்றல், அதிர்வு மற்றும் அலைவரிசை",
                        "13. ஜோதிடம் மற்றும் ஈர்ப்பு விதி",
                        "14. எதிர்மறை எண்ணங்களை மாற்றி எழுதுதல்"
                    ]
                },
                {
                    title: "மூன்றாம் வாரம்",
                    content: [
                        "15. குவாண்டம் களம் அறிமுகம் (எண்ணங்கள் - வெற்று வெளி - பருப்பொருள்)",
                        "16. வெளியே செல்லும் ஆற்றல் மீண்டும் உங்களுக்கே திரும்பும்",
                        "17. அணுவின் உட்பொருட்கள் - எலக்ட்ரான்",
                        "18. கடந்த காலம் மற்றும் எதிர்காலம்; நிகழ்காலம்",
                        "19. சூழ்நிலை, உடல் மற்றும் நேரத்தைக் கடந்து செல்லுதல்",
                        "20. மூளை மற்றும் இதயத்தின் இணைப்பு; நன்றியுணர்வு மற்றும் ஆரோக்கியம்",
                        "21. உங்கள் உடலுக்கு உணர்ச்சிகரமான நிலையைப் பழக்குதல்"
                    ]
                },
                {
                    title: "நான்காம் வாரம்",
                    content: [
                        "22. விழிப்புணர்விற்கான ஐந்து புலன் பயிற்சி - 11 நிமிட விதி",
                        "23. புலன்களை விழிப்புணர்வு மற்றும் நினைவாற்றலோடு மாற்றுதல்",
                        "24. நிகழ்காலத்திற்காக நன்றியுணர்வு, உறுதிமொழிகள் மற்றும் சுய அன்பைப் பயன்படுத்துதல்",
                        "25. எதிர்காலத்திற்கான கடிதம் - அனைத்தும் ஒன்றோடொன்று பிணைக்கப்பட்டுள்ளன",
                        "26. ஒரு ஒழுங்குமுறைக்கு அப்பாற்பட்டு, அனைத்தும் ஒரு காரணத்திற்காகவே நடக்கின்றன",
                        "27. வெளி உலகத்தின் மீது கவனம் செலுத்த வேண்டாம்",
                        "28. சுவாசப் பயிற்சி",
                        "29. 7 யோகாசனங்கள் - 12 நிமிடங்கள் (தினமும்) அல்லது 20 நிமிடங்கள் (வாரத்திற்கு 3 முறை)",
                        "30. ஆன்மீக விழிப்புணர்வுக்கு நல்வரவு... இது ஒரு ஆரம்பம் மட்டுமே"
                    ]
                }
            ]
        }
    }
};
