import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import fs from 'fs';
import path from 'path';

function log(message: string) {
    const logPath = path.join(process.cwd(), 'debug-api.log');
    fs.appendFileSync(logPath, `${new Date().toISOString()}: ${message}\n`);
}

export async function POST(req: Request) {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        log(`POST /api/videos Payload: ${JSON.stringify(body)}`);
        const { title, description, price, videoUrl, thumbnail } = body;

        const video = await prisma.video.create({
            data: {
                title,
                description,
                price,
                videoUrl,
                thumbnail,
            },
        });
        log(`Created Video: ${JSON.stringify(video)}`);

        return NextResponse.json({ video });
    } catch (error) {
        log(`Create Video Error: ${error}`);
        console.error("Create Video Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const title = searchParams.get('title');

        if (title) {
            const videos = await prisma.video.findMany({
                where: {
                    title: {
                        contains: title,
                        mode: 'insensitive',
                    },
                    isActive: true // robust default for public facing API
                },
                orderBy: { createdAt: 'desc' }
            });
            return NextResponse.json({ videos });
        }

        // If no title provided, return all (or maybe limiting to active only is safer for public)
        const videos = await prisma.video.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json({ videos });
    } catch (error) {
        console.error("Failed to fetch videos:", error);
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}
