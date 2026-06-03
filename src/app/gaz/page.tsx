import Breadcrumb from "@/components/Common/Breadcrumb";
import InfoPage from "@/components/Energy/InfoPage";
import { gasPage } from "@/data/energyPages";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.gas.metadata.title,
  description: siteContent.gas.metadata.description,
};

const GazPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.gas.h1}
        description={siteContent.gas.paragraphs.join(" ")}
      />
      <InfoPage intro={gasPage.intro} items={gasPage.items} />
    </>
  );
};

export default GazPage;
