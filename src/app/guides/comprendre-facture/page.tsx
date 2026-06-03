import Breadcrumb from "@/components/Common/Breadcrumb";
import TextPage from "@/components/Content/TextPage";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.billGuide.metadata.title,
  description: siteContent.billGuide.metadata.description,
};

const ComprendreFacturePage = () => {
  const content = siteContent.billGuide;

  return (
    <>
      <Breadcrumb pageName={content.h1} description={content.intro} />
      <TextPage
        paragraphs={[content.intro]}
        ctaLabel="Comparer après lecture de ma facture"
        ctaHref="/comparer"
      />
    </>
  );
};

export default ComprendreFacturePage;
