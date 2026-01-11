import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendContactFormReceiptEmail, sendAdminNotificationEmail } from '@/lib/mail';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const contactMessage = await prisma.contactMessage.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        // Send emails asynchronously (fire and forget for response speed, or await if critical)
        await Promise.all([
            sendContactFormReceiptEmail(email, name),
            sendAdminNotificationEmail({ name, email, message })
        ]);

        return NextResponse.json(contactMessage, { status: 201 });
    } catch (error) {
        console.error('Error creating contact message:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
