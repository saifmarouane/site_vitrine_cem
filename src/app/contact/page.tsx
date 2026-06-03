import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { siteContent } from "@/data/siteContent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteContent.contact.metadata.title,
  description: siteContent.contact.metadata.description,
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={siteContent.contact.h1}
        description={siteContent.contact.intro}
      />

      <section className="pt-12">
        <div className="container">
          <div className="mx-auto grid max-w-[1000px] gap-5 md:grid-cols-2">
            {siteContent.contact.channels.map((channel) => (
              <p
                key={channel}
                className="rounded-sm bg-white p-5 font-medium text-body-color shadow-three dark:bg-gray-dark"
              >
                {channel}
              </p>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[1000px] rounded-sm bg-primary/10 p-5 text-base font-semibold leading-relaxed text-body-color">
            {siteContent.contact.commitment}
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
