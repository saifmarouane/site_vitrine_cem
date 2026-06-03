import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppSupport from "@/components/WhatsAppSupport";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import { siteContent } from "@/data/siteContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteContent.home.metadata.title,
    template: "%s | ÉnergieCompare",
  },
  description: siteContent.home.metadata.description,
  openGraph: {
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
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
          <WhatsAppSupport />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
