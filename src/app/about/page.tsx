import Breadcrumb from "@/components/Common/Breadcrumb";
import { siteContent } from "@/data/siteContent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.about.metadata.title,
  description: siteContent.about.metadata.description,
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.about.h1}
        description={siteContent.about.history}
      />
      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[920px]">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Notre histoire et notre mission
            </h2>
            <p className="mb-5 text-lg font-medium leading-relaxed text-body-color">
              {siteContent.about.history}
            </p>
            <p className="mb-10 text-lg font-medium leading-relaxed text-body-color">
              {siteContent.about.mission}
            </p>
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
              Notre engagement de transparence
            </h2>
            <div className="mb-10 grid gap-5 md:grid-cols-2">
              {siteContent.about.transparency.map((item) => (
                <p
                  key={item}
                  className="rounded-sm bg-white p-5 font-medium leading-relaxed text-body-color shadow-three dark:bg-gray-dark"
                >
                  {item}
                </p>
              ))}
            </div>
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Notre équipe
            </h2>
            <p className="text-lg font-medium leading-relaxed text-body-color">
              {siteContent.about.team}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
