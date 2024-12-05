import React from "react";
//
import Tent from "@/components/atoms/tent";

export const getStaticProps = () => ({ props: { title: "Contact Us" } });

export default function ContactUs() {
  console.log("🚀 ~ ContactUs");
  // renders
  return <Tent>ContactUs</Tent>;
}

