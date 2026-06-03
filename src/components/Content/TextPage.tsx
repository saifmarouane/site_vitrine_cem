import Link from "next/link";

type TextPageProps = {
  paragraphs?: string[];
  cards?: { title: string; text: string }[];
  ctaLabel?: string;
  ctaHref?: string;
};

const TextPage = ({
  paragraphs = [],
  cards = [],
  ctaLabel = "Comparer les offres",
  ctaHref = "/comparer",
}: TextPageProps) => {
  return (
    <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="mx-auto max-w-[920px]">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-6 text-lg font-medium leading-relaxed text-body-color"
            >
              {paragraph}
            </p>
          ))}

          {cards.length > 0 && (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
                >
                  <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {card.title}
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-body-color">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href={ctaHref}
              className="inline-flex rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextPage;
