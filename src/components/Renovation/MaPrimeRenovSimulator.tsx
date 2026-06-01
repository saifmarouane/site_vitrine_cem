"use client";

import { buildWhatsAppUrl, submitFormData } from "@/utils/formSubmission";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type WorkKey =
  | "pompe_chaleur"
  | "isolation_toiture"
  | "isolation_murs"
  | "chauffe_eau"
  | "renovation_ampleur"
  | "solaire";

type IncomeProfile = "tres_modeste" | "modeste" | "intermediaire" | "superieur";

type RenovationValues = {
  ownerStatus: "occupant" | "bailleur" | "locataire";
  housingType: "maison" | "appartement";
  residence: "principale" | "secondaire";
  housingAge: "moins_15" | "plus_15";
  incomeProfile: IncomeProfile;
  workType: WorkKey;
  surface: string;
  annualEnergyBill: string;
  postalCode: string;
  contact: string;
};

const initialValues: RenovationValues = {
  ownerStatus: "occupant",
  housingType: "maison",
  residence: "principale",
  housingAge: "plus_15",
  incomeProfile: "modeste",
  workType: "pompe_chaleur",
  surface: "",
  annualEnergyBill: "",
  postalCode: "",
  contact: "",
};

const incomeLabels: Record<IncomeProfile, string> = {
  tres_modeste: "Tres modeste",
  modeste: "Modeste",
  intermediaire: "Intermediaire",
  superieur: "Superieur",
};

const workOptions: Record<
  WorkKey,
  {
    label: string;
    description: string;
    indicativeAid: Record<IncomeProfile, number>;
    savingRate: number;
  }
> = {
  pompe_chaleur: {
    label: "Pompe a chaleur",
    description: "Remplacement d'un chauffage ancien par un equipement performant.",
    indicativeAid: {
      tres_modeste: 5000,
      modeste: 4000,
      intermediaire: 3000,
      superieur: 0,
    },
    savingRate: 0.32,
  },
  isolation_toiture: {
    label: "Isolation toiture / combles",
    description: "Travaux prioritaires pour limiter les pertes de chaleur.",
    indicativeAid: {
      tres_modeste: 2500,
      modeste: 2000,
      intermediaire: 1200,
      superieur: 0,
    },
    savingRate: 0.22,
  },
  isolation_murs: {
    label: "Isolation des murs",
    description: "Isolation interieure ou exterieure selon le diagnostic du logement.",
    indicativeAid: {
      tres_modeste: 3500,
      modeste: 2800,
      intermediaire: 1600,
      superieur: 0,
    },
    savingRate: 0.24,
  },
  chauffe_eau: {
    label: "Chauffe-eau performant",
    description: "Equipement thermodynamique ou solaire selon le projet.",
    indicativeAid: {
      tres_modeste: 1200,
      modeste: 900,
      intermediaire: 500,
      superieur: 0,
    },
    savingRate: 0.12,
  },
  renovation_ampleur: {
    label: "Renovation d'ampleur",
    description: "Bouquet de travaux avec gain energetique important et accompagnement.",
    indicativeAid: {
      tres_modeste: 28000,
      modeste: 22000,
      intermediaire: 15000,
      superieur: 9000,
    },
    savingRate: 0.45,
  },
  solaire: {
    label: "Solaire / autoconsommation",
    description: "Projet a comparer avec les aides energie et les economies attendues.",
    indicativeAid: {
      tres_modeste: 1000,
      modeste: 800,
      intermediaire: 500,
      superieur: 0,
    },
    savingRate: 0.18,
  },
};

