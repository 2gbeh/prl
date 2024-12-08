import React from "react";
import { useRouter } from "next/router";
//
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";
import { APP } from "@/constants/APP";

interface IProps {}

const Hero: React.FC<IProps> = ({}) => {
  const router = useRouter();
  console.log("🚀 ~ Hero");
  // renders
  return (
    <section
      className="flex-col-center h-[480px] bg-accent text-white sm:h-screen"
      style={backgroundImageStyles("/uploads/hero-invert.png", "fixed")}
    >
      <div className="container">
        <div className="max-w-[520px] space-y-6">
          <hgroup className="space-y-2">
            <h2 className="h4b sm:h4">WE ARE OPEN 24/7 INCLUDING WEEKENDS</h2>
            <h1 className="h1b sm:h1">{APP.name_short}</h1>
          </hgroup>
          <p className="text-lg max-w-[380px]">{APP.tagline}</p>
          <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
            <button
              className="button"
              onClick={() => router.push("/return-policy")}
            >
              RETURN POLICY
            </button>
            <button
              className="button-alt"
              onClick={() => router.push("/contact-us")}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
