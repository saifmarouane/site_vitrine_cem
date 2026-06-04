import Breadcrumb from "@/components/Common/Breadcrumb";
import ReviewForm from "@/components/Testimonials/ReviewForm";
import StoredReviews from "@/components/Testimonials/StoredReviews";
import { siteContent } from "@/data/siteContent";
import { getStoredTestimonialReviews } from "@/utils/testimonialReviews";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: siteContent.testimonials.metadata.title,
  description: siteContent.testimonials.metadata.description,
};

const TemoignagesPage = async () => {
  const content = siteContent.testimonials;
  const testimonialReviews = await getStoredTestimonialReviews();

  return (
    <>
      <Breadcrumb pageName={content.h1} description={content.metadata.description} />
      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <p className="mx-auto mb-10 max-w-[760px] text-center text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
            {content.intro}
          </p>

          <div className="mx-auto grid max-w-[900px] gap-8 md:grid-cols-2">
            {content.items.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  {testimonial.platform}
                </p>
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {testimonial.name}
                </h2>
                <p className="mb-5 text-base font-medium leading-relaxed text-body-color">
                  {testimonial.description}
                </p>
                <a
                  href={testimonial.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-white duration-300 hover:bg-primary/90"
                >
                  {testimonial.cta}
                </a>
              </article>
            ))}
          </div>

          <StoredReviews reviews={testimonialReviews} />

          <div className="mx-auto max-w-[900px]">
            <ReviewForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default TemoignagesPage;
