import Breadcrumb from "@/components/Common/Breadcrumb";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.changeSupplier.metadata.title,
  description: siteContent.changeSupplier.metadata.description,
};

const ChangerFournisseurPage = () => {
  const content = siteContent.changeSupplier;

  return (
    <>
      <Breadcrumb pageName={content.h1} description={content.intro} />
      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[920px]">
            {content.sections.map((section) => (
              <article key={section.title}>
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-5 text-lg font-medium leading-relaxed text-body-color"
                  >
                    {paragraph}
                  </p>
                ))}
                <ul className="grid gap-4 md:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-sm bg-white p-5 font-medium leading-relaxed text-body-color shadow-three dark:bg-gray-dark"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangerFournisseurPage;

