import React from "react";
//
import Tent from "@/components/atoms/tent";
import SectionD from "@/components/molecules/section-d";

export const getStaticProps = () => ({ props: { title: "Return Policy" } });

export default function ReturnPolicy() {
  console.log("🚀 ~ ReturnPolicy");
  // renders
  return (
    <main>
      <SectionD />
      <Tent as="partial">ReturnPolicy</Tent>
    </main>
  );
}
