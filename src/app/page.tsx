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
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.home.metadata.title,
  description: siteContent.home.metadata.description,
  openGraph: {
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
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
      <section className="pb-16 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[920px]">
            {siteContent.home.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-6 text-lg font-medium leading-relaxed text-body-color"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
