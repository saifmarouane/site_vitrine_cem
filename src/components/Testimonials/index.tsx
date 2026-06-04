import { siteContent } from "@/data/siteContent";
import { StoredTestimonialReview } from "@/utils/testimonialReviews";
import SectionTitle from "../Common/SectionTitle";
import ReviewForm from "./ReviewForm";
import StoredReviews from "./StoredReviews";

const Testimonials = ({ reviews = [] }: { reviews?: StoredTestimonialReview[] }) => {
  const items = siteContent.testimonials.items;

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Communauté Facebook"
          paragraph={siteContent.testimonials.intro}
          center
        />

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.name}
              className="rounded-sm bg-white p-8 shadow-two dark:bg-dark dark:shadow-three"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                {item.platform}
              </p>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {item.name}
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                {item.description}
              </p>
              <a
                href={item.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-white duration-300 hover:bg-primary/90"
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>

        <StoredReviews reviews={reviews} />

        <div className="mx-auto max-w-[900px]">
          <ReviewForm />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
