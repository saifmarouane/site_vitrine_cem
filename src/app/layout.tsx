import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "EnergieCompare — Comparez les offres d'electricite et de gaz",
    template: "%s | EnergieCompare",
  },
  description:
    "Comparez les fournisseurs d'energie en France, estimez vos economies et trouvez une offre d'electricite, de gaz ou d'energie verte adaptee a votre logement.",
  openGraph: {
    title: "Comparez les offres d'energie en France",
    description:
      "Electricite, gaz, energie verte : trouvez une offre adaptee et changez facilement de fournisseur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <body className={`bg-white dark:bg-dark ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
