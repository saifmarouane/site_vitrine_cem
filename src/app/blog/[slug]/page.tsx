import blogData, { getBlogBySlug } from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () =>
  blogData.map((blog) => ({
    slug: blog.slug,
  }));

export const generateMetadata = ({
  params,
}: BlogDetailPageProps): Metadata => {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Guide introuvable | EnergieCompare",
    };
  }

  return {
    title: blog.title,
    description: blog.paragraph,
    openGraph: {
      title: blog.title,
      description: blog.paragraph,
      images: [blog.image],
      type: "article",
    },
  };
};

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Breadcrumb pageName={blog.title} description={blog.paragraph} />

      <article className="pb-16 pt-12 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[920px]">
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-body-color">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                {blog.tags[0]}
              </span>
              <span>{blog.publishDate}</span>
              {blog.readingTime && <span>{blog.readingTime}</span>}
            </div>

            <div className="mb-10 overflow-hidden rounded-sm">
              <div className="relative aspect-[37/20] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="mb-10 flex items-center border-b border-body-color/10 pb-8">
              <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                <Image src={blog.author.image} alt={blog.author.name} fill />
              </div>
              <div>
                <p className="font-semibold text-dark dark:text-white">
                  {blog.author.name}
                </p>
                <p className="text-sm text-body-color">
                  {blog.author.designation}
                </p>
              </div>
            </div>

            <p className="mb-10 text-lg font-medium leading-relaxed text-body-color">
              {blog.content.intro}
            </p>

            <div className="space-y-10">
              {blog.content.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base font-medium leading-relaxed text-body-color"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-sm bg-primary/10 p-7">
              <p className="text-base font-semibold leading-relaxed text-dark dark:text-white">
                {blog.content.conclusion}
              </p>
            </div>

            {blog.references && blog.references.length > 0 && (
              <section className="mt-10 rounded-sm bg-white p-7 shadow-three dark:bg-gray-dark">
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Sources et references
                </h2>
                <ul className="space-y-3">
                  {blog.references.map((reference) => (
                    <li key={reference.url}>
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-primary hover:underline"
                      >
                        {reference.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/comparer"
                className="rounded-sm bg-primary px-8 py-4 text-center text-base font-semibold text-white duration-300 hover:bg-primary/90"
              >
                Comparer les offres
              </Link>
              <Link
                href="/contact"
                className="rounded-sm bg-orange px-8 py-4 text-center text-base font-semibold text-white duration-300 hover:bg-orange/90"
              >
                Etre rappele
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetailPage;
