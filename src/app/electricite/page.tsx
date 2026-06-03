import Breadcrumb from "@/components/Common/Breadcrumb";
import InfoPage from "@/components/Energy/InfoPage";
import { electricityPage } from "@/data/energyPages";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.electricity.metadata.title,
  description: siteContent.electricity.metadata.description,
};

const ElectricitePage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.electricity.h1}
        description={siteContent.electricity.paragraphs.join(" ")}
      />
      <InfoPage intro={electricityPage.intro} items={electricityPage.items} />
    </>
  );
};

export default ElectricitePage;
