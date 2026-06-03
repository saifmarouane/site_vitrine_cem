"use client";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Comparer",
    links: [
      { label: "Comparer les offres", href: "/comparer" },
      { label: "Fournisseurs", href: "/fournisseurs" },
      { label: "Électricité verte", href: "/energie-verte" },
    ],
  },
  {
    title: "Énergie",
    links: [
      { label: "Électricité", href: "/electricite" },
      { label: "Gaz", href: "/gaz" },
      { label: "Panneaux solaires", href: "/panneaux-solaires" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Aide",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Glossaire", href: "/glossaire" },
      { label: "Témoignages", href: "/temoignages" },
      { label: "Contact", href: "/contact" },
      { label: "Être rappelé", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-5/12">
            <div className="mb-12 max-w-[420px] lg:mb-16">
              <Link
                href="/"
                className="mb-6 inline-flex items-center"
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="ÉnergieCompare"
                  width={170}
                  height={90}
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Comparez les fournisseurs d&apos;énergie en France, estimez vos
                économies et trouvez une offre d&apos;électricité, de gaz ou
                d&apos;énergie verte adaptée à votre logement.
              </p>
              <Link
                href="/comparer"
                className="inline-flex rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white duration-300 hover:bg-primary/90"
              >
                Comparer les offres
              </Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div
              key={group.title}
              className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12"
            >
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-8 text-xl font-bold text-black dark:text-white">
                  {group.title}
                </h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            © ÉnergieCompare. Service de comparaison d&apos;énergie, sans souscription
            en ligne dans cette version MVP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
