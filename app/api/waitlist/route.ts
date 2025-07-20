import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    const { email } = result.data;

    // --- API Integration Point ---
    // 1. Send email to Resend API (https://resend.com/docs/api-reference/emails/send-email)
    // 2. Store email in Supabase (https://supabase.com/docs/reference/javascript/insert)
    // 3. Add analytics tracking here
    // Example:
    // await resend.emails.send({ ... });
    // await supabase.from('waitlist').insert([{ email }]);

    // Simulate success
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
} 