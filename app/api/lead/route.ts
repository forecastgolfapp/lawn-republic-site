import { NextResponse } from "next/server";
import { FORMSPREE_QUOTE_URL } from "@/lib/site";

type LeadPayload = {
  name?: string;
  phone?: string;
  address?: string;
  message?: string;
  source?: string;
  // Honeypot — bots fill this, humans don't.
  _gotcha?: string;
};

const isNonEmpty = (value?: string) =>
  typeof value === "string" && value.trim().length > 1;

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  // Silently accept honeypot submissions so bots don't retry.
  if (payload._gotcha && payload._gotcha.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmpty(payload.name) || !isNonEmpty(payload.phone) || !isNonEmpty(payload.address)) {
    return NextResponse.json(
      { error: "Name, phone, and address are required." },
      { status: 400 }
    );
  }

  const lead = {
    form: "Lawn Republic Quote Request",
    name: payload.name?.trim(),
    phone: payload.phone?.trim(),
    address: payload.address?.trim(),
    message: payload.message?.trim() || "",
    source: payload.source ?? "unknown",
    submittedAt: new Date().toISOString(),
    _subject: `Quote Request from ${payload.name?.trim() ?? "website"}`
  };

  try {
    const formspreeRes = await fetch(FORMSPREE_QUOTE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(lead)
    });

    if (!formspreeRes.ok) {
      console.error("Formspree rejected lead", {
        status: formspreeRes.status,
        lead
      });
      return NextResponse.json(
        { error: "We could not deliver your request. Please call us." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Formspree request failed", { error, lead });
    return NextResponse.json(
      { error: "Network error. Please try again or call us." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
