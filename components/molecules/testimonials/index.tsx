import React from "react";
import { useRouter } from "next/router";
import Figure from "../../atoms/figure";

interface IProps {}

const Testimonials: React.FC<IProps> = ({}) => {
  const router = useRouter();
  console.log("🚀 ~ Testimonials");
  // renders
  return (
    <section className="flex-col-center bg-white py-20 sm:h-screen sm:py-0">
      <div className="container space-y-10 text-center">
        <h1 className="h2">Customer Review</h1>
        <ul className="flex flex-col justify-center gap-10 sm:flex-row">
          {[
            {
              avatar: "/uploads/testimonial-1.png",
              name: "David Williams",
              message: `"My first time ordering a Limousine ride. I am
              completely satisfied with the service. Special thanks to the Drivers, 
              their professionalism is top notch."`,
            },
            {
              avatar: "/uploads/testimonial-3.png",
              name: "Lara Pardo",
              message: `"Very professional, extremely fast and efficient Drivers. This is the second
              time in 3 months, and will definitely use them again and recommend them."`,
            },
            {
              avatar: "/uploads/testimonial-2.png",
              name: "Andy Carlos",
              message: `"Sometimes it is a little magical being driven in a Limousine, 
              the Drivers are quite friendly and professional. Thanks."`,
            },
          ].map((item, i) => (
            <li className="w-[100%] space-y-4 sm:w-[30%]" key={i}>
              <figure className="flex-centered">
                <Figure src={item.avatar} size={100} rounded />
              </figure>
              <h2 className="h4">{item.name}</h2>
              <p className="p">{item.message}</p>
            </li>
          ))}
        </ul>
        <button className="button" onClick={() => router.push("/about-us")}>
          MORE REVIEWS
        </button>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
