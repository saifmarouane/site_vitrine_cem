import Breadcrumb from "@/components/Common/Breadcrumb";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.testimonials.metadata.title,
  description: siteContent.testimonials.metadata.description,
};

const TemoignagesPage = () => {
  const content = siteContent.testimonials;

  return (
    <>
      <Breadcrumb pageName={content.h1} description={content.metadata.description} />
      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {content.items.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark"
              >
                <p className="mb-4 text-xl font-bold text-orange">
                  {testimonial.rating}
                </p>
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {testimonial.name} — {testimonial.location}
                </h2>
                <p className="mb-5 text-base font-medium leading-relaxed text-body-color">
                  « {testimonial.quote} »
                </p>
                <p className="text-sm font-semibold leading-relaxed text-primary">
                  {testimonial.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TemoignagesPage;

