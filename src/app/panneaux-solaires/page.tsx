import Breadcrumb from "@/components/Common/Breadcrumb";
import ResponsiveTable from "@/components/Content/ResponsiveTable";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.solar.metadata.title,
  description: siteContent.solar.metadata.description,
};

const PanneauxSolairesPage = () => {
  const content = siteContent.solar;

  return (
    <>
      <Breadcrumb pageName={content.h1} description={content.intro} />
      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            {content.sections.map((section) => (
              <section key={section.title} className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-5 text-lg font-medium leading-relaxed text-body-color"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.cards && (
                  <div className="grid gap-6 md:grid-cols-3">
                    {section.cards.map((card) => (
                      <article
                        key={card.title}
                        className="rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
                      >
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          {card.title}
                        </h3>
                        <p className="text-base font-medium leading-relaxed text-body-color">
                          {card.text}
                        </p>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <ResponsiveTable
              title={content.profitability.title}
              headers={content.profitability.headers}
              rows={content.profitability.rows}
              note={content.profitability.note}
            />

            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
              Les aides disponibles en 2025
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {content.aids.map((aid) => (
                <article
                  key={aid.title}
                  className="rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
                >
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {aid.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color">
                    {aid.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PanneauxSolairesPage;

