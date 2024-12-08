import React from "react";
//
import Ribbon from "@/components/molecules/ribbon";
import { APP } from "@/constants/APP";

export const getStaticProps = () => ({ props: { title: "Return Policy" } });

export default function ReturnPolicy() {
  console.log("🚀 ~ ReturnPolicy");
  // renders
  return (
    <main>
      <Ribbon heading="Return Policy" />
      <section className="container-sm space-y-10 py-10 sm:py-20">
        <article className="space-y-5">
          <h2 className="h3">Refund Policy</h2>
          <p className="text-brand">
            <b>
              We do not issue refunds on services ordered because we do not
              accept payment before service.
            </b>
          </p>
        </article>
        <article className="space-y-5">
          <h2 className="h3">Cancellation Policy</h2>
          <ol className="mx-4 list-decimal space-y-5">
            <li>
              Riders can cancel their ride request at any time before the driver
              arrives.
            </li>
            <li>
              If the driver has already arrived, the rider may be charged a
              cancellation fee.
            </li>
            <li>
              To initiate a cancellation, please contact our customer support
              via our website's <b>Contact Us</b> page.
            </li>
            <li>
              Please provide your ride details, including the ride ID and reason
              for cancellation request.
            </li>
          </ol>
        </article>
        <article className="space-y-5">
          <h2 className="h3">Contact Us</h2>
          <p className="">
            By using our service, you agree to our return and refund policy. If
            you have any questions or concerns, please don't hesitate to contact
            us.
          </p>
          <p className="">
            <h3 className="h4">{APP.name_short}</h3>
            <a href={APP.tel} target="_top">
              {APP.phone}
            </a>
            <br />
            <a href={APP.mailto} target="_top">
              {APP.email}
            </a>
          </p>
        </article>
        <p className="">
          We appreciate your business and look forward to serving you in the
          future.
        </p>
      </section>
    </main>
  );
}
