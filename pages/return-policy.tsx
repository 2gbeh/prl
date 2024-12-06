import React from "react";
//
import Tent from "@/components/atoms/tent";
import Ribbon from "@/components/molecules/ribbon";

export const getStaticProps = () => ({ props: { title: "Return Policy" } });

export default function ReturnPolicy() {
  console.log("🚀 ~ ReturnPolicy");
  // renders
  return (
    <main>
      <Ribbon />
      <Tent as="partial">ReturnPolicy</Tent>
    </main>
  );
}