const formatEuro = (value: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const MaPrimeRenovSimulator = () => {
  const [values, setValues] = useState(initialValues);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const simulation = useMemo(() => {
    const selectedWork = workOptions[values.workType];
    const annualBill = Number(values.annualEnergyBill) || 0;
    const isEligibleBase =
      values.ownerStatus !== "locataire" &&
      values.residence === "principale" &&
      values.housingAge === "plus_15";
    const indicativeAid = isEligibleBase
      ? selectedWork.indicativeAid[values.incomeProfile]
      : 0;
    const estimatedSavings = annualBill
      ? Math.round(annualBill * selectedWork.savingRate)
      : 0;

    return {
      selectedWork,
      isEligibleBase,
      indicativeAid,
      estimatedSavings,
      totalFirstYear: indicativeAid + estimatedSavings,
    };
  }, [values]);

  const updateValue = (key: keyof RenovationValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmitError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    const whatsappMessage = [
      "Nouvelle demande MaPrimeRenov EnergieCompare",
      `Statut: ${values.ownerStatus}`,
      `Logement: ${values.housingType}`,
      `Residence: ${values.residence}`,
      `Age logement: ${values.housingAge}`,
      `Profil revenus: ${incomeLabels[values.incomeProfile]}`,
      `Travaux: ${simulation.selectedWork.label}`,
      `Surface: ${values.surface || "Non renseignee"}`,
      `Facture annuelle: ${values.annualEnergyBill || "Non renseignee"}`,
      `Code postal: ${values.postalCode || "Non renseigne"}`,
      `Aide indicative: ${formatEuro(simulation.indicativeAid)}`,
      `Economies estimees: ${formatEuro(simulation.estimatedSavings)}`,
      `Contact: ${values.contact || "Non renseigne"}`,
    ].join("\n");

    try {
      setIsSubmitting(true);
      window.open(buildWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");
      await submitFormData({
        formType: "renovation",
        payload: {
          ...values,
          name: values.contact,
          message: whatsappMessage,
          indicativeAid: simulation.indicativeAid,
          estimatedSavings: simulation.estimatedSavings,
        },
        whatsappMessage,
      });
      setSubmitError("");
    } catch {
      setSubmitError(
        "WhatsApp a ete ouvert. L'enregistrement local sera disponible quand l'API du site sera active.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark md:p-10">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Aide renovation energetique
              </span>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl">
                Estimez votre aide MaPrimeRenov et vos economies d&apos;energie
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color">
                MaPrimeRenov aide les proprietaires a financer des travaux de
                chauffage, d&apos;isolation ou de renovation d&apos;ampleur. Cette
                simulation donne une premiere orientation avant verification du
                dossier avec un conseiller ou un partenaire qualifie.
              </p>
            </div>

            <div className="rounded-sm border border-body-color/10 p-7 dark:border-white/10">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Travaux souvent concernes
              </h2>
              <div className="grid gap-4">
                {Object.entries(workOptions).map(([key, work]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => updateValue("workType", key)}
                    className={`rounded-sm border p-4 text-left duration-300 ${
                      values.workType === key
                        ? "border-primary bg-primary/10"
                        : "border-body-color/10 hover:border-primary/40 dark:border-white/10"
                    }`}
                  >
                    <span className="block text-base font-bold text-black dark:text-white">
                      {work.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-relaxed text-body-color">
                      {work.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <form
              onSubmit={handleSubmit}
              className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark md:p-10"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
                Votre situation
              </h2>
              <p className="mb-8 text-base font-medium leading-relaxed text-body-color">
                Les montants affiches sont indicatifs et doivent etre confirmes
                avec les baremes officiels ANAH / France Renov a jour.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                    Statut
                  </span>
                  <select
                    value={values.ownerStatus}
                    onChange={(event) =>
                      updateValue("ownerStatus", event.target.value)
                    }
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                  >
                    <option value="occupant">Proprietaire occupant</option>
                    <option value="bailleur">Proprietaire bailleur</option>
                    <option value="locataire">Locataire</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                    Logement
                  </span>
                  <select
                    value={values.housingType}
                    onChange={(event) =>
                      updateValue("housingType", event.target.value)
                    }
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                  >
                    <option value="maison">Maison</option>
                    <option value="appartement">Appartement</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                    Occupation
                  </span>
                  <select
                    value={values.residence}
                    onChange={(event) =>
                      updateValue("residence", event.target.value)
                    }
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                  >
                    <option value="principale">Residence principale</option>
                    <option value="secondaire">Residence secondaire</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                    Age du logement
                  </span>
                  <select
                    value={values.housingAge}
                    onChange={(event) =>
                      updateValue("housingAge", event.target.value)
                    }
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                  >
                    <option value="plus_15">Plus de 15 ans</option>
                    <option value="moins_15">Moins de 15 ans</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                    Profil de revenus
                  </span>
                  <select
                    value={values.incomeProfile}
                    onChange={(event) =>
                      updateValue("incomeProfile", event.target.value)
                    }
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                  >
                    {Object.entries(incomeLabels).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                    Surface
                  </span>
                  <input
                    value={values.surface}
                    onChange={(event) => updateValue("surface", event.target.value)}
                    placeholder="Ex : 90 m2"
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                    Facture energie annuelle
                  </span>
                  <input
                    value={values.annualEnergyBill}
                    onChange={(event) =>
                      updateValue("annualEnergyBill", event.target.value)
                    }
                    inputMode="numeric"
                    placeholder="Ex : 1800"
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
                    placeholder="Ex : 69003"
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">
                  Email ou telephone
                </span>
                <input
                  value={values.contact}
                  onChange={(event) => updateValue("contact", event.target.value)}
                  placeholder="Pour etre rappele par un conseiller"
                  className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                />
              </label>

              <button
                disabled={isSubmitting}
                className="mt-8 w-full rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Enregistrement..." : "Estimer mon aide"}
              </button>
            </form>

            <div className="rounded-sm bg-primary/10 p-7">
              <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">
                Resultat indicatif
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-body-color">
                    Eligibilite
                  </p>
                  <p className="mt-1 text-xl font-bold text-black dark:text-white">
                    {simulation.isEligibleBase ? "A verifier" : "Peu probable"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-body-color">
                    Aide possible
                  </p>
                  <p className="mt-1 text-xl font-bold text-black dark:text-white">
                    {formatEuro(simulation.indicativeAid)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-body-color">
                    Economies / an
                  </p>
                  <p className="mt-1 text-xl font-bold text-black dark:text-white">
                    {formatEuro(simulation.estimatedSavings)}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-base font-medium leading-relaxed text-body-color">
                Premiere annee estimee :{" "}
                <span className="font-bold text-black dark:text-white">
                  {formatEuro(simulation.totalFirstYear)}
                </span>
                . Les aides peuvent se cumuler avec des CEE, un eco-PTZ ou des
                dispositifs locaux selon votre dossier.
              </p>
              {hasSubmitted && !simulation.isEligibleBase && (
                <p className="mt-4 rounded-sm bg-white p-4 text-sm font-semibold text-orange dark:bg-dark">
                  MaPrimeRenov cible principalement les proprietaires de
                  residences principales dans des logements anciens. Un
                  conseiller peut verifier les alternatives.
                </p>
              )}
              {submitError && (
                <p className="mt-4 rounded-sm bg-white p-4 text-sm font-semibold text-orange dark:bg-dark">
                  {submitError}
                </p>
              )}
            </div>

            <div className="rounded-sm border border-body-color/10 p-7 dark:border-white/10">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Sources et suite du parcours
              </h2>
              <p className="mb-5 text-base font-medium leading-relaxed text-body-color">
                Les conditions officielles evoluent. Verifiez le montant final
                sur les sites France Renov et ANAH avant de signer un devis.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://france-renov.gouv.fr/aides/maprimerenov"
                  target="_blank"
                  className="rounded-sm bg-primary px-6 py-3 text-center text-base font-semibold text-white duration-300 hover:bg-primary/90"
                >
                  Voir France Renov
                </Link>
                <Link
                  href="/contact"
                  className="rounded-sm bg-orange px-6 py-3 text-center text-base font-semibold text-white duration-300 hover:bg-orange/90"
                >
                  Parler a un conseiller
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Comprendre l'aide",
              text: "Identifier le bon parcours entre renovation par geste, renovation d'ampleur et aides complementaires.",
            },
            {
              title: "Comparer les impacts",
              text: "Mettre en regard l'aide estimee, les economies annuelles et le reste a charge potentiel.",
            },
            {
              title: "Transformer le projet",
              text: "Orienter le visiteur vers un installateur, un conseiller energie ou un partenaire renovation.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
            >
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaPrimeRenovSimulator;
