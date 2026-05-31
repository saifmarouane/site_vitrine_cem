import Link from "next/link";
import { InfoItem } from "@/types/energy";

const InfoPage = ({
  intro,
  items,
  ctaLabel = "Comparer les offres",
  ctaHref = "/comparer",
}: {
  intro: string;
  items: InfoItem[];
  ctaLabel?: string;
  ctaHref?: string;
}) => {
  return (
    <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[820px] text-center">
          <p className="text-lg font-medium leading-relaxed text-body-color">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark"
            >
              <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                {item.title}
              </h2>
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={ctaHref}
            className="inline-flex rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
