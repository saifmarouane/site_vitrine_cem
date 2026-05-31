import Breadcrumb from "@/components/Common/Breadcrumb";
import InfoPage from "@/components/Energy/InfoPage";
import { electricityPage } from "@/data/energyPages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparer les offres electricite | EnergieCompare",
  description:
    "Comprenez le prix du kWh, l'abonnement, la puissance compteur et les heures pleines/heures creuses avant de comparer.",
};

const ElectricitePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Electricite"
        description="Comparez les offres d'electricite selon votre consommation, votre compteur et vos preferences."
      />
      <InfoPage intro={electricityPage.intro} items={electricityPage.items} />
    </>
  );
};

export default ElectricitePage;
