
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Create a new Resend client using the API key from environment variables
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// CORS headers for cross-origin requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Define the structure of email requests
interface EmailRequest {
  to: string;
  subject: string;
  name?: string;
  email?: string;
  message?: string;
  type: "contact" | "notification";
}

// The main handler function for the edge function
const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, name, email, message, type }: EmailRequest = await req.json();

    // Validate required fields
    if (!to || !subject || !type) {
      throw new Error("Missing required fields: to, subject, and type are required");
    }

    // Different email templates based on type
    let html;
    let from;
    let replyTo;

    if (type === "contact") {
      // Contact form submission - send to admin
      if (!name || !email || !message) {
        throw new Error("Contact form requires name, email, and message");
      }

      from = "Contact Form <onboarding@resend.dev>";
      replyTo = email;
      
      html = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    } else if (type === "notification") {
      // Notification to user
      from = "SEO Audit Tool <onboarding@resend.dev>";
      
      html = `
        <h1>Thank you for contacting us!</h1>
        <p>Hello ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>The SEO Audit Tool Team</p>
      `;
    } else {
      throw new Error("Invalid email type");
    }

    const emailResponse = await resend.emails.send({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
