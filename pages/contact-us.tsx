import React from "react";
import { MailIcon, MapPinIcon, SmartphoneIcon } from "lucide-react";
//
import Testimonials from "@/components/molecules/testimonials";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";
import { APP } from "@/constants/APP";

export const getStaticProps = () => ({ props: { title: "Contact Us" } });

export default function ContactUs() {
  console.log("🚀 ~ ContactUs");
  // renders
  return (
    <main>
      <section
        className="flex-col-center bg-accent py-4 text-white sm:h-screen"
        style={backgroundImageStyles("/images/map.png")}
      >
        <div className="container">
          <div className="max-w-[640px] space-y-10 bg-[#000000cc] px-8 py-8 sm:px-14 sm:py-10">
            <h1 className="h3 flex gap-4">
              <i className="mt-1">
                <MapPinIcon color={APP.theme.brand} size={24} />
              </i>
              Address
            </h1>
            <article className="h2">{APP.address}</article>
            <div className="space-y-6 sm:flex sm:items-center sm:space-x-8">
              <button className="button flex items-center gap-2">
                <MailIcon size={18} color="white" />
                <a href={APP.mailto} target="_top">
                  {APP.email}
                </a>
              </button>
              <button className="button-alt flex items-center gap-2">
                <SmartphoneIcon size={18} />
                <a href={APP.tel} target="_top">
                  {APP.phone}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>Frequently Asked Questions</section>
    </main>
  );
}
