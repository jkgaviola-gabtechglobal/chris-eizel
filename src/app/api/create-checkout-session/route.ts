import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { amount } = await req.json();

  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount < 1) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation to Chris & Eizel Foundation",
          },
          unit_amount: Math.round(parsedAmount * 100),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${req.headers.get("origin")}/?donation=success`,
    cancel_url: `${req.headers.get("origin")}/?donation=cancelled`,
  });

  return NextResponse.json({ url: session.url });
}
