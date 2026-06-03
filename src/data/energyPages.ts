import { EnergyPageContent } from "@/types/energy";

export const electricityPage: EnergyPageContent = {
  intro:
    "L'électricité est l'énergie la plus utilisée dans les foyers français : chauffage, eau chaude, cuisson, appareils électroménagers. Depuis l'ouverture à la concurrence en 2007, les consommateurs ont le libre choix entre le Tarif Réglementé de Vente et les offres de marché.",
  items: [
    {
      title: "Réseau Enedis",
      description:
        "En France, le réseau de distribution est géré par Enedis, anciennement ERDF, pour 95 % du territoire.",
    },
    {
      title: "Production électrique",
      description:
        "La production est assurée majoritairement par le parc nucléaire d'EDF, complété par des sources renouvelables en forte croissance.",
    },
    {
      title: "Tarif Réglementé de Vente",
      description:
        "Le TRV est fixé par l'État et accessible uniquement chez EDF pour l'électricité.",
    },
    {
      title: "Offres de marché",
      description:
        "Les fournisseurs alternatifs proposent des tarifs librement définis, avec prix fixes, prix indexés ou options vertes.",
    },
    {
      title: "Heures creuses",
      description:
        "Les options heures pleines/heures creuses peuvent réduire la facture si une part importante de la consommation a lieu sur les plages creuses.",
    },
    {
      title: "Comparaison régulière",
      description:
        "Comparer les offres électricité permet d'évaluer le prix du kWh, l'abonnement, la puissance compteur et les conditions contractuelles.",
    },
  ],
};

export const gasPage: EnergyPageContent = {
  intro:
    "Le gaz naturel alimente 11 millions de foyers français pour le chauffage central, la production d'eau chaude sanitaire et la cuisson. Depuis la suppression des tarifs réglementés en 2023, tous les nouveaux contrats de gaz relèvent des offres de marché.",
  items: [
    {
      title: "Tarifs 2025",
      description:
        "Les prix du gaz ont connu de fortes variations ces dernières années, rendant la comparaison régulière indispensable.",
    },
    {
      title: "Offres de marché",
      description:
        "Depuis 2023, les nouveaux contrats gaz relèvent des offres de marché proposées par les fournisseurs.",
    },
    {
      title: "Biogaz",
      description:
        "Le biogaz, ou gaz naturel renouvelable, est produit par la méthanisation de déchets organiques.",
    },
    {
      title: "Même réseau",
      description:
        "Le biogaz est injecté dans le même réseau de distribution que le gaz fossile.",
    },
    {
      title: "Bilan carbone",
      description:
        "Son bilan carbone est considéré comme neutre sur le cycle de vie, ce qui en fait une option plus vertueuse.",
    },
    {
      title: "Budget énergétique",
      description:
        "Comparer les offres gaz permet de préserver son budget énergétique selon sa consommation et son usage.",
    },
  ],
};

export const greenEnergyPage: EnergyPageContent = {
  intro:
    "Une offre d'électricité verte certifiée doit impérativement s'appuyer sur des Garanties d'Origine (GO), un mécanisme européen qui atteste que chaque kWh consommé a été produit à partir d'une source renouvelable.",
  items: [
    {
      title: "Électricité verte",
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
        "Elles certifient qu'une quantité équivalente d'énergie renouvelable a été injectée sur le réseau.",
    },
    {
      title: "Impact environnemental",
      description:
        "Comparer une offre verte demande de regarder les engagements, la transparence et la part d'énergie renouvelable.",
    },
    {
      title: "Prix et conditions",
      description:
        "Une offre verte n'est pas toujours plus chere. Le cout depend du fournisseur, du contrat et de votre profil.",
    },
    {
      title: "Choix accompagne",
      description:
        "ÉnergieCompare aide à identifier les offres vertes adaptées à vos priorités et à votre budget.",
    },
  ],
};
