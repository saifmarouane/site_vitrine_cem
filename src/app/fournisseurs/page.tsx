import Breadcrumb from "@/components/Common/Breadcrumb";
import { siteContent } from "@/data/siteContent";
import { suppliers } from "@/data/suppliers";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.suppliers.metadata.title,
  description: siteContent.suppliers.metadata.description,
};

const FournisseursPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.suppliers.h1}
        description={siteContent.suppliers.intro}
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
                <h3 className="mb-2 text-base font-bold text-black dark:text-white">
                  {siteContent.suppliers.cardHeading}
                </h3>
                <p className="mb-5 text-sm font-medium leading-relaxed text-body-color">
                  {siteContent.suppliers.cardText}
                </p>
                <h3 className="mb-2 text-base font-bold text-black dark:text-white">
                  {siteContent.suppliers.reviewHeading}
                </h3>
                <p className="mb-6 text-sm font-medium leading-relaxed text-body-color">
                  {siteContent.suppliers.reviewText}
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
          <p className="mt-10 rounded-sm bg-orange/10 p-5 text-sm font-semibold leading-relaxed text-body-color">
            {siteContent.suppliers.transparency}
          </p>
        </div>
      </section>
    </>
  );
};

export default FournisseursPage;
