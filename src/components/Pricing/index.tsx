import Link from "next/link";

const benefits = [
  "Lecture claire des offres",
  "Estimation selon votre profil",
  "Rappel gratuit par un conseiller",
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="rounded-sm bg-primary px-8 py-12 text-center shadow-three md:px-12 lg:px-16">
          <h2 className="mx-auto mb-5 max-w-[760px] text-3xl font-bold leading-tight text-white sm:text-4xl">
            Pret a comparer votre offre d&apos;energie ?
          </h2>
          <p className="mx-auto mb-8 max-w-[720px] text-base font-medium leading-relaxed text-white/90 sm:text-lg">
            Lancez une comparaison ou demandez a etre rappele par un conseiller
            pour trouver une offre adaptee a votre situation.
          </p>
          <div className="mb-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/comparer"
              className="rounded-sm bg-white px-8 py-4 text-base font-semibold text-primary duration-300 hover:bg-white/90"
            >
              Comparer maintenant
            </Link>
            <Link
              href="/contact"
              className="rounded-sm bg-orange px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-orange/90"
            >
              Etre rappele
            </Link>
          </div>
          <div className="grid gap-4 text-sm font-semibold text-white/90 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <span key={benefit}>{benefit}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
