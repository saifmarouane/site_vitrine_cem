import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnergieCompare — Comparez les offres d'electricite et de gaz",
  description:
    "Comparez les fournisseurs d'energie en France, estimez vos economies et trouvez une offre d'electricite, de gaz ou d'energie verte adaptee a votre logement.",
  openGraph: {
    title: "Comparez les offres d'energie en France",
    description:
      "Electricite, gaz, energie verte : trouvez une offre adaptee et changez facilement de fournisseur.",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
