export const whatsappPhone = "212666599460";
export const whatsappQrLink = "https://wa.me/qr/K3FYB7HSPU6OK1";

export type FormSubmissionType =
  | "contact"
  | "comparator"
  | "newsletter"
  | "renovation";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

export const submitFormData = async ({
  formType,
  payload,
  whatsappMessage,
}: {
  formType: FormSubmissionType;
  payload: Record<string, unknown>;
  whatsappMessage: string;
}) => {
  const response = await fetch("/api/form-submissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formType,
      payload,
      whatsappMessage,
    }),
  });

  if (!response.ok) {
    throw new Error("Impossible d'enregistrer la demande.");
  }
};
