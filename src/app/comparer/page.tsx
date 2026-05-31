import Breadcrumb from "@/components/Common/Breadcrumb";
import ComparatorMVP from "@/components/Comparator/ComparatorMVP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparer les offres energie | EnergieCompare",
  description:
    "Comparez des offres simulees d'electricite et de gaz selon votre logement, votre consommation et vos preferences.",
};

const ComparerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Comparer les offres"
        description="Renseignez votre logement, votre consommation et vos preferences pour afficher une premiere selection d'offres simulees."
      />
      <ComparatorMVP />
    </>
  );
};

export default ComparerPage;
