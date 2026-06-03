import Breadcrumb from "@/components/Common/Breadcrumb";
import { siteContent } from "@/data/siteContent";
import { guides } from "@/data/guides";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.guides.metadata.title,
  description: siteContent.guides.metadata.description,
};

const GuidesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.guides.h1}
        description={siteContent.guides.intro}
      />

      <section className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark"
              >
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {guide.title}
                </h2>
                <p className="mb-5 text-base font-medium leading-relaxed text-body-color">
                  {guide.description}
                </p>
                <Link
                  href={guide.href}
                  className="text-base font-semibold text-primary hover:underline"
                >
                  Lire le guide
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidesPage;
