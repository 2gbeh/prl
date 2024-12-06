import React, { PropsWithChildren } from "react";
import Figure from "../figure";

interface IProps extends PropsWithChildren {
  src: string;
  rtl?: boolean;
}

const Card: React.FC<IProps> = ({ children, src, rtl }) => {
  console.log("🚀 ~ Card");
  // renders
  return (
    <section className="container flex items-center gap-20 py-20">
      {rtl ? (
        <>
          <article className="space-y-5">{children}</article>
          <Figure src={src} size={640} />
        </>
      ) : (
        <>
          <Figure src={src} size={640} />
          <article className="space-y-5">{children}</article>
        </>
      )}
    </section>
  );
};

export default React.memo(Card);
