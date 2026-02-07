import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const courses = [
    {
        title: "Money Manifestation",
        description: "What I am going to give? Its service or money motive? 22 to 66 days? Send happily. Money is Neutral.",
        price: 299,
        thumbnail: "/assets/money-manifestation.png",
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw" // Placeholder or Intro
    },
    {
        title: "Relationship Manifestation",
        description: "Do I really want? How much for 10/10? I do anything for this relationship? 22 to 66 days? Don't chase just be happy.",
        price: 299,
        thumbnail: "/assets/relationship-manifestation.png",
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw"
    },
    {
        title: "Job Manifestation",
        description: "Do I really want? How much for 10/10? I do anything for this job? 22 to 66 days? Don't chase just do process.",
        price: 299,
        thumbnail: "/assets/job-manifestation.png",
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw"
    },
    {
        title: "Health Manifestation",
        description: "Do I really want? How much for 10/10? I do anything for this health? 22 to 66 days? Your mind God for your body.",
        price: 299,
        thumbnail: "/assets/health-manifestation.png",
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw"
    },
    {
        title: "Find Your Passion",
        description: "How am I? Why I am here? What is this world needs from me?",
        price: 299,
        thumbnail: "/assets/find-your-passion.png",
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw"
    },
    {
        title: "30-Day Transformation Program",
        description: "30 days full Law of Attraction training.",
        price: 1499,
        thumbnail: "/assets/loa-program.png",
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw"
    },
    {
        title: "Spiritual Awakening Course",
        description: "21 days consciousness & awareness training.",
        price: 999,
        thumbnail: "/assets/money-manifestation.png", // Using same as in data
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw"
    },
    {
        title: "ALL 5 COURSES COMBO ACCESS",
        description: "Get access to all 5 standard manifestation courses.",
        price: 999,
        thumbnail: "/assets/miracle.png",
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw"
    },
    {
        title: "COMBO COURSE – ONE PURCHASE",
        description: "Access both the 30-Day Transformation Program and the Spiritual Awakening Course.",
        price: 1999,
        thumbnail: "/assets/30-days-guide.png",
        videoUrl: "https://www.youtube.com/embed/qIOlVtMtmQw"
    }
];

async function main() {
    console.log('Seeding courses...');
    for (const course of courses) {
        const existing = await prisma.video.findFirst({
            where: { title: course.title }
        });

        if (!existing) {
            await prisma.video.create({
                data: {
                    title: course.title,
                    description: course.description,
                    price: course.price,
                    thumbnail: course.thumbnail,
                    videoUrl: course.videoUrl,
                    isActive: true
                }
            });
            console.log(`Created: ${course.title}`);
        } else {
            console.log(`Skipped (Exists): ${course.title}`);
        }
    }
    console.log('Seeding complete.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
