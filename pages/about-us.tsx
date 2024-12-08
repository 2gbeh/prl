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
        <p className="p">{APP.about}</p>
        <p className="p">{APP.about_2}</p>
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
              <h1 className="h1 text-white">100</h1>
              <p className="font-bold text-brand">Luxury Vehicles</p>
            </li>
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-white">50</h1>
              <p className="font-bold text-brand">Professional Drivers</p>
            </li>
            <li className="flex-1 space-y-4 text-center">
              <h1 className="h1 text-white">2000</h1>
              <p className="font-bold text-brand">Happy Customers</p>
            </li>
          </ul>
        </div>
      </section>
      <Card src="/uploads/fleet.png" rtl>
        <h2 className="h2">Our Benefits</h2>
        <p className="max-w-[360px] font-bold">{APP.tagline}</p>
        <ol className="mx-4 list-disc space-y-4">
          <li>Luxury Limousines and SUVs</li>
          <li>Budget-friendly Chauffer Service Rates.</li>
          <li>Professional Drivers and Customer Service available 24/7.</li>
        </ol>
      </Card>
    </main>
  );
}
