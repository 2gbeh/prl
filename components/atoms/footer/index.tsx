import React from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon, SmartphoneIcon } from "lucide-react";
// 
import { APP } from "@/constants/APP";

interface IProps {}

const Footer: React.FC<IProps> = ({}) => {
  const iconProps = { color: APP.theme.brand, size: 18 };
  console.log("🚀 ~ Footer");
  // renders
  return (
    <footer className="bg-accent px-4 text-white">
      <div className="container space-y-10">
        <ul className="flex flex-col gap-10 pt-20 sm:flex-row sm:gap-20">
          <li className="flex-1 space-y-2">
            <h1 className="h3 text-brand">{APP.name_short}</h1>
            <article className="p text-gray-200">{APP.summary}</article>
          </li>
          <li className="flex-1 space-y-4">
            <h1 className="h4">Navigation</h1>
            <ol className="p space-y-2 text-gray-200">
              <li><Link href="/about-us" className="underline hover:text-brand">About Us</Link></li>
              <li><Link href="/return-policy" className="underline hover:text-brand">Return Policy</Link></li>
              <li><Link href="/contact-us" className="underline hover:text-brand">Contact Us</Link></li>
            </ol>
          </li>
          <li className="flex-1 space-y-4">
            <h1 className="h4">Our Services</h1>
            <ol className="p space-y-2 text-gray-200">
              <li>Limousine Rides</li>
              <li>Professional Drivers</li>
              <li>Luxury Cars & SUVs</li>
            </ol>
          </li>
          <li className="flex-1 space-y-4">
            <h1 className="h4">Contact Us</h1>
            <ol className="p space-y-2 text-gray-200">
              <li className="flex gap-4">
                <i className="mt-2">
                  <MapPinIcon {...iconProps} />
                </i>
                {APP.address}
              </li>
              <li className="flex gap-4">
                <i className="mt-1">
                  <SmartphoneIcon {...iconProps} />
                </i>
                <a href={APP.tel} target="_top">
                  {APP.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <i className="mt-1">
                  <MailIcon {...iconProps} />
                </i>
                <a href={APP.mailto} target="_top">
                  {APP.email}
                </a>
              </li>
            </ol>
          </li>
        </ul>
        <address
          className="border-t border-t-gray-400 p-5 text-center text-sm text-gray-200"
          style={{ fontStyle: "normal" }}
        >
          &copy; {new Date().getFullYear()} <b>{APP.name_short}</b>.{" "}
          <span className="inline-block">All rights reserved.</span>
        </address>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
