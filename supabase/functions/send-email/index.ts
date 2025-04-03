
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@1.0.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "";
const FROM_EMAIL = "noreply@yourdomain.com"; // Update this to your domain

const resend = new Resend(RESEND_API_KEY);

interface EmailRequestBody {
  to: string;
  name: string;
  subject: string;
  email?: string;
  message?: string;
  type: "contact" | "notification";
}

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const { to, name, subject, email, message, type } = await req.json() as EmailRequestBody;

    if (!to || !type) {
      throw new Error("Missing required fields");
    }

    let html = "";
    let textContent = "";

    if (type === "contact") {
      // Admin email for contact form submission
      if (!email || !message) {
        throw new Error("Email and message required for contact form");
      }

      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `;

      textContent = `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `;
    } else if (type === "notification") {
      // User notification/confirmation email
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">Thank You for Contacting Us</h2>
          <p>Hello ${name},</p>
          <p>Thank you for reaching out to SEO Audit Tool. We have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,</p>
          <p>The SEO Audit Tool Team</p>
        </div>
      `;

      textContent = `
        Thank You for Contacting Us
        Hello ${name},
        Thank you for reaching out to SEO Audit Tool. We have received your message and will get back to you as soon as possible.
        Best regards,
        The SEO Audit Tool Team
      `;
    }

    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: to,
      subject: subject,
      html: html,
      text: textContent,
    });

    return new Response(
      JSON.stringify({
        success: true,
        data,
      }),
      {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        status: 500,
      }
    );
  }
});
