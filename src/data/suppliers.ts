import { Supplier } from "@/types/energy";

export const suppliers: Supplier[] = [
  {
    name: "EDF",
    energyTypes: ["Électricité", "Gaz"],
    market: "residentiel_pro",
    description: "Fournisseur historique d'électricité en France.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Engie",
    energyTypes: ["Électricité", "Gaz"],
    market: "residentiel_pro",
    description:
      "Fournisseur historique de gaz, présent aussi sur l'électricité.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "TotalEnergies",
    energyTypes: ["Électricité", "Gaz"],
    market: "residentiel_pro",
    description:
      "Fournisseur alternatif majeur avec offres fixes et indexées.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Eni",
    energyTypes: ["Électricité", "Gaz"],
    market: "residentiel",
    description: "Fournisseur d'énergie proposant des offres gaz et électricité.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Ekwateur",
    energyTypes: ["Électricité verte", "Biogaz"],
    market: "residentiel_pro",
    isGreen: true,
    description: "Fournisseur orienté énergie renouvelable.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Octopus Energy",
    energyTypes: ["Électricité"],
    market: "residentiel",
    isGreen: true,
    description: "Fournisseur connu pour ses offres innovantes.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "OHM Energie",
    energyTypes: ["Électricité", "Gaz"],
    market: "residentiel",
    description: "Fournisseur alternatif avec offres compétitives.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Vattenfall",
    energyTypes: ["Électricité verte"],
    market: "residentiel_pro",
    isGreen: true,
    description: "Fournisseur européen proposant des offres d'électricité.",
    ctaLabel: "Voir les offres",
  },
  {
    name: "Butagaz",
    energyTypes: ["Gaz", "GPL"],
    market: "residentiel_pro",
    description: "Acteur connu du gaz et de l'énergie pour les particuliers.",
    ctaLabel: "Voir les offres",
  },
];
