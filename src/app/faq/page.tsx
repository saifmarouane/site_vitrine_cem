import Breadcrumb from "@/components/Common/Breadcrumb";
import { siteContent } from "@/data/siteContent";
import { faqItems } from "@/data/faq";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.faq.metadata.title,
  description: siteContent.faq.metadata.description,
};

const FAQPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.faq.h1}
        description={siteContent.faq.metadata.description}
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
