import { NextResponse } from "next/server";
import { mkdir, stat, appendFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type FormType = "contact" | "comparator" | "newsletter" | "renovation" | "testimonial";

const filesByType: Record<FormType, string> = {
  contact: "contact-leads.csv",
  comparator: "comparator-leads.csv",
  newsletter: "newsletter-leads.csv",
  renovation: "renovation-leads.csv",
  testimonial: "testimonial-reviews.csv",
};

const defaultCsvHeader =
  "createdAt,formType,name,email,phone,postalCode,energyType,message,payloadJson\n";

const testimonialCsvHeader =
  "createdAt,formType,name,facebookUrl,rating,comment,payloadJson\n";

const csvEscape = (value: unknown) => {
  const text = value === undefined || value === null ? "" : String(value);
  return `"${text.replace(/"/g, '""')}"`;
};

const ensureFile = async (filePath: string, header: string) => {
  try {
    await stat(filePath);
  } catch {
    await appendFile(filePath, header, "utf8");
  }
};

const buildDefaultRow = (
  formType: FormType,
  payload: Record<string, unknown>,
  whatsappMessage: unknown,
) =>
  [
    new Date().toISOString(),
    formType,
    payload.name,
    payload.email ?? payload.contact,
    payload.phone,
    payload.postalCode,
    payload.energyType,
    payload.message ?? whatsappMessage,
    JSON.stringify(payload),
  ]
    .map(csvEscape)
    .join(",");

const buildTestimonialRow = (payload: Record<string, unknown>) =>
  [
    new Date().toISOString(),
    "testimonial",
    payload.name,
    payload.facebookUrl,
    payload.rating,
    payload.comment,
    JSON.stringify(payload),
  ]
    .map(csvEscape)
    .join(",");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const formType = body.formType as FormType;

    if (!filesByType[formType]) {
      return NextResponse.json({ error: "Type de formulaire invalide." }, { status: 400 });
    }

    const payload = (body.payload ?? {}) as Record<string, unknown>;
    const storageDir = path.join(process.cwd(), "storage", "excel");
    const filePath = path.join(storageDir, filesByType[formType]);
    const header = formType === "testimonial" ? testimonialCsvHeader : defaultCsvHeader;

    await mkdir(storageDir, { recursive: true });
    await ensureFile(filePath, header);

    const row =
      formType === "testimonial"
        ? buildTestimonialRow(payload)
        : buildDefaultRow(formType, payload, body.whatsappMessage);

    await appendFile(filePath, `${row}\n`, "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement du formulaire." },
      { status: 500 },
    );
  }
}
