import React, { PropsWithChildren } from "react";
import { backgroundImageStyles } from "@/utils/backgroundImageStyles";

interface IProps extends PropsWithChildren {
  heading?: string;
}

const Ribbon: React.FC<IProps> = ({ children, heading }) => {
  console.log("🚀 ~ Ribbon");
  // renders
  return (
    <section
      className="flex-col-center min-h-[160px] bg-accent py-4 text-white sm:min-h-[320px]"
      style={backgroundImageStyles("/uploads/ribbon.png")}
    >
      {children ?? (
        <div className="container">
          <h1 className="h2">{heading}</h1>
        </div>
      )}
    </section>
  );
};

export default React.memo(Ribbon);
