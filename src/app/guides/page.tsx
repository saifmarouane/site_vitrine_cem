import Breadcrumb from "@/components/Common/Breadcrumb";
import { guides } from "@/data/guides";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides energie | EnergieCompare",
  description:
    "Guides pratiques pour changer de fournisseur, comprendre le prix du kWh et reduire votre facture d'energie.",
};

const GuidesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Guides"
        description="Des contenus pratiques pour comprendre le marche de l'energie et preparer votre comparaison."
      />

      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
              >
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {guide.title}
                </h2>
                <p className="mb-5 text-base font-medium leading-relaxed text-body-color">
                  {guide.description}
                </p>
                <Link
                  href={guide.href}
                  className="text-base font-semibold text-primary hover:underline"
                >
                  Poser une question
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidesPage;
