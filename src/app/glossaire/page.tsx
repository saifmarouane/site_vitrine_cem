import Breadcrumb from "@/components/Common/Breadcrumb";
import ResponsiveTable from "@/components/Content/ResponsiveTable";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.glossary.metadata.title,
  description: siteContent.glossary.metadata.description,
};

const GlossairePage = () => {
  const content = siteContent.glossary;

  return (
    <>
      <Breadcrumb pageName={content.h1} description={content.intro} />
      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            <ResponsiveTable
              title={content.table.title}
              headers={content.table.headers}
              rows={content.table.rows}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GlossairePage;

