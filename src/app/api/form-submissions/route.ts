import { NextResponse } from "next/server";
import { mkdir, stat, appendFile } from "fs/promises";
import path from "path";

type FormType = "contact" | "comparator" | "newsletter";

const filesByType: Record<FormType, string> = {
  contact: "contact-leads.csv",
  comparator: "comparator-leads.csv",
  newsletter: "newsletter-leads.csv",
};

const csvHeader =
  "createdAt,formType,name,email,phone,postalCode,energyType,message,payloadJson\n";

const csvEscape = (value: unknown) => {
  const text = value === undefined || value === null ? "" : String(value);
  return `"${text.replace(/"/g, '""')}"`;
};

const ensureFile = async (filePath: string) => {
  try {
    await stat(filePath);
  } catch {
    await appendFile(filePath, csvHeader, "utf8");
  }
};

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

    await mkdir(storageDir, { recursive: true });
    await ensureFile(filePath);

    const row = [
      new Date().toISOString(),
      formType,
      payload.name,
      payload.email ?? payload.contact,
      payload.phone,
      payload.postalCode,
      payload.energyType,
      payload.message ?? body.whatsappMessage,
      JSON.stringify(payload),
    ]
      .map(csvEscape)
      .join(",");

    await appendFile(filePath, `${row}\n`, "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement du formulaire." },
      { status: 500 },
    );
  }
}
