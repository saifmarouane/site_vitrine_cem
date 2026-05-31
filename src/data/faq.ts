import { FAQItem } from "@/types/energy";

export const faqItems: FAQItem[] = [
  {
    question: "Changer de fournisseur d'energie est-il gratuit ?",
    answer:
      "Oui, le changement de fournisseur est gratuit pour les particuliers. Il n'y a pas de frais de resiliation pour les contrats residentiels d'electricite ou de gaz.",
  },
  {
    question: "Vais-je subir une coupure pendant le changement ?",
    answer:
      "Non. Le changement de fournisseur ne provoque pas de coupure. Le reseau reste le meme, seul le contrat commercial change.",
  },
  {
    question: "Puis-je comparer gaz et electricite en meme temps ?",
    answer:
      "Oui. Vous pouvez comparer les offres d'electricite, de gaz ou les deux selon votre logement et votre consommation.",
  },
  {
    question: "Une offre verte est-elle forcement plus chere ?",
    answer:
      "Pas toujours. Certaines offres vertes peuvent etre competitives selon le fournisseur, la periode et votre profil de consommation.",
  },
  {
    question: "Comment sont calculees les economies ?",
    answer:
      "Les economies sont estimees a partir de votre consommation annuelle, du prix du kWh, de l'abonnement mensuel et des conditions tarifaires de l'offre.",
  },
  {
    question: "Puis-je etre accompagne par telephone ?",
    answer:
      "Oui. Vous pouvez demander un rappel gratuit pour etre accompagne dans la comparaison et le changement de fournisseur.",
  },
];

export const shortFaqItems = faqItems.slice(0, 3);
