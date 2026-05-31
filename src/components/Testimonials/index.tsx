import { shortFaqItems } from "@/data/faq";
import SectionTitle from "../Common/SectionTitle";

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Questions frequentes"
          paragraph="Les points essentiels a connaitre avant de comparer ou de changer de fournisseur d'energie."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {shortFaqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-sm bg-white p-8 shadow-two dark:bg-dark dark:shadow-three"
            >
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {item.question}
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
