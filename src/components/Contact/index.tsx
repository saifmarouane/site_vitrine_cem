"use client";

import { LeadRequest } from "@/types/energy";
import { buildWhatsAppUrl, submitFormData } from "@/utils/formSubmission";
import { FormEvent, useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const initialValues: LeadRequest = {
  name: "",
  email: "",
  phone: "",
  postalCode: "",
  energyType: "les_deux",
  message: "",
};

const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadRequest, string>>>(
    {},
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (key: keyof LeadRequest, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setIsSubmitted(false);
    setSubmitError("");
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof LeadRequest, string>> = {};

    if (!values.name.trim()) {
      nextErrors.name = "Le nom est requis.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "L'email semble invalide.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Le telephone est requis.";
    }

    if (!values.postalCode?.trim()) {
      nextErrors.postalCode = "Le code postal est requis.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const whatsappMessage = [
      "Nouvelle demande de rappel CEM",
      `Nom: ${values.name}`,
      `Email: ${values.email}`,
      `Telephone: ${values.phone}`,
      `Code postal: ${values.postalCode}`,
      `Energie: ${values.energyType}`,
      `Message: ${values.message || "Non renseigne"}`,
    ].join("\n");
    const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

    try {
      setIsSubmitting(true);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      await submitFormData({
        formType: "contact",
        payload: values,
        whatsappMessage,
      });
      setIsSubmitted(true);
      setValues(initialValues);
    } catch {
      setSubmitError(
        "WhatsApp a ete ouvert. Si le fichier Excel ne se remplit pas, l'API locale n'est pas disponible sur cet hebergement.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Besoin d&apos;aide pour choisir votre fournisseur ?
              </h2>
              <p className="mb-10 text-base font-medium text-body-color">
                Demandez un rappel gratuit pour etre accompagne dans la lecture
                des offres et les demarches de changement.
              </p>

              {isSubmitted && (
                <div className="mb-8 rounded-sm bg-primary/10 p-4 text-base font-semibold text-primary">
                  Votre demande a ete enregistree dans le fichier Excel local et
                  WhatsApp a ete ouvert avec le message a envoyer.
                </div>
              )}
              {submitError && (
                <div className="mb-8 rounded-sm bg-orange/10 p-4 text-base font-semibold text-orange">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-7">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre nom
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={values.name}
                        onChange={(event) =>
                          updateValue("name", event.target.value)
                        }
                        placeholder="Entrez votre nom"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm font-medium text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-7">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={(event) =>
                          updateValue("email", event.target.value)
                        }
                        placeholder="Entrez votre email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm font-medium text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-7">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Telephone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={values.phone}
                        onChange={(event) =>
                          updateValue("phone", event.target.value)
                        }
                        placeholder="Ex : 06 12 34 56 78"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm font-medium text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-7">
                      <label
                        htmlFor="postalCode"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Code postal
                      </label>
                      <input
                        id="postalCode"
                        value={values.postalCode}
                        onChange={(event) =>
                          updateValue("postalCode", event.target.value)
                        }
                        placeholder="Ex : 75015"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                      {errors.postalCode && (
                        <p className="mt-2 text-sm font-medium text-red-500">
                          {errors.postalCode}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-7">
                      <label
                        htmlFor="energyType"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Type d&apos;energie
                      </label>
                      <select
                        id="energyType"
                        value={values.energyType}
                        onChange={(event) =>
                          updateValue("energyType", event.target.value)
                        }
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      >
                        <option value="electricite">Electricite</option>
                        <option value="gaz">Gaz</option>
                        <option value="les_deux">Les deux</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-7">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={(event) =>
                          updateValue("message", event.target.value)
                        }
                        placeholder="Precisez votre demande ou votre fournisseur actuel"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <p className="mb-6 text-sm leading-relaxed text-body-color">
                      Les donnees transmises via ce formulaire sont utilisees
                      uniquement pour traiter votre demande et vous recontacter
                      si necessaire.
                    </p>
                    <button
                      disabled={isSubmitting}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 dark:shadow-submit-dark"
                    >
                      {isSubmitting
                        ? "Enregistrement..."
                        : "Demander un rappel gratuit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
