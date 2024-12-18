import React from "react";
import Image from "next/image";

type TSize = number | `${number}` | undefined;

interface IProps {
  src: string;
  size: TSize | [TSize, TSize];
  priority?: boolean;
  rounded?: boolean;
}

const Figure: React.FC<IProps> = ({ src, size, priority = false, rounded }) => {
  const [width, height] = Array.isArray(size) ? size : [size, size];
  console.log("🚀 ~ Figure");
  // renders
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      priority={priority}
      style={{
        // width: "auto",
        // height: "auto",
        borderRadius: rounded ? "100%" : 0,
      }}
    />
  );
};

export default React.memo(Figure);
