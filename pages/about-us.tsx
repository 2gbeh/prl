import React from "react";
//
import Ribbon from "@/components/molecules/ribbon";
import Figure from "@/components/atoms/figure";
import { APP } from "@/constants/APP";

export const getStaticProps = () => ({ props: { title: "About Us" } });

export default function AboutUs() {
  console.log("🚀 ~ AboutUs");
  // renders
  return (
    <main>
      <Ribbon heading="About Us" />
      <div className="">
        <section className="container flex items-center gap-20 py-20">
          <Figure src="/uploads/hero.png" size={640} />
          <article className="space-y-5">
            <h2 className="h2">{APP.name_short}</h2>
            <p className="p">
              Are you looking to navigate one of the most popular cities in the
              world, or set off on a road trip into the country? We are here to
              help. A car rental in Florida affords you an unmatched sense of
              freedom and flexibility, inviting you to delve deep into the
              cultural and historical wealth of this beautiful city. Rent a car
              that best suits your trip using our straightforward booking panel.
              Hiring a car has never been easier, and you get to enjoy a variety
              of benefits.
            </p>
          </article>
        </section>
        <section className="bg-accent py-10">
          <ul className="flex-centered flex-col gap-5 sm:flex-row">
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-brand">18</h1>
              <p className="text-white">Years of Experience</p>
            </li>
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-brand">1540+</h1>
              <p className="text-white"> Rental Vehicles</p>
            </li>
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-brand">20</h1>
              <p className="text-white"> Rental Car Locations</p>
            </li>
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-brand">5000+</h1>
              <p className="text-white"> Happy Clients</p>
            </li>
          </ul>
        </section>
        <section className="container">
          <h2>Our Benefits</h2>
          <p>
            Auto Leasing has been serving Florida metropolitan area for over
            eighteen years, offering unparalleled personal customer service and
            unbeatable prices on car rental.Whether you need to rent a car for a
            business meeting, a tourist vacation or just for a drive in Florida
            city, our devoted employees would help you find the most suitable
            vehicle for your needs.
          </p>
          <h3>We offer:</h3>
          <ol>
            <li>Quality vehicles </li>
            <li>Low-cost car rental for every budget. </li>
            <li>Young driver policy: car, van or SUV rental for 18+ years </li>
            <li>Personal and professional customer service available 24/7.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
