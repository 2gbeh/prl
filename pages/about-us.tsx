import React from "react";
//
import Ribbon from "@/components/molecules/ribbon";
import Card from "@/components/atoms/card";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";
import { APP } from "@/constants/APP";

export const getStaticProps = () => ({ props: { title: "About Us" } });

export default function AboutUs() {
  console.log("🚀 ~ AboutUs");
  // renders
  return (
    <main>
      <Ribbon heading="About Us" />
      <Card src="/uploads/team.png" size={640}>
        <h2 className="h2">{APP.name_short}</h2>
        <p className="p">
          Are you looking to navigate one of the most popular cities in the
          world, or set off on a road trip into the country? We are here to
          help. A car rental in Florida affords you an unmatched sense of
          freedom and flexibility, inviting you to delve deep into the cultural
          and historical wealth of this beautiful city. Rent a car that best
          suits your trip using our straightforward booking panel. Hiring a car
          has never been easier, and you get to enjoy a variety of benefits.
        </p>
      </Card>
      <section
        className="bg-accent py-10"
        style={backgroundImageStyles("/uploads/team.png", "fixed")}
      >
        <div className="container-md">
          <ul className="flex-centered flex-col gap-5 sm:flex-row">
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-white">10+</h1>
              <p className="font-bold text-brand">Years of Experience</p>
            </li>
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-white">15</h1>
              <p className="font-bold text-brand"> Rental Vehicles</p>
            </li>
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-white">9</h1>
              <p className="font-bold text-brand"> Rental Car Locations</p>
            </li>
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-white">2000</h1>
              <p className="font-bold text-brand"> Happy Clients</p>
            </li>
          </ul>
        </div>
      </section>
      <Card src="/uploads/fleet.png" rtl>
        <h2 className="h2">Our Benefits</h2>
        <p className="p">
          {APP.name_short} has been serving Lauderhill area for over 10+ years,
          offering unparalleled personal customer service and unbeatable prices
          on car rental. Whether you need to rent a car for a business meeting, a
          tourist vacation or just for a drive in Broward County, our devoted
          employees would help you find the most suitable vehicle for your
          needs.
        </p>
        <h3 className="h3">We offer:</h3>
        <ol className="mx-4 list-disc space-y-4">
          <li>Quality vehicles </li>
          <li>Low-cost car rental for every budget. </li>
          <li>Young driver policy: car, van or SUV rental for 18+ years </li>
          <li>Personal and professional customer service available 24/7.</li>
        </ol>
      </Card>
    </main>
  );
}
