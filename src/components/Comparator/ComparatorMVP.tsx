"use client";

import { simulatedOffers } from "@/data/offers";
import { ComparatorFormValues, SimulatedOffer } from "@/types/energy";
import { buildWhatsAppUrl, submitFormData } from "@/utils/formSubmission";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const initialValues: ComparatorFormValues = {
  housingType: "appartement",
  surface: "",
  occupants: "2",
  postalCode: "",
  energyType: "electricite",
  currentSupplier: "",
  annualConsumption: "",
  meterPower: "6",
  greenOnly: false,
  pricePreference: "indexe",
  noCommitment: true,
  contact: "",
};

const energyLabels = {
  electricite: "Electricite",
  gaz: "Gaz",
  les_deux: "Electricite + gaz",
};

const priceLabels = {
  fixe: "Prix fixe",
  variable: "Prix variable",
  indexe: "Prix indexe",
};

const isCompatibleEnergy = (
  offer: SimulatedOffer,
  selectedEnergy: ComparatorFormValues["energyType"],
) => offer.energyType === selectedEnergy || offer.energyType === "les_deux";

const ComparatorMVP = () => {
  const [values, setValues] = useState(initialValues);
  const [hasSearched, setHasSearched] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const results = useMemo(() => {
    return simulatedOffers
      .filter((offer) => isCompatibleEnergy(offer, values.energyType))
      .filter((offer) => !values.greenOnly || offer.isGreen)
      .filter((offer) => offer.priceType === values.pricePreference)
      .sort((a, b) => a.annualEstimate - b.annualEstimate);
  }, [values.energyType, values.greenOnly, values.pricePreference]);

  const fallbackResults = useMemo(() => {
    return simulatedOffers
      .filter((offer) => isCompatibleEnergy(offer, values.energyType))
      .filter((offer) => !values.greenOnly || offer.isGreen)
      .sort((a, b) => a.annualEstimate - b.annualEstimate)
      .slice(0, 3);
  }, [values.energyType, values.greenOnly]);

  const displayedResults = results.length > 0 ? results : fallbackResults;

  const updateValue = (
    key: keyof ComparatorFormValues,
    value: string | boolean,
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmitError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSearched(true);

    const whatsappMessage = [
      "Nouvelle comparaison energie CEM",
      `Logement: ${values.housingType}`,
      `Surface: ${values.surface || "Non renseignee"}`,
      `Occupants: ${values.occupants}`,
      `Code postal: ${values.postalCode || "Non renseigne"}`,
      `Energie: ${values.energyType}`,
      `Fournisseur actuel: ${values.currentSupplier || "Non renseigne"}`,
      `Consommation: ${values.annualConsumption || "Non renseignee"}`,
      `Puissance: ${values.meterPower} kVA`,
      `Offre verte: ${values.greenOnly ? "Oui" : "Non"}`,
      `Prix: ${values.pricePreference}`,
      `Sans engagement: ${values.noCommitment ? "Oui" : "Non"}`,
      `Contact: ${values.contact || "Non renseigne"}`,
    ].join("\n");
    const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

    try {
      setIsSubmitting(true);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      await submitFormData({
        formType: "comparator",
        payload: values,
        whatsappMessage,
      });
      setSubmitError("");
    } catch {
      setSubmitError(
        "WhatsApp a ete ouvert. Si le fichier Excel ne se remplit pas, l'API locale n'est pas disponible sur cet hebergement.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark md:p-10"
          >
            <h2 className="mb-3 text-3xl font-bold text-black dark:text-white">
              Votre profil de consommation
            </h2>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
              Renseignez les informations principales pour afficher des offres
              simulees. Aucune donnee n&apos;est envoyee a une API dans cette
              version.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Type de logement
                </span>
                <select
                  value={values.housingType}
                  onChange={(event) =>
                    updateValue("housingType", event.target.value)
                  }
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                >
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Surface
                </span>
                <input
                  value={values.surface}
                  onChange={(event) => updateValue("surface", event.target.value)}
                  placeholder="Ex : 70 m2"
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Nombre d&apos;occupants
                </span>
                <input
                  value={values.occupants}
                  onChange={(event) =>
                    updateValue("occupants", event.target.value)
                  }
                  type="number"
                  min="1"
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Code postal
                </span>
                <input
                  value={values.postalCode}
                  onChange={(event) =>
                    updateValue("postalCode", event.target.value)
                  }
                  placeholder="Ex : 75015"
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Type d&apos;energie
                </span>
                <select
                  value={values.energyType}
                  onChange={(event) =>
                    updateValue("energyType", event.target.value)
                  }
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                >
                  <option value="electricite">Electricite</option>
                  <option value="gaz">Gaz</option>
                  <option value="les_deux">Les deux</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Fournisseur actuel
                </span>
                <input
                  value={values.currentSupplier}
                  onChange={(event) =>
                    updateValue("currentSupplier", event.target.value)
                  }
                  placeholder="Ex : EDF"
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Consommation annuelle
                </span>
                <input
                  value={values.annualConsumption}
                  onChange={(event) =>
                    updateValue("annualConsumption", event.target.value)
                  }
                  placeholder="Ex : 4500 kWh"
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Puissance compteur
                </span>
                <select
                  value={values.meterPower}
                  onChange={(event) =>
                    updateValue("meterPower", event.target.value)
                  }
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                >
                  <option value="3">3 kVA</option>
                  <option value="6">6 kVA</option>
                  <option value="9">9 kVA</option>
                  <option value="12">12 kVA</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Preference tarifaire
                </span>
                <select
                  value={values.pricePreference}
                  onChange={(event) =>
                    updateValue("pricePreference", event.target.value)
                  }
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                >
                  <option value="fixe">Prix fixe</option>
                  <option value="variable">Prix variable</option>
                  <option value="indexe">Prix indexe</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Email ou telephone
                </span>
                <input
                  value={values.contact}
                  onChange={(event) => updateValue("contact", event.target.value)}
                  placeholder="Optionnel"
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                />
              </label>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="flex items-center text-sm font-semibold text-body-color">
                <input
                  type="checkbox"
                  checked={values.greenOnly}
                  onChange={(event) =>
                    updateValue("greenOnly", event.target.checked)
                  }
                  className="mr-3 h-4 w-4"
                />
                Offres vertes uniquement
              </label>
              <label className="flex items-center text-sm font-semibold text-body-color">
                <input
                  type="checkbox"
                  checked={values.noCommitment}
                  onChange={(event) =>
                    updateValue("noCommitment", event.target.checked)
                  }
                  className="mr-3 h-4 w-4"
                />
                Sans engagement
              </label>
            </div>

            <button
              disabled={isSubmitting}
              className="mt-8 w-full rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Enregistrement..." : "Afficher les resultats"}
            </button>
          </form>

          <div>
            <div className="mb-6 rounded-sm bg-primary/10 p-6">
              <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
                Resultats simules
              </h2>
              <p className="text-base font-medium leading-relaxed text-body-color">
                Les prix affiches sont des exemples pour valider l&apos;interface.
                La future version connectera une vraie API de comparaison.
              </p>
            </div>

            {!hasSearched && (
              <div className="mb-6 rounded-sm border border-body-color/10 p-5 text-base font-medium text-body-color dark:border-white/10">
                Remplissez le formulaire puis lancez la comparaison pour
                afficher les offres les plus pertinentes.
              </div>
            )}
            {submitError && (
              <div className="mb-6 rounded-sm bg-orange/10 p-5 text-base font-semibold text-orange">
                {submitError}
              </div>
            )}

            <div className="grid gap-6">
              {displayedResults.map((offer) => (
                <article
                  key={offer.id}
                  className="rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      {energyLabels[offer.energyType]}
                    </span>
                    <span className="rounded-full bg-gray-light px-4 py-2 text-sm font-semibold text-dark dark:bg-dark dark:text-white">
                      {priceLabels[offer.priceType]}
                    </span>
                    {offer.isGreen && (
                      <span className="rounded-full bg-orange/10 px-4 py-2 text-sm font-semibold text-orange">
                        Offre verte
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col justify-between gap-5 sm:flex-row">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                        {offer.supplier} - {offer.name}
                      </h3>
                      <ul className="space-y-2 text-base font-medium text-body-color">
                        {offer.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <p className="text-sm font-semibold text-body-color">
                        Estimation annuelle
                      </p>
                      <p className="text-3xl font-bold text-black dark:text-white">
                        {offer.annualEstimate} €
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="rounded-sm bg-primary px-6 py-3 text-center text-base font-semibold text-white duration-300 hover:bg-primary/90"
                    >
                      Voir l&apos;offre
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-sm bg-orange px-6 py-3 text-center text-base font-semibold text-white duration-300 hover:bg-orange/90"
                    >
                      Etre rappele
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparatorMVP;
