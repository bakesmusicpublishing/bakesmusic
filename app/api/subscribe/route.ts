import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.json");

async function readSubscribers(): Promise<{ email: string; name?: string; joinedAt: string }[]> {
  try {
    await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
    const raw = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubscribers(subs: { email: string; name?: string; joinedAt: string }[]) {
  await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const subscribers = await readSubscribers();

    // Check for duplicate
    if (subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ success: true, message: "Already subscribed" });
    }

    subscribers.push({ email: email.toLowerCase(), name, joinedAt: new Date().toISOString() });
    await writeSubscribers(subscribers);

    console.log(`New subscriber: ${email}`);

    return NextResponse.json({ success: true, message: "Subscribed!" });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}

export async function GET() {
  // Simple count endpoint (no auth needed for count)
  const subscribers = await readSubscribers();
  return NextResponse.json({ count: subscribers.length });
}
