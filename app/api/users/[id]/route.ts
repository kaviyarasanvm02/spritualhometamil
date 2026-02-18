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
    } catch (error: unknown) {
        console.error("Delete User Error:", error);

        // Log to file for debugging
        try {
            const fs = await import('fs');
            const path = await import('path');
            const logPath = path.join(process.cwd(), 'delete_error_log.txt');
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            const errorStack = error instanceof Error ? error.stack : "";
            fs.appendFileSync(logPath, `[${new Date().toISOString()}] Failed to delete user ${await params.then(p => p.id)}: ${errorMessage}\n${errorStack}\n\n`);
        } catch (e) {
            console.error("Failed to write log", e);
        }

        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: `Deletion failed: ${errorMessage}` }, { status: 500 });
    }
}
