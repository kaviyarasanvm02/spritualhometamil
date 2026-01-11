import { NextResponse } from "next/server";
import { getPresignedUploadUrl } from "@/lib/s3";
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { filename, contentType } = await req.json();
        const uniqueFilename = `${Date.now()}-${filename}`;
        const url = await getPresignedUploadUrl(uniqueFilename, contentType);

        return NextResponse.json({ url, key: uniqueFilename });
    } catch (error) {
        console.error("S3 Presign Error:", error);
        return NextResponse.json({ error: "Failed to get upload URL" }, { status: 500 });
    }
}
