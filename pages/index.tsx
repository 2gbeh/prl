import React from "react";
//
import Hero from "@/components/molecules/hero";
import SectionA from "@/components/molecules/section-a";
import SectionC from "@/components/molecules/section-c";
import Testimonials from "@/components/molecules/testimonials";
import SectionD from "@/components/molecules/section-d";
import Fab from "@/components/atoms/fab";

export default function Home() {
  console.log("🚀 ~ Home");
  // renders
  return (
    <main>
      <Hero />
      <SectionA />
      <SectionC />
      <Testimonials />
      <SectionD />
      <Fab />
    </main>
  );
}