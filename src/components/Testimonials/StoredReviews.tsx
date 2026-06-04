"use client";

import { StoredTestimonialReview } from "@/utils/testimonialReviews";
import { useEffect, useState } from "react";

const ReviewCard = ({ review }: { review: StoredTestimonialReview }) => (
  <article className="h-full rounded-lg border border-body-color/10 bg-white p-7 shadow-[0_18px_45px_rgba(11,45,92,0.08)] dark:border-white/10 dark:bg-dark dark:shadow-three">
    <div className="mb-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-1 text-xl text-yellow">
        {Array.from({ length: Math.max(0, Math.min(review.rating, 5)) }).map(
          (_, index) => (
            <span key={index}>★</span>
          ),
        )}
      </div>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {review.rating}/5
      </span>
    </div>

    <p className="mb-6 min-h-[72px] text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
      {review.comment}
    </p>

    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-body-color/10 pt-5 dark:border-white/10">
      <p className="font-semibold text-black dark:text-white">{review.name}</p>
      {review.facebookUrl && (
        <a
          href={review.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Facebook
        </a>
      )}
    </div>
  </article>
);

const StoredReviews = ({ reviews }: { reviews: StoredTestimonialReview[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasCarousel = reviews.length > 3;
  const maxIndex = Math.max(0, reviews.length - 3);

  useEffect(() => {
    if (!hasCarousel || activeIndex >= maxIndex) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => Math.min(current + 1, maxIndex));
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [activeIndex, hasCarousel, maxIndex]);

  if (reviews.length === 0) {
    return null;
  }

  const visibleReviews = hasCarousel
    ? reviews.slice(activeIndex, activeIndex + 3)
    : reviews;

  return (
    <div className="mx-auto mt-12 max-w-[1040px]">
      {/* <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white">
        Avis enregistrés ({reviews.length})
      </h3> */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleReviews.map((review) => (
          <ReviewCard
            key={`${review.createdAt}-${review.facebookUrl}-${review.name}`}
            review={review}
          />
        ))}
      </div>

      {hasCarousel && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full duration-300 ${
                index === activeIndex ? "w-8 bg-primary" : "w-2 bg-body-color/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StoredReviews;
