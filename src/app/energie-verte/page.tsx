import Breadcrumb from "@/components/Common/Breadcrumb";
import InfoPage from "@/components/Energy/InfoPage";
import { greenEnergyPage } from "@/data/energyPages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offres energie verte | EnergieCompare",
  description:
    "Comparez electricite verte, biogaz, garanties d'origine et criteres environnementaux des offres d'energie.",
};

const EnergieVertePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Energie verte"
        description="Comparez les offres d'electricite verte et de biogaz selon leurs garanties, leurs conditions et leur prix."
      />
      <InfoPage intro={greenEnergyPage.intro} items={greenEnergyPage.items} />
    </>
  );
};

export default EnergieVertePage;
