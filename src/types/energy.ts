export type Supplier = {
  name: string;
  energyTypes: string[];
  market: "residentiel" | "pro" | "residentiel_pro";
  isGreen?: boolean;
  description: string;
  ctaLabel?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Guide = {
  title: string;
  description: string;
  href: string;
};

export type InfoItem = {
  title: string;
  description: string;
};

export type EnergyPageContent = {
  intro: string;
  items: InfoItem[];
};

export type ComparisonCriterion = {
  label: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Advantage = {
  title: string;
  description: string;
};

export type LeadRequest = {
  name: string;
  email: string;
  phone: string;
  postalCode?: string;
  energyType?: "electricite" | "gaz" | "les_deux";
  message?: string;
};

export type ComparatorFormValues = {
  housingType: "appartement" | "maison";
  surface: string;
  occupants: string;
  postalCode: string;
  energyType: "electricite" | "gaz" | "les_deux";
  currentSupplier: string;
  annualConsumption: string;
  meterPower: string;
  greenOnly: boolean;
  pricePreference: "fixe" | "variable" | "indexe";
  noCommitment: boolean;
  contact: string;
};

export type SimulatedOffer = {
  id: string;
  supplier: string;
  name: string;
  energyType: "electricite" | "gaz" | "les_deux";
  priceType: "fixe" | "variable" | "indexe";
  annualEstimate: number;
  isGreen?: boolean;
  features: string[];
};
