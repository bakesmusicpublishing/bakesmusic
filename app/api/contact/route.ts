import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();
    // Log for now — wire to email service when ready
    console.log("Contact form:", { name, email, subject, message });
    // TODO: send via Brevo/SendGrid when API key added
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
