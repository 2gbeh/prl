import React from "react";
import Figure from "@/components/atoms/figure";

interface IProps {}

const Services: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Services");
  // renders
  return (
    <section className="flex-col-center bg-white py-4 sm:h-screen">
      <div className="container space-y-10">
        <h1 className="h2 text-center">Our Services</h1>
        <ul className="flex-centered flex-col gap-10 sm:flex-row">
          <li>
            <figure className="relative">
              <Figure src="/uploads/thumb-1.png" size={480} />
              <figcaption className="h3 absolute bottom-5 left-5 text-white">
                Limousines
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="relative">
              <Figure src="/uploads/thumb-2.png" size={480} />
              <figcaption className="h3 absolute bottom-5 left-5 text-white">
                Luxury Cars
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="relative">
              <Figure src="/uploads/thumb-3.png" size={480} />
              <figcaption className="h3 absolute bottom-5 left-5 text-white">
                Luxury SUVs
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default React.memo(Services);
