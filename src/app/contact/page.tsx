import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact et rappel gratuit | EnergieCompare",
  description:
    "Demandez un rappel gratuit pour etre accompagne dans la comparaison des offres d'electricite et de gaz.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Laissez vos coordonnees pour etre accompagne dans votre comparaison ou poser une question a un conseiller."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
