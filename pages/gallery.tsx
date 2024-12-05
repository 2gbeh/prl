import React from "react";
//
import Tent from "@/components/atoms/tent";
import Fab from "@/components/atoms/fab";

export const getStaticProps = () => ({ props: { title: "Car Gallery" } });

export default function Gallery() {
  console.log("🚀 ~ Gallery");
  // renders
  return (
    <>
      <Tent>Gallery</Tent>
      <Fab />
    </>
  );
}
