import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();
    
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    // Dynamically import stripe only when key is present
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(stripeKey, { apiVersion: "2026-03-25.dahlia" });

    const lineItems = items.map((item: { name: string; price: number; size: string; quantity: number }) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: `${item.name} (${item.size})`,
          description: "Bakes Clothing — Divine Timing Capsule 001",
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://bakesmusic.vercel.app"}/store?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://bakesmusic.vercel.app"}/store`,
      shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "FR", "DE", "AU", "BR", "MX", "NG", "ZA"] },
      metadata: { source: "bakesmusic.com", brand: "Bakes Clothing" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
