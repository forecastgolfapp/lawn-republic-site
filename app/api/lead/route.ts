import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  address?: string;
  message?: string;
  source?: string;
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

  if (!isNonEmpty(payload.name) || !isNonEmpty(payload.phone) || !isNonEmpty(payload.address)) {
    return NextResponse.json(
      { error: "Name, phone, and address are required." },
      { status: 400 }
    );
  }

  const lead = {
    name: payload.name?.trim(),
    phone: payload.phone?.trim(),
    address: payload.address?.trim(),
    message: payload.message?.trim() || "",
    source: payload.source ?? "unknown",
    submittedAt: new Date().toISOString()
  };

  console.log("New lead submitted", lead);

  // TODO: Send lead to SendGrid and/or persist in a database.

  return NextResponse.json({ ok: true });
}
