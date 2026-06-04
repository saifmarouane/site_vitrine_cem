"use client";

import { FormEvent, useState } from "react";
import { submitFormData } from "@/utils/formSubmission";
import { useRouter } from "next/navigation";

const emptyForm = {
  name: "",
  facebookUrl: "",
  rating: 5,
  comment: "",
};

const ReviewForm = () => {
  const router = useRouter();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      await submitFormData({
        formType: "testimonial",
        payload: form,
        whatsappMessage: `Nouvel avis: ${form.name} - ${form.rating}/5 - ${form.facebookUrl}`,
      });

      setForm(emptyForm);
      setStatus("success");
      router.refresh();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-12 rounded-sm bg-white p-8 shadow-two dark:bg-dark dark:shadow-three">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
          Votre avis
        </p>
        <h3 className="text-2xl font-bold text-black dark:text-white">
          Laissez un commentaire
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Nom"
            className="w-full rounded-sm border border-body-color/20 bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary dark:border-white/10 dark:bg-gray-dark dark:text-white"
          />
          <input
            type="url"
            required
            value={form.facebookUrl}
            onChange={(event) => setForm({ ...form, facebookUrl: event.target.value })}
            placeholder="Lien Facebook"
            className="w-full rounded-sm border border-body-color/20 bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary dark:border-white/10 dark:bg-gray-dark dark:text-white"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-black dark:text-white">
            Nombre d&apos;étoiles
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setForm({ ...form, rating: star })}
                aria-label={`${star} étoile${star > 1 ? "s" : ""}`}
                className={`text-3xl duration-200 ${
                  star <= form.rating ? "text-yellow" : "text-body-color/30"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <textarea
          required
          rows={5}
          value={form.comment}
          onChange={(event) => setForm({ ...form, comment: event.target.value })}
          placeholder="Votre commentaire"
          className="w-full resize-none rounded-sm border border-body-color/20 bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary dark:border-white/10 dark:bg-gray-dark dark:text-white"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-fit items-center rounded-sm bg-primary px-7 py-3 text-base font-semibold text-white duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Enregistrement..." : "Envoyer l'avis"}
        </button>

        {status === "success" && (
          <p className="text-sm font-semibold text-primary">
            Merci, votre avis a été enregistré.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-semibold text-red-500">
            Impossible d&apos;enregistrer l&apos;avis pour le moment.
          </p>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
