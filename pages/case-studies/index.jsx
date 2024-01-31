import React from "react";
import { case_studies_data } from "../../data/case-studies_data";
import { Partners } from "../../components/component";
import Link from "next/link";
import Meta from "../../components/Meta";
import Image from "next/image";

const Case_studies = () => {
  return (
    <div>
      <Meta title="Case_studies || Xhibiter | NFT Marketplace Next.js Template" />
      {/* <!-- Page Title --> */}
      <section className="relative py-32 mt-[95px]">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient.jpg"
            alt="gradient"
            className="h-full w-full object-cover"
          />
        </picture>
        <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient_dark.jpg"
            alt="gradient dark"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="container relative z-10">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-6 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
              Case Studies
            </h1>
            <p className="text-lg leading-normal dark:text-jacarta-200">
              Be part of our young and innovative team, and we build trust,
              embrace feedback, grow rapidly, and love our work.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- end page title --> */}

      {/* <!-- Case Studies --> */}
      <section className="relative pb-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {case_studies_data.map((item) => {
              const { id, routePath, img, title } = item;
              return (
                <article key={id}>
                  <Link
                    href={"/case-studies/" + routePath}
                    className="dec no-underline"
                  >
                    <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                      <Image
                        width={561}
                        height={498}
                        className="h-full object-cover w-full"
                        src={img}
                        alt={title}
                      />
                    </figure>
                  </Link>
                  <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                    <Link
                      href={"/case-studies/" + routePath}
                      className="no-underline group-hover:text-accent "
                    >
                      {title}
                    </Link>
                  </h2>
                  <Link
                    href={"/case-studies/" + routePath}
                    className="no-underline text-sm font-bold text-accent"
                  >
                    View Case Study
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/collection/avatar_1"
              className="no-underline inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Load More
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- end case studies --> */}
      <Partners />
    </div>
  );
};

export default Case_studies;
