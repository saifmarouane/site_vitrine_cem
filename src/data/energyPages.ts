import { EnergyPageContent } from "@/types/energy";

export const electricityPage: EnergyPageContent = {
  intro:
    "Comparer une offre d'electricite demande de regarder le prix du kWh, l'abonnement mensuel, la puissance compteur et les options tarifaires.",
  items: [
    {
      title: "Prix du kWh",
      description:
        "Le prix du kWh determine le cout de votre consommation. Il varie selon le fournisseur, l'offre et les options tarifaires.",
    },
    {
      title: "Abonnement mensuel",
      description:
        "L'abonnement est une part fixe de la facture. Il doit etre compare avec le prix du kWh pour estimer le cout annuel.",
    },
    {
      title: "Puissance compteur",
      description:
        "La puissance compteur influence l'abonnement. Une puissance adaptee evite de payer trop cher pour votre usage.",
    },
    {
      title: "Heures pleines / heures creuses",
      description:
        "Cette option peut etre interessante si une part importante de votre consommation a lieu sur les plages creuses.",
    },
    {
      title: "Offres vertes",
      description:
        "Les offres d'electricite verte reposent notamment sur des garanties d'origine et des engagements fournisseurs.",
    },
    {
      title: "Contrats sans engagement",
      description:
        "Pour les particuliers, changer de fournisseur est gratuit et ne provoque pas de coupure.",
    },
  ],
};

export const gasPage: EnergyPageContent = {
  intro:
    "Pour comparer le gaz, il faut prendre en compte la consommation annuelle, la zone tarifaire, l'abonnement et le type de prix.",
  items: [
    {
      title: "Consommation annuelle",
      description:
        "La consommation annuelle en kWh permet d'estimer le cout global et de comparer les offres sur une base coherente.",
    },
    {
      title: "Zones tarifaires",
      description:
        "Le prix du gaz peut varier selon la zone de distribution et la distance avec les points d'approvisionnement.",
    },
    {
      title: "Prix fixe",
      description:
        "Une offre a prix fixe peut apporter de la visibilite sur une periode donnee, selon les conditions du contrat.",
    },
    {
      title: "Prix indexe",
      description:
        "Une offre indexee suit une reference de prix. Elle peut evoluer a la hausse ou a la baisse.",
    },
    {
      title: "Biogaz",
      description:
        "Certaines offres integrent une part de biogaz ou des engagements lies aux energies renouvelables.",
    },
    {
      title: "Accompagnement",
      description:
        "Un conseiller peut vous aider a comprendre les differences entre les offres gaz disponibles.",
    },
  ],
};

export const greenEnergyPage: EnergyPageContent = {
  intro:
    "Les offres vertes peuvent concerner l'electricite, le gaz ou les deux. L'objectif est de comprendre ce qui est reellement inclus dans le contrat.",
  items: [
    {
      title: "Electricite verte",
      description:
        "Les offres vertes mettent en avant une production renouvelable ou des garanties d'origine associees a votre consommation.",
    },
    {
      title: "Biogaz",
      description:
        "Le biogaz permet d'integrer une part renouvelable dans un contrat gaz selon les fournisseurs et les offres.",
    },
    {
      title: "Garanties d'origine",
      description:
        "Elles certifient qu'une quantite equivalente d'energie renouvelable a ete injectee sur le reseau.",
    },
    {
      title: "Impact environnemental",
      description:
        "Comparer une offre verte demande de regarder les engagements, la transparence et la part d'energie renouvelable.",
    },
    {
      title: "Prix et conditions",
      description:
        "Une offre verte n'est pas toujours plus chere. Le cout depend du fournisseur, du contrat et de votre profil.",
    },
    {
      title: "Choix accompagne",
      description:
        "EnergieCompare aide a identifier les offres vertes adaptees a vos priorites et a votre budget.",
    },
  ],
};
