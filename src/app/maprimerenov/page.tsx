import Breadcrumb from "@/components/Common/Breadcrumb";
import ResponsiveTable from "@/components/Content/ResponsiveTable";
import MaPrimeRenovSimulator from "@/components/Renovation/MaPrimeRenovSimulator";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.maprimerenov.metadata.title,
  description: siteContent.maprimerenov.metadata.description,
};

const MaPrimeRenovPage = () => {
  const content = siteContent.maprimerenov;

  return (
    <>
      <Breadcrumb pageName={content.h1} description={content.intro} />
      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            <p className="mb-8 rounded-sm bg-primary/10 p-5 text-base font-medium leading-relaxed text-body-color">
              {content.reassurance}
            </p>

            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Qui peut en bénéficier ?
            </h2>
            <p className="mb-6 text-lg font-medium leading-relaxed text-body-color">
              {content.eligibility}
            </p>
            <div className="mb-10 grid gap-4 md:grid-cols-2">
              {content.profiles.map((profile) => (
                <p
                  key={profile}
                  className="rounded-sm bg-white p-5 font-semibold text-body-color shadow-three dark:bg-gray-dark"
                >
                  {profile}
                </p>
              ))}
            </div>

            {content.resourceTables.map((table) => (
              <ResponsiveTable
                key={table.title}
                title={table.title}
                headers={table.headers}
                rows={table.rows}
              />
            ))}
            <ResponsiveTable
              title={content.workTable.title}
              headers={content.workTable.headers}
              rows={content.workTable.rows}
            />

            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
              Les étapes pour obtenir MaPrimeRénov&apos;
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {content.steps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
                >
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 rounded-sm bg-orange/10 p-5 text-base font-semibold leading-relaxed text-body-color">
              {content.support}
            </p>
          </div>
        </div>
      </section>
      <MaPrimeRenovSimulator />
    </>
  );
};

export default MaPrimeRenovPage;
