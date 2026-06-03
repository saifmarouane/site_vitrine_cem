import Breadcrumb from "@/components/Common/Breadcrumb";
import ComparatorMVP from "@/components/Comparator/ComparatorMVP";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.simulator.metadata.title,
  description: siteContent.simulator.metadata.description,
};

const SimulateurPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.simulator.h1}
        description={siteContent.simulator.intro}
      />
      <section className="pt-12">
        <div className="container">
          <div className="mx-auto max-w-[920px]">
            <p className="mb-5 text-lg font-medium leading-relaxed text-body-color">
              {siteContent.simulator.method}
            </p>
            <p className="rounded-sm bg-primary/10 p-5 text-base font-medium leading-relaxed text-body-color">
              {siteContent.simulator.tip}
            </p>
          </div>
        </div>
      </section>
      <ComparatorMVP />
      <section className="pb-16 md:pb-20 lg:pb-28">
        <div className="container">
          <p className="mx-auto max-w-[920px] text-lg font-medium leading-relaxed text-body-color">
            {siteContent.simulator.conclusion}
          </p>
        </div>
      </section>
    </>
  );
};

export default SimulateurPage;
