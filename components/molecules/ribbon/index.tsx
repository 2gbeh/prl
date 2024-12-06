import React from "react";
import { useRouter } from "next/router";
//
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";
import { APP } from "@/constants/APP";

interface IProps {}

const Ribbon: React.FC<IProps> = ({}) => {
  const router = useRouter();
  console.log("🚀 ~ Ribbon");
  // renders
  return (
    <section
      className="flex-col-center min-h-[320px] bg-accent py-4 text-white"
      style={backgroundImageStyles("/uploads/ribbon.png")}
    >
      <div className="container space-y-10">
        <h1 className="h3 sm:max-w-[640px]">{APP.about}</h1>
        <button className="button" onClick={() => router.push("/contact-us")}>
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default React.memo(Ribbon);
