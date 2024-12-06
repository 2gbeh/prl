import React from "react";
//
import Fab from "@/components/atoms/fab";
import Ribbon from "@/components/molecules/ribbon";
import { APP } from "@/constants/APP";

export const getStaticProps = () => ({ props: { title: "Return Policy" } });

export default function ReturnPolicy() {
  console.log("🚀 ~ ReturnPolicy");
  // renders
  return (
    <main>
      <Fab />
      <Ribbon heading="Return Policy" />
      <section className="container-sm space-y-10 py-20">
        <article className="h3 mb-10">
          At {APP.name_short}, we strive to provide our customers with the best
          possible experience. If for any reason you're not satisfied with your
          rental, we're here to help.
        </article>
        <article className="space-y-5">
          <h2 className="h3">Return Guidelines</h2>
          <ol className="mx-4 list-decimal space-y-5">
            <li>
              Please return your rental vehicle to the original pickup location
              or another location specified by {APP.name_short}.
            </li>
            <li>
              Return the vehicle by the agreed-upon time to avoid late fees.
            </li>
            <li>
              Ensure the vehicle is in the same condition as when you picked it
              up, minus normal wear and tear.
            </li>
          </ol>
        </article>
        <article className="space-y-5">
          <h2 className="h3">Cancellation Policy</h2>
          <p className="">
            If you need to cancel your rental, please contact us at least 24
            hours prior to your scheduled pickup time. Failure to do so may
            result in a cancellation fee.
          </p>
        </article>
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
          <h2 className="h3">Contact Us</h2>
          <p className="">
            If you have any questions or concerns about our return policy,
            please don't hesitate to contact us:
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
