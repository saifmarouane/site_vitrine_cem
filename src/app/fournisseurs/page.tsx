import Breadcrumb from "@/components/Common/Breadcrumb";
import { suppliers } from "@/data/suppliers";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fournisseurs energie | EnergieCompare",
  description:
    "Decouvrez les principaux fournisseurs d'electricite, de gaz et d'energie verte references par EnergieCompare.",
};

const FournisseursPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Fournisseurs"
        description="Nous referencons les principaux fournisseurs d'energie du marche francais afin de vous aider a comparer les prix, les conditions, les offres vertes et les options disponibles."
      />

      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {suppliers.map((supplier) => (
              <article
                key={supplier.name}
                className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark"
              >
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  {supplier.energyTypes.join(" + ")}
                </div>
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  {supplier.name}
                </h2>
                <p className="mb-6 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  {supplier.description}
                </p>
                <Link
                  href="/comparer"
                  className="text-base font-semibold text-primary hover:underline"
                >
                  {supplier.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FournisseursPage;
