import Breadcrumb from "@/components/Common/Breadcrumb";
import InfoPage from "@/components/Energy/InfoPage";
import { greenEnergyPage } from "@/data/energyPages";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.greenEnergyGuide.metadata.title,
  description: siteContent.greenEnergyGuide.metadata.description,
};

const EnergieVertePage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.greenEnergyGuide.h1}
        description={siteContent.greenEnergyGuide.intro}
      />
      <InfoPage intro={greenEnergyPage.intro} items={greenEnergyPage.items} />
    </>
  );
};

export default EnergieVertePage;
