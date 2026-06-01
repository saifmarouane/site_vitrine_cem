import Breadcrumb from "@/components/Common/Breadcrumb";
import MaPrimeRenovSimulator from "@/components/Renovation/MaPrimeRenovSimulator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulateur MaPrimeRenov | Aides renovation energie",
  description:
    "Estimez votre eligibilite MaPrimeRenov, les aides possibles pour vos travaux et les economies d'energie attendues.",
};

const SimulateurPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Simulateur MaPrimeRenov"
        description="Evaluez rapidement votre projet de renovation energetique, les aides possibles et les economies associees."
      />
      <MaPrimeRenovSimulator />
    </>
  );
};

export default SimulateurPage;
