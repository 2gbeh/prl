import React from "react";
//
import Tent from "@/components/atoms/tent";
import Ribbon from "@/components/molecules/ribbon";

export const getStaticProps = () => ({ props: { title: "About Us" } });

export default function AboutUs() {
  console.log("🚀 ~ AboutUs");
  // renders
  return (
    <main>
      <Ribbon />
      <Tent as="partial">AboutUs</Tent>
    </main>
  );
}
