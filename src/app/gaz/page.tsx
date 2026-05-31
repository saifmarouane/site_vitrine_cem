import Breadcrumb from "@/components/Common/Breadcrumb";
import InfoPage from "@/components/Energy/InfoPage";
import { gasPage } from "@/data/energyPages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparer les offres gaz | EnergieCompare",
  description:
    "Comparez les offres de gaz selon votre consommation annuelle, votre zone tarifaire et les options prix fixe ou indexe.",
};

const GazPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Gaz"
        description="Comparez les offres gaz selon votre logement, votre zone tarifaire et votre consommation annuelle."
      />
      <InfoPage intro={gasPage.intro} items={gasPage.items} />
    </>
  );
};

export default GazPage;
