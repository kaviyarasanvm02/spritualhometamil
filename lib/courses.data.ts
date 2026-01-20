export interface Episode {
    title: string;
    duration?: string;
    videoUrl?: string;
    description?: string;
}

export interface CourseContent {
    introVideo?: string;
    introTitle?: string;
    episodes: Episode[];
    bodyText?: string;
    description?: string;
    features?: string[];
    sections?: {
        title: string;
        content: string[];
    }[];
}

export interface Course {
    slug: string;
    type: 'free' | 'paid';
    title: {
        en: string;
        ta: string;
    };
    thumbnail: string;
    thumbnailKey?: string; // For matching existing assets
    content: {
        en: CourseContent;
        ta: CourseContent;
    };
}

export const courses: Course[] = [
    // FREE COURSES
    {
        slug: "free-course-1",
        type: 'free',
        title: {
            en: "The Miracle Entering Into Your Life",
            ta: "உங்கள் வாழ்க்கையில் அதிசயம் நுழைகிறது"
        },
        thumbnail: "/assets/miracle.png",
        content: {
            en: {
                introTitle: "Introduction Video",
                introVideo: "https://www.youtube.com/embed/VprI0mKWg2I?si=vdXOy4uifA5Jvdlu",
                episodes: [
                    {
                        title: "1. Everything is Possible",
                        duration: "30 Min",
                        videoUrl: "https://www.youtube.com/embed/TCxBv9G4n5c?si=gQ6dIVp9oMxW9Nr2",
                        description: "Understand the limitless possibilities of your life."
                    },
                    {
                        title: "2. Nature Laws",
                        duration: "30 Min",
                        videoUrl: "https://www.youtube.com/embed/dYmvx330DQc?si=Er1qpdzqv93cH8vW",
                        description: "Learn how the laws of nature govern manifestation."
                    },
                    {
                        title: "3. Secret Key of Universe",
                        duration: "30 Min",
                        videoUrl: "https://www.youtube.com/embed/ORIviMb9Am4?si=NymAzh8LdzmJbPPK",
                        description: "Unlock the secret key to aligning with the universe."
                    }
                ],
                sections: [
                    {
                        title: "🌿 A Deeper Awareness Begins",
                        content: [
                            "If you have completed Free Course 1, you now understand what the Law of Attraction is and what is truly possible in your life.",
                            "These 3 videos are not meant to change everything instantly. They are meant to open your awareness.",
                            "Once awareness opens, something happens. You may start noticing:",
                            "• Old patterns repeating",
                            "• Emotional blocks surfacing",
                            "• Desire for clarity, not just information",
                            "This is not confusion. This is growth beginning."
                        ]
                    },
                    {
                        title: "🌌 Awareness Is the First Door — Practice Is the Next",
                        content: [
                            "Knowing the Law of Attraction is powerful. But knowing alone does not create transformation.",
                            "Transformation happens through:",
                            "• Daily alignment",
                            "• Correct practice",
                            "• Inner consistency",
                            "• Conscious awareness",
                            "That is why practice-based guidance exists.",
                            "If after Free Course 1 you feel:",
                            "• “I want to apply this properly”",
                            "• “I don’t want to do this wrongly”",
                            "• “I feel ready to change something real”",
                            "Then this is not the mind asking. It is the soul responding to the universe’s call."
                        ]
                    },
                    {
                        title: "🌱 What Comes Next (If You Feel Ready)",
                        content: [
                            "To support those who feel this inner pull, structured guidance is available.",
                            "**🌿 Standard Program: Step-by-Step Manifestation with Inner Alignment**",
                            "For those who want to apply the Law of Attraction correctly and practically.",
                            "Focus includes: Money, Love and relationships, Job and career direction, Step-by-step manifestation process, Passion discovery & spiritual awakening.",
                            "Guided support through: Audio affirmations, Visualization practices, Subliminal audios.",
                            "This is for those who want real-life change with clear structure.",
                            "**🔥 Premium Program: Deep Conscious Transformation**",
                            "For those who feel a stronger inner call.",
                            "Includes: 30 days recorded full Law of Attraction program, 21 days consciousness & awareness training.",
                            "This program goes beyond desires and focuses on changing the inner state that creates life."
                        ]
                    },
                    {
                        title: "✨ Choose Only If It Resonates",
                        content: [
                            "There is no urgency. There is no pressure. When you are ready, the right guidance appears naturally."
                        ]
                    }
                ]
            },
            ta: {
                introTitle: "அறிமுக வீடியோ",
                introVideo: "https://www.youtube.com/embed/VprI0mKWg2I?si=vdXOy4uifA5Jvdlu",
                episodes: [
                    {
                        title: "1. அனைத்தும் சாத்தியமே",
                        duration: "30 நிமிடங்கள்",
                        videoUrl: "https://www.youtube.com/embed/TCxBv9G4n5c?si=gQ6dIVp9oMxW9Nr2"
                    },
                    {
                        title: "2. இயற்கையின் விதிகள்",
                        duration: "30 நிமிடங்கள்",
                        videoUrl: "https://www.youtube.com/embed/dYmvx330DQc?si=Er1qpdzqv93cH8vW"
                    },
                    {
                        title: "3. பிரபஞ்சத்தின் ரகசிய சாவி",
                        duration: "30 நிமிடங்கள்",
                        videoUrl: "https://www.youtube.com/embed/ORIviMb9Am4?si=NymAzh8LdzmJbPPK"
                    }
                ],
                sections: [
                    {
                        title: "🌿 ஒரு ஆழமான விழிப்புணர்வு தொடங்குகிறது",
                        content: [
                            "நீங்கள் இலவசப் பயிற்சி 1-ஐ (Free Course 1) முடித்திருந்தால், இப்போது ஈர்ப்பு விதி (Law of Attraction) என்றால் என்ன என்பதையும், உங்கள் வாழ்வில் உண்மையில் என்ன சாத்தியம் என்பதையும் புரிந்து கொண்டிருப்பீர்கள்.",
                            "அந்த 3 வீடியோக்களும் உங்கள் வாழ்க்கையை உடனடியாக மாற்றுவதற்காக அல்ல. அவை உங்கள் விழிப்புணர்வைத் திறப்பதற்காக உருவாக்கப்பட்டவை.",
                            "விழிப்புணர்வு திறந்தவுடன், ஒரு மாற்றம் நிகழத் தொடங்குகிறது. நீங்கள் இவற்றைக் கவனிக்கத் தொடங்கலாம்:",
                            "• பழைய வாழ்க்கை முறைகள் மீண்டும் திரும்புவது போல் தோன்றுதல்",
                            "• உணர்ச்சி ரீதியான தடைகள் (Emotional blocks) வெளிப்படுதல்",
                            "• வெறும் தகவல்களைத் தாண்டி, தெளிவுக்கான ஆசை உண்டாகுதல்",
                            "இது குழப்பம் அல்ல. இது வளர்ச்சியின் ஆரம்பம்."
                        ]
                    },
                    {
                        title: "🌌 விழிப்புணர்வு முதல் வாசல் — பயிற்சி அடுத்த படி",
                        content: [
                            "ஈர்ப்பு விதியைத் தெரிந்து வைத்திருப்பது சக்திவாய்ந்தது. ஆனால், தெரிந்து கொள்வது மட்டுமே மாற்றத்தை ஏற்படுத்தாது.",
                            "மாற்றம் என்பது இவற்றின் மூலமே நிகழ்கிறது:",
                            "• தினசரி இணக்கம் (Alignment)",
                            "• சரியான பயிற்சி",
                            "• உள் நிலைத்தன்மை (Consistency)",
                            "• விழிப்புணர்வுடன் கூடிய செயல்",
                            "அதனால்தான் பயிற்சி அடிப்படையிலான வழிகாட்டுதல் உள்ளது.",
                            "இலவசப் பயிற்சி 1-க்குப் பிறகு நீங்கள் இப்படி உணர்ந்தால்:",
                            "• “இதை நான் முறையாகப் பயன்படுத்த விரும்புகிறேன்”",
                            "• “இதைத் தவறாகச் செய்ய நான் விரும்பவில்லை”",
                            "• “உண்மையான மாற்றத்தை உருவாக்க நான் தயாராக உணர்கிறேன்”",
                            "அப்போது, இது மனம் கேட்கும் கேள்வியல்ல. இது பிரபஞ்சத்தின் அழைப்பிற்கு உங்கள் ஆன்மா அளிக்கும் பதில்."
                        ]
                    },
                    {
                        title: "🌱 அடுத்து என்ன? (நீங்கள் தயாராக உணர்ந்தால்)",
                        content: [
                            "இந்த உள்ளுணர்வை உணர்பவர்களுக்கு ஆதரவளிக்க, முறையான வழிகாட்டுதல்கள் உள்ளன.",
                            "**🌿 நிலையான திட்டம் (Standard Program)**",
                            "உள் இணக்கத்துடன் கூடிய படிநிலை மேனிஃபெஸ்டேஷன்",
                            "ஈர்ப்பு விதியை சரியாகவும், நடைமுறைக்கு ஏற்றவாறும் பயன்படுத்த விரும்புவோருக்காக இது வடிவமைக்கப்பட்டுள்ளது.",
                            "கவனிக்கப்படும் பகுதிகள்:",
                            "• பணம் மற்றும் செல்வம்",
                            "• காதல் மற்றும் உறவுகள்",
                            "• வேலை மற்றும் தொழில் திசை",
                            "• படிப்படியான ஈர்ப்பு விதி செயல்முறை",
                            "• ஆர்வத்தைக் கண்டறிதல் & ஆன்மீக விழிப்புணர்வு",
                            "வழிகாட்டப்பட்ட ஆதரவு:",
                            "• ஆடியோ உறுதிமொழிகள் (Audio Affirmations)",
                            "• காட்சிப்படுத்தும் பயிற்சிகள் (Visualization)",
                            "• ஆழ்மனதிற்கான சப்லிமினல் ஆடியோக்கள் (Subliminal Audios)",
                            "தெளிவான கட்டமைப்புடன் உண்மையான வாழ்க்கை மாற்றத்தை விரும்புவோருக்கு இது ஏற்றது.",
                            "**🔥 பிரீமியம் திட்டம் (Premium Program)**",
                            "ஆழ்ந்த விழிப்புணர்வு மாற்றம் (Deep Conscious Transformation)",
                            "வலுவான உள் அழைப்பை உணருபவர்களுக்காக இது உருவாக்கப்பட்டுள்ளது.",
                            "இவற்றில் அடங்குபவை:",
                            "• 30 நாட்கள் பதிவு செய்யப்பட்ட முழு ஈர்ப்பு விதி பயிற்சி",
                            "• 21 நாட்கள் விழிப்புணர்வு மற்றும் கான்ஷியஸ்னஸ் பயிற்சி",
                            "இத்திட்டம் ஆசைகளைத் தாண்டியது; வாழ்க்கையை உருவாக்கும் உங்கள் 'உள் நிலையை' (Inner State) மாற்றுவதில் இது கவனம் செலுத்துகிறது."
                        ]
                    },
                    {
                        title: "✨ உங்களுக்குச் சரியாகப் பட்டால் மட்டும் தேர்ந்தெடுக்கவும்",
                        content: [
                            "எந்த அவசரமும் இல்லை. எந்தக் கட்டாயமும் இல்லை. நீங்கள் தயாராக இருக்கும்போது, சரியான வழிகாட்டுதல் இயல்பாகவே உங்கள் முன் தோன்றும்."
                        ]
                    }
                ]
            }
        }
    },
    {
        slug: "free-course-2",
        type: 'free',
        title: {
            en: "30 Days Law of Attraction Step by Step Guidance",
            ta: "30 நாட்கள் ஈர்ப்பு விதி படிப்படியான வழிகாட்டுதல்"
        },
        thumbnail: "/assets/loa-program.png",
        content: {
            en: {
                introTitle: "Intro Video",
                introVideo: "https://www.youtube.com/embed/tj1qYopaH48?si=CEyeuju4Xx049MtE",
                episodes: Array.from({ length: 30 }, (_, i) => ({ title: `Episode ${i + 1}` })),
                sections: [
                    {
                        title: "🌿 Practice Creates a Shift",
                        content: [
                            "If you have sincerely followed Free Course 2, you have not just learned — you have practiced.",
                            "Thirty days of step-by-step guidance with practice is enough to create a real inner shift.",
                            "You may notice: Increased awareness, Better emotional control, More clarity about your desires, Reduced confusion and resistance.",
                            "This is the result of consistent alignment."
                        ]
                    },
                    {
                        title: "🌌 When Practice Deepens, the Soul Asks for More",
                        content: [
                            "At this stage, something important happens. The mind understands. The body cooperates. But the inner patterns still surface.",
                            "This is where many people feel: “I need deeper clarity”, “I want to strengthen this lifestyle”, “I don’t want to lose this momentum”.",
                            "This is not lack. This is evolution. The universe responds differently when commitment becomes consistent."
                        ]
                    },
                    {
                        title: "🌱 For Those Ready to Stabilize the Change",
                        content: [
                            "Practice creates movement. Guidance creates stability.",
                            "To help those who want to: Maintain consistency, Deepen manifestation results, Live consciously, not occasionally.",
                            "Advanced guided programs are available.",
                            "**🌿 Standard Program: Structured Manifestation for Real-Life Results**",
                            "Designed for those who want to: Manifest money, love, and career alignment, Follow a clear step-by-step manifestation system.",
                            "**🔥 Premium Program: Conscious Living & Inner Mastery**",
                            "For those who feel ready to go beyond techniques. Supports deep inner alignment and long-term lifestyle transformation."
                        ]
                    },
                    {
                        title: "✨ A Gentle Truth",
                        content: [
                            "Not everyone needs deeper guidance. But those who feel the call already know.",
                            "When practice becomes part of life, the next step appears naturally."
                        ]
                    }
                ]
            },
            ta: {
                introTitle: "அறிமுக வீடியோ",
                introVideo: "https://www.youtube.com/embed/tj1qYopaH48?si=CEyeuju4Xx049MtE",
                episodes: Array.from({ length: 30 }, (_, i) => ({ title: `எபிசோட் ${i + 1}` })),
                sections: [
                    {
                        title: "🌿 பயிற்சி ஒரு மாற்றத்தை உண்டாக்குகிறது",
                        content: [
                            "நீங்கள் இலவசப் பயிற்சி 2-ஐ (Free Course 2) உண்மையாகப் பின்பற்றியிருந்தால், நீங்கள் வெறும் பாடத்தைக் கற்றுக் கொள்ளவில்லை — நீங்கள் அதை பயிற்சி செய்திருக்கிறீர்கள்.",
                            "30 நாட்கள் வழிகாட்டுதலுடன் கூடிய பயிற்சி, ஒரு உண்மையான உள் மாற்றத்தை ஏற்படுத்தப் போதுமானது.",
                            "நீங்கள் இவற்றைக் கவனிக்கத் தொடங்கலாம்:",
                            "• அதிகரித்த விழிப்புணர்வு",
                            "• சிறந்த உணர்ச்சிக் கட்டுப்பாடு (Emotional Control)",
                            "• உங்கள் ஆசைகள் குறித்த அதிகத் தெளிவு",
                            "• குறைந்த குழப்பம் மற்றும் எதிர்ப்புணர்வு",
                            "இது நிலையான இணக்கத்தின் (Consistent Alignment) விளைவாகும்."
                        ]
                    },
                    {
                        title: "🌌 பயிற்சி ஆழமடையும் போது, ஆன்மா இன்னும் அதிகமாகக் கேட்கிறது",
                        content: [
                            "இந்தக் கட்டத்தில், முக்கியமான ஒன்று நிகழ்கிறது. மனம் புரிந்து கொள்கிறது. உடல் ஒத்துழைக்கிறது. ஆனால் பழைய உள் பதிவுகள் (Patterns) இன்னும் மேலெழும்புகின்றன.",
                            "இங்குதான் பலர் இப்படி உணர்கிறார்கள்:",
                            "• “எனக்கு இன்னும் ஆழமான தெளிவு தேவை”",
                            "• “இந்த வாழ்க்கை முறையை நான் வலுப்படுத்த விரும்புகிறேன்”",
                            "• “கிடைத்த இந்த உத்வேகத்தை (Momentum) நான் இழக்க விரும்பவில்லை”",
                            "இது குறைபாடு அல்ல. இது பரிணாம வளர்ச்சி. அர்ப்பணிப்பு நிலையாக மாறும்போது, பிரபஞ்சம் வித்தியாசமாகப் பதிலளிக்கிறது."
                        ]
                    },
                    {
                        title: "🌱 மாற்றத்தை நிலைப்படுத்தத் தயாராக இருப்பவர்களுக்கு",
                        content: [
                            "பயிற்சி அசைவை உருவாக்குகிறது. வழிகாட்டுதல் நிலைத்தன்மையை உருவாக்குகிறது. இவற்றை விரும்புவோருக்கு உதவ:",
                            "• தொடர்ச்சியைப் பராமரிக்க",
                            "• ஈர்ப்பு விதி முடிவுகளை ஆழப்படுத்த",
                            "• எப்போதாவது மட்டுமல்லாமல், எப்போதும் விழிப்புணர்வுடன் வாழ",
                            "மேம்பட்ட வழிகாட்டுதல் திட்டங்கள் (Advanced Programs) உள்ளன.",
                            "**🌿 நிலையான திட்டம் (Standard Program)**",
                            "நிஜ வாழ்க்கை முடிவுகளுக்கான கட்டமைக்கப்பட்ட மேனிஃபெஸ்டேஷன். இவர்களுக்கு ஏற்ற வகையில் வடிவமைக்கப்பட்டுள்ளது:",
                            "• பணம், காதல் மற்றும் தொழில் இணக்கத்தை ஈர்க்க",
                            "• தெளிவான படிநிலை மேனிஃபெஸ்டேஷன் முறையைப் பின்பற்ற",
                            "• ஆர்வத்தைக் கண்டறிய மற்றும் ஆன்மீக விழிப்புணர்வை அனுபவிக்க",
                            "இவற்றில் அடங்குபவை: வழிகாட்டப்பட்ட ஆடியோ உறுதிமொழிகள், காட்சிப்படுத்தும் பயிற்சிகள், ஆழ்மனதிற்கான சப்லிமினல் ஆடியோக்கள்.",
                            "இத்திட்டம் உங்கள் பயிற்சியை முடிவுகளாக மாற்ற உதவுகிறது.",
                            "**🔥 பிரீமியம் திட்டம் (Premium Program)**",
                            "விழிப்புணர்வு வாழ்க்கை & உள் தேர்ச்சி (Inner Mastery). வெறும் நுட்பங்களைத் (Techniques) தாண்டிச் செல்லத் தயாராக இருப்பவர்களுக்கு.",
                            "இவற்றில் அடங்குபவை:",
                            "• 30 நாட்கள் பதிவு செய்யப்பட்ட முழு ஈர்ப்பு விதி பயிற்சி",
                            "• 21 நாட்கள் விழிப்புணர்வு மற்றும் கான்ஷியஸ்னஸ் பயிற்சி",
                            "இத்திட்டம் இதற்குத் துணைபுரியும்: ஆழ்ந்த உள் இணக்கம், உணர்ச்சி தேர்ச்சி (Emotional Mastery), நீண்ட கால வாழ்க்கை முறை மாற்றம்."
                        ]
                    },
                    {
                        title: "✨ ஒரு மென்மையான உண்மை",
                        content: [
                            "எல்லோருக்கும் ஆழமான வழிகாட்டுதல் தேவைப்படுவதில்லை. ஆனால் அந்த அழைப்பை உணர்பவர்களுக்கு, அது ஏற்கனவே தெரியும்.",
                            "பயிற்சி வாழ்க்கையின் ஒரு பகுதியாக மாறும்போது, அடுத்த கட்டம் இயல்பாகவே தோன்றும்."
                        ]
                    }
                ]
            }
        }
    },

    // PAID COURSES
    {
        slug: "money-manifestation",
        type: 'paid',
        title: {
            en: "Money Manifestation",
            ta: "பணம் ஈர்ப்பு"
        },
        thumbnail: "/assets/money-manifestation.png",
        content: {
            en: {
                introTitle: "Introduction Money",
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
                introTitle: "Introduction Money",
                episodes: [],
                sections: []
            }
        }
    },
    {
        slug: "relationship-manifestation",
        type: 'paid',
        title: {
            en: "Relationship Manifestation",
            ta: "உறவு ஈர்ப்பு"
        },
        thumbnail: "/assets/relationship-manifestation.png",
        content: {
            en: {
                introTitle: "Introduction of Relationship",
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
                introTitle: "Intro",
                episodes: [],
                sections: []
            }
        }
    },
    {
        slug: "job-manifestation",
        type: 'paid',
        title: {
            en: "Job Manifestation",
            ta: "வேலை ஈர்ப்பு"
        },
        thumbnail: "/assets/job-manifestation.png",
        content: {
            en: {
                introTitle: "Introduction of Job",
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
                introTitle: "Intro",
                episodes: [],
                sections: []
            }
        }
    },
    {
        slug: "health-manifestation",
        type: 'paid',
        title: {
            en: "Health Manifestation",
            ta: "ஆரோக்கிய ஈர்ப்பு"
        },
        thumbnail: "/assets/health-manifestation.png",
        content: {
            en: {
                introTitle: "Introduction of Health",
                episodes: [
                    { title: "1. Introduction of Health (It can heal itself) Intention from Positive" },
                    { title: "2. Vibration Match (Remove Negative Believes)" },
                    { title: "3. Write Clear Intention and Read Morning and Night" },
                    { title: "4. Do Daily Practice Whatever It Happens" }
                ],
                description: "Do I really want? How much for 10/10? I do anything for this health? 22 to 66 days? Your mind God for your body.",
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
                introTitle: "Intro",
                episodes: [],
                sections: []
            }
        }
    },
    {
        slug: "find-your-passion",
        type: 'paid',
        title: {
            en: "Find Your Passion",
            ta: "உங்கள் ஆர்வத்தைக் கண்டறியவும்"
        },
        thumbnail: "/assets/find-your-passion.png",
        content: {
            en: {
                introTitle: "Introduction of Purpose",
                episodes: [
                    { title: "1. Introduction of Purpose (You are here for reason) Outer World" },
                    { title: "2. What you love, Good at, Get paid & What world needs" },
                    { title: "3. Live in Present Purpose (Full fill life)" },
                    { title: "4. Do daily practice whatever it happens" }
                ],
                description: "How am I? Why I am here? What is this world needs from me?",
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
                introTitle: "Intro",
                episodes: [],
                sections: []
            }
        }
    },
    {
        slug: "30-days-loa",
        type: 'paid', // Premium
        title: {
            en: "30 Days Full Law of Attraction Program",
            ta: "30 நாட்கள் முழு ஈர்ப்பு விதி பயிற்சி"
        },
        thumbnail: "/assets/loa-program.png", // Reusing asset for now
        content: {
            en: {
                introTitle: "Introduction",
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
            ta: { introTitle: "Intro", episodes: [], sections: [] }
        }
    },
    {
        slug: "21-days-consciousness",
        type: 'paid', // Premium
        title: {
            en: "21 Days Consciousness Workshop",
            ta: "21 நாட்கள் விழிப்புணர்வு பட்டறை"
        },
        thumbnail: "/assets/money-manifestation.png", // Reusing asset for now
        content: {
            en: {
                introTitle: "Introduction",
                episodes: Array.from({ length: 21 }, (_, i) => ({ title: `Day ${i + 1}` })),
                sections: [
                    {
                        title: "The Workshop Journey",
                        content: [
                            "1. The Truth?", "2. The voice", "3. Roommate", "4. not mind not Body",
                            "5. Illusion → The world", "6. Just Experience But Present (Fulfill)",
                            "7. no debt will Remain", "8. Don't Add new karma", "9. Reduce old karma",
                            "10. use one tool (meditation, yoga, kriya, Agam)", "11. Game → creator why?",
                            "12. when we enlighten", "13. when we enlight → karma '0' or kundalini Awaken",
                            "14. 2 level (3rd eye & crown) Realize our self", "15. Forgive others why?",
                            "16. love others No New karma", "17. Attachment", "18. Ego self → There is No I",
                            "19. Why It's Hard (Emotions in Body)", "20. Environment & food & major Role",
                            "21. Just decide it's not fate it's choice"
                        ]
                    }
                ]
            },
            ta: { introTitle: "Intro", episodes: [], sections: [] }
        }
    }
];
