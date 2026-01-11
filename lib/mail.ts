import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const EMAIL_FROM = 'Spiritual Home Tamil <onboarding@resend.dev>'; // TODO: Update with verified domain

export const sendWelcomeEmail = async (email: string, name: string) => {
    if (!resend) {
        console.log('Resend API key missing, skipping email.');
        return { success: false, error: 'Resend API Key Missing' };
    }
    try {
        const data = await resend.emails.send({
            from: EMAIL_FROM,
            to: email,
            subject: 'Welcome to Spiritual Home Tamil',
            html: `
        <h1>Welcome to Spiritual Home Tamil, ${name}!</h1>
        <p>We are delighted to have you join our community.</p>
        <p>Explore our exclusive content and start your spiritual journey today.</p>
      `,
        });
        return { success: true, data };
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return { success: false, error };
    }
};

export const sendOrderConfirmationEmail = async (email: string, orderId: string, amount: number) => {
    if (!resend) return { success: false, error: 'Resend API Key Missing' };
    try {
        const data = await resend.emails.send({
            from: EMAIL_FROM,
            to: email,
            subject: `Order Confirmation #${orderId}`,
            html: `
        <h1>Thank you for your purchase!</h1>
        <p>Your order <strong>#${orderId}</strong> has been confirmed.</p>
        <p>Total Amount: ₹${amount}</p>
        <p>You can access your purchased content in your dashboard.</p>
      `,
        });
        return { success: true, data };
    } catch (error) {
        console.error('Error sending order confirmation email:', error);
        return { success: false, error };
    }
};

export const sendContactFormReceiptEmail = async (email: string, name: string) => {
    if (!resend) return { success: false, error: 'Resend API Key Missing' };
    try {
        const data = await resend.emails.send({
            from: EMAIL_FROM,
            to: email,
            subject: 'We received your message',
            html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
      `,
        });
        return { success: true, data };
    } catch (error) {
        console.error('Error sending contact receipt email:', error);
        return { success: false, error };
    }
};

export const sendAdminNotificationEmail = async (details: { name: string; email: string; message: string }) => {
    if (!resend) return { success: false, error: 'Resend API Key Missing' };
    try {
        // Assuming there's an ADMIN_EMAIL env var, or hardcoded for now
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@spiritualhometamil.com';

        const data = await resend.emails.send({
            from: EMAIL_FROM,
            to: ADMIN_EMAIL,
            subject: `New Contact Form Submission from ${details.name}`,
            html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${details.name}</p>
        <p><strong>Email:</strong> ${details.email}</p>
        <p><strong>Message:</strong></p>
        <p>${details.message}</p>
      `,
        });
        return { success: true, data };
    } catch (error) {
        console.error('Error sending admin notification:', error);
        return { success: false, error };
    }
};
