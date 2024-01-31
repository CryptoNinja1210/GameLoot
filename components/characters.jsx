import React from "react";
import Characters_carousel from "./carousel/characters_carousel";
import Image from "next/image";

const Characters = () => {
  return (
    <div>
      {/* <!-- Characters Slider --> */}
      <section className="characters-section relative pb-12 pt-24 lg:py-36">
        <picture className="pointer-events-none absolute inset-0 -z-10">
          <Image
            width={1519}
            height={1088}
            src="/images/gradient_creative.jpg"
            alt="gradient"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="container">
          <h2 className="mx-auto mb-16 max-w-md text-center font-display text-3xl text-white">
            Collect Them All. Be the True Ownership for Players
          </h2>
        </div>
        <div className="relative px-6 pb-16 sm:px-0">
          <Characters_carousel />
        </div>
      </section>
      {/* <!-- end characters slider --> */}
    </div>
  );
};

export default Characters;
