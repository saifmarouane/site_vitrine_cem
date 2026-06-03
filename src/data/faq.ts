import { FAQItem } from "@/types/energy";

export const faqItems: FAQItem[] = [
  {
    question: "Puis-je changer de fournisseur même si j'ai un contrat en cours ?",
    answer:
      "Oui, absolument. La loi française vous autorise à résilier votre contrat d'énergie à tout moment, sans aucun préavis ni frais de résiliation, qu'il s'agisse d'un contrat à prix fixe ou d'un contrat indexé. Votre nouveau fournisseur prend en charge l'intégralité de la démarche auprès de votre réseau de distribution.",
  },
  {
    question: "Le changement de fournisseur entraîne-t-il une coupure de courant ou de gaz ?",
    answer:
      "Non. La continuité de la fourniture est garantie par la loi. Lors d'un changement de fournisseur, seul le contrat commercial change. Le réseau de distribution (Enedis pour l'électricité, GRTgaz ou les réseaux locaux pour le gaz) reste identique et aucune intervention physique sur votre installation n'est nécessaire.",
  },
  {
    question: "Combien de temps prend un changement de fournisseur ?",
    answer:
      "La souscription en ligne prend entre 5 et 10 minutes. La migration effective est ensuite réalisée dans un délai légal maximum de 21 jours ouvrés à compter de la validation de votre nouveau contrat. Dans la pratique, ce délai est souvent de 10 à 15 jours.",
  },
  {
    question: "Qu'est-ce que le tarif réglementé de vente (TRV) et suis-je encore éligible ?",
    answer:
      "Le TRV est un tarif fixé par l'État, proposé exclusivement par EDF pour l'électricité et Engie pour le gaz. Il constitue une 'option de dernier recours' pour les consommateurs qui n'ont pas choisi d'offre de marché. Tout particulier est éligible au TRV et peut revenir dessus à tout moment, même après avoir souscrit une offre de marché.",
  },
  {
    question: "Dois-je faire certifier mon installateur de panneaux solaires ?",
    answer:
      "Pour bénéficier de la prime à l'autoconsommation et de la TVA réduite à 10 %, votre installateur doit obligatoirement être certifié RGE (Reconnu Garant de l'Environnement). Cette certification est délivrée par des organismes accrédités par l'État et renouvelée tous les 4 ans. Sur notre site, tous les installateurs mis en relation sont certifiés RGE.",
  },
  {
    question: "Puis-je cumuler MaPrimeRénov' et la prime à l'autoconsommation solaire ?",
    answer:
      "Non, pas pour la même installation. MaPrimeRénov' subventionne le solaire thermique (chauffe-eau solaire, système solaire combiné pour le chauffage) tandis que la prime à l'autoconsommation concerne le solaire photovoltaïque (production d'électricité). Les deux dispositifs sont complémentaires mais s'appliquent à des équipements distincts.",
  },
  {
    question: "Comment suivre l'avancement de mon dossier MaPrimeRénov' ?",
    answer:
      "Vous pouvez suivre l'état de votre dossier à tout moment sur votre espace personnel maprimerenov.gouv.fr. ÉnergieCompare propose également un service de suivi par email : vous recevez une notification à chaque étape clé. Notre équipe reste disponible par téléphone pour toute question.",
  },
];

export const shortFaqItems = faqItems.slice(0, 3);
