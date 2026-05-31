import Breadcrumb from "@/components/Common/Breadcrumb";
import { faqItems } from "@/data/faq";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ energie | EnergieCompare",
  description:
    "Reponses aux questions frequentes sur le changement de fournisseur, les coupures, les offres vertes et les economies estimees.",
};

const FAQPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="FAQ"
        description="Les reponses aux questions les plus frequentes avant de comparer ou de changer de fournisseur."
      />

      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[920px]">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="mb-6 rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
              >
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {item.question}
                </h2>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  {item.answer}
                </p>
              </article>
            ))}

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90"
              >
                Demander un rappel gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
