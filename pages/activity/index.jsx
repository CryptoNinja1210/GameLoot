import React from "react";
import Activity_item from "../../components/collectrions/Activity_item";
import Meta from "../../components/Meta";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Meta title="Activity || Xhibiter | NFT Marketplace Next.js Template" />
      <section className="relative mt-24 lg:pb-48 pb-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={1119}
            priority
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full object-cover w-full"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
            Activity
          </h1>

          <Activity_item />
        </div>
      </section>
    </>
  );
};

export default index;
