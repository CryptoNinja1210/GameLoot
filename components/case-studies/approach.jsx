import Image from "next/image";
import React from "react";

const Approach = () => {
  return (
    <div>
      {/* <!-- Approach --> */}
      <section className="relative py-20 dark:bg-jacarta-800 lg:py-32">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="container">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* <!-- Image --> */}
            <div className="relative lg:w-1/2">
              <Image
                width={68}
                height={68}
                src="/images/patterns/pattern_circle_1.png"
                className="absolute -bottom-4 -left-8 animate-fly dark:opacity-10"
                alt="shape"
              />
              <Image
                width={143}
                height={143}
                src="/images/patterns/pattern_circle_2.png"
                className="absolute -top-14 right-0 animate-fly dark:opacity-10 md:-right-12"
                alt="shape"
              />
              <div className="flex items-center space-x-7">
                <figure className="relative">
                  <Image
                    width={570}
                    height={470}
                    src="/images/case-studies/single_case_study_approach.jpg"
                    className="rounded-3xl w-full h-full object-cover"
                    alt="approach image"
                  />
                </figure>
              </div>
            </div>

            {/* <!-- Info --> */}
            <div className="py-10 lg:w-1/2 lg:pl-20">
              <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                Our Approach
              </h2>
              <p className="mb-8 dark:text-jacarta-300">
                SEO was about achieving significant uplifts in rankings,
                traffic, and revenue. They were ambitious in becoming the market
                leader online for advertising agencies. To achieve their version
                of success we customised a 24 month campaign. The core strategy
                leveraged:
              </p>
              <ul className="list-disc space-y-4 pl-4 dark:text-jacarta-300">
                <li>
                  Optimising the website and content structure to improve the
                  SEO ranking of their website
                </li>
                <li>
                  Cutting edge technical onsite optimisation to streamline
                  search and website performance
                </li>
                <li>
                  Get more high authority and traffic driving links by
                  increasing domain authority
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end approach --> */}
    </div>
  );
};

export default Approach;
