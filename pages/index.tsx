import React from "react";
import { useRouter } from "next/router";
//
import Hero from "@/components/molecules/hero";
import Services from "@/components/molecules/services";
import Testimonials from "@/components/molecules/testimonials";
import Ribbon from "@/components/molecules/ribbon";
//
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";
import { APP } from "@/constants/APP";

export default function Home() {
  const router = useRouter();
  console.log("🚀 ~ Home");
  // renders
  return (
    <main>
      <Hero />
      <Services />
      <section
        className="flex-col-center bg-accent py-4 text-white sm:h-screen"
        style={backgroundImageStyles("/uploads/cover-1.png")}
      >
        <div className="container">
          <div className="max-w-[640px] space-y-10 bg-[#000000e6] px-8 py-8 sm:px-14 sm:py-10">
            <hgroup className="max-w-[320px]">
              <h1 className="h3">Why rent your car with {APP.name_short}?</h1>
            </hgroup>
            <article className="p">
              Are you looking to navigate one of the most popular cities in the
              world, or set off on a road trip into the country? We are here to
              help. A car rental in Florida affords you an unmatched sense of
              freedom and flexibility, inviting you to delve deep into the
              cultural and historical wealth of this beautiful city. Rent a car
              that best suits your trip using our straightforward booking panel.
              Hiring a car has never been easier, and you get to enjoy a variety
              of benefits.
            </article>
          </div>
        </div>
      </section>
      <Testimonials />
      <Ribbon>
        <div className="container space-y-10">
          <h1 className="h3 sm:max-w-[640px]">{APP.about}</h1>
          <button className="button" onClick={() => router.push("/contact-us")}>
            CONTACT US
          </button>
        </div>
      </Ribbon>
    </main>
  );
}
