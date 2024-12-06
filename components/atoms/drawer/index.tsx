import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//
import { MENU } from "@/constants/MENU";

interface IProps {}

const Drawer: React.FC<IProps> = ({}) => {
  const router = useRouter();
  console.log("🚀 ~ Drawer");
  // renders
  return (
    <ul className="flex w-full flex-col border-t text-sm font-semibold">
      {MENU.map(({ label, path }, i) => (
        <Link
          key={i}
          href={path}
          className={router.asPath === path ? "bg-brand p-4 text-white" : "p-4"}
        >
          {label}
        </Link>
      ))}
    </ul>
  );
};

export default React.memo(Drawer);
