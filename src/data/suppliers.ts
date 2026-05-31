import { Supplier } from "@/types/energy";

export const suppliers: Supplier[] = [
  {
    name: "EDF",
    energyTypes: ["Electricite", "Gaz"],
    market: "residentiel_pro",
    description: "Fournisseur historique d'electricite en France.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Engie",
    energyTypes: ["Electricite", "Gaz"],
    market: "residentiel_pro",
    description:
      "Fournisseur historique de gaz, present aussi sur l'electricite.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "TotalEnergies",
    energyTypes: ["Electricite", "Gaz"],
    market: "residentiel_pro",
    description:
      "Fournisseur alternatif majeur avec offres fixes et indexees.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Eni",
    energyTypes: ["Electricite", "Gaz"],
    market: "residentiel",
    description: "Fournisseur d'energie proposant des offres gaz et electricite.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Ekwateur",
    energyTypes: ["Electricite verte", "Biogaz"],
    market: "residentiel_pro",
    isGreen: true,
    description: "Fournisseur oriente energie renouvelable.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Octopus Energy",
    energyTypes: ["Electricite"],
    market: "residentiel",
    isGreen: true,
    description: "Fournisseur connu pour ses offres innovantes.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "OHM Energie",
    energyTypes: ["Electricite", "Gaz"],
    market: "residentiel",
    description: "Fournisseur alternatif avec offres competitives.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Vattenfall",
    energyTypes: ["Electricite verte"],
    market: "residentiel_pro",
    isGreen: true,
    description: "Fournisseur europeen proposant des offres d'electricite.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Butagaz",
    energyTypes: ["Gaz", "GPL"],
    market: "residentiel_pro",
    description: "Acteur connu du gaz et de l'energie pour les particuliers.",
    ctaLabel: "Voir les offres",
  },
];
