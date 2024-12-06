import React from "react";
//
import Tent from "@/components/atoms/tent";
import SectionD from "@/components/molecules/section-d";

export const getStaticProps = () => ({ props: { title: "About Us" } });

export default function AboutUs() {
  console.log("🚀 ~ AboutUs");
  // renders
  return (
    <main>
      <SectionD />
      <Tent as="partial">AboutUs</Tent>
    </main>
  );
}
