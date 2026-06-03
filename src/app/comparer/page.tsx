import Breadcrumb from "@/components/Common/Breadcrumb";
import ComparatorMVP from "@/components/Comparator/ComparatorMVP";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.comparator.metadata.title,
  description: siteContent.comparator.metadata.description,
};

const ComparerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.comparator.h1}
        description={siteContent.comparator.intro}
      />
      <ComparatorMVP />
    </>
  );
};

export default ComparerPage;
