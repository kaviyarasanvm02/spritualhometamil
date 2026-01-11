import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;

        // Prevent deleting self
        if (session.id === id) {
            return NextResponse.json({ error: "Cannot delete your own admin account" }, { status: 400 });
        }

        await prisma.$transaction([
            prisma.userVideo.deleteMany({ where: { userId: id } }),
            prisma.order.deleteMany({ where: { userId: id } }),
            prisma.user.delete({ where: { id } })
        ]);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Delete User Error:", error);

        // Log to file for debugging
        try {
            const fs = require('fs');
            const path = require('path');
            const logPath = path.join(process.cwd(), 'delete_error_log.txt');
            fs.appendFileSync(logPath, `[${new Date().toISOString()}] Failed to delete user ${await params.then(p => p.id)}: ${error.message}\n${error.stack}\n\n`);
        } catch (e) {
            console.error("Failed to write log", e);
        }

        return NextResponse.json({ error: `Deletion failed: ${error.message}` }, { status: 500 });
    }
}
