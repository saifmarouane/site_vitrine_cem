import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { siteContent } from "@/data/siteContent";

const Features = () => {
  const { home } = siteContent;

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Pourquoi utiliser ÉnergieCompare ?"
            paragraph="Trois garanties pour comparer les offres d'électricité, les offres gaz et les fournisseurs énergie avec une lecture claire du coût annuel réel."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {home.reassurance.map((feature, index) => (
              <SingleFeature
                key={feature.title}
                feature={{
                  id: index + 1,
                  icon: featuresData[index]?.icon,
                  title: feature.title,
                  paragraph: feature.text,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
