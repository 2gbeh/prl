import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from "lucide-react";
//
import Logo from "../logo";
import Drawer from "../drawer";
import { MENU } from "@/constants/MENU";

interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => setOpenDrawer((prev) => !prev);
  console.log("🚀 ~ Header");
  // renders
  return (
    <>
      <header className="bg-white">
        <div className="flex-center-between container py-4">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="">
            <button className="block sm:hidden" onClick={toggleDrawer}>
              {openDrawer ? <XIcon size={32} /> : <MenuIcon size={32} />}
            </button>
            <ul className="hidden space-x-5 text-sm font-semibold sm:block">
              {MENU.map(({ label, path }, i) => (
                <Link
                  key={i}
                  href={path}
                  className={router.asPath === path ? "text-brand" : ""}
                >
                  {label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        {openDrawer && <Drawer />}
      </header>
    </>
  );
};

export default React.memo(Header);
