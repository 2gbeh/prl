import React, { PropsWithChildren } from "react";
import Figure from "../figure";

interface IProps extends PropsWithChildren {
  src: string;
  size?: number;
  rtl?: boolean;
}

const Card: React.FC<IProps> = ({ children, src, size = 480, rtl }) => {
  console.log("🚀 ~ Card");
  // renders
  return (
    <section className="flex-col container flex items-center gap-10 sm:gap-20 py-10 sm:py-20 sm:flex-row">
      {rtl ? (
        <>
          <article className="space-y-5">{children}</article>
          <Figure src={src} size={size} />
        </>
      ) : (
        <>
          <Figure src={src} size={size} />
          <article className="space-y-5">{children}</article>
        </>
      )}
    </section>
  );
};

export default React.memo(Card);
