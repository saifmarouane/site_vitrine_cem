import { siteContent } from "@/data/siteContent";
import SectionTitle from "../Common/SectionTitle";

const Testimonials = () => {
  const items = siteContent.testimonials.items;

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Témoignages"
          paragraph="Ils ont changé de fournisseur ou installé leurs panneaux solaires grâce à ÉnergieCompare."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="rounded-sm bg-white p-8 shadow-two dark:bg-dark dark:shadow-three"
            >
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {item.name} — {item.location}
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                « {item.quote} »
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
