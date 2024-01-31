import React from "react";
import { partners_data } from "../../data/partners_data";
import HeadLine from "../../components/headLine";
import { works_data } from "../../data/partners_data";
import Feature_collections_carousel from "../../components/carousel/Feature_collection_carousel";
import Accordion from "../../components/accordion";
import { accordion_data } from "../../data/help_center_data";
import Link from "next/link";
import PartnersComp from "../../components/partners/Partners";
import Meta from "../../components/Meta";
import Image from "next/image";

const Partners = () => {
  return (
    <div>
      <Meta title="Partners || Xhibiter | NFT Marketplace Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- Benefits --> */}
        <section className="relative pt-32 pb-24">
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

          <div className="container">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white">
                Xhibiter Affiliate Partnership
              </h1>
              <p className="dark:text-jacarta-200 mb-16 text-lg leading-normal">
                Interested in making money with Xhibiter? Earn A 20% Commission
                For Every Sale You Refer By Recommending The Most Powerful NFT
                marketplace.
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-3">
              {partners_data.map(({ id, text, icon }) => {
                return (
                  <div
                    className="dark:bg-jacarta-800 rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl"
                    key={id}
                  >
                    <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
                      <div className="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
                        <svg className="icon h-[2.25rem] w-[2.25rem] fill-white">
                          <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-display text-jacarta-700 mx-auto mb-4 max-w-[9.625rem] text-lg dark:text-white">
                      {text}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* <!-- end benefits --> */}

        {/* <!-- Process --> */}
        <section className="relative py-24">
          <div className="container">
            <div className="mx-auto mb-20 max-w-xl text-center">
              <HeadLine
                classes="font-display text-jacarta-700 mb-6 text-center text-3xl font-medium dark:text-white"
                text="How Our Affiliate Program Works"
                pera={true}
              />
            </div>

            <div className="grid gap-7 md:grid-cols-3">
              {works_data.map(({ id, title, text, icon }) => {
                return (
                  <div
                    key={id}
                    className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2xl mb-12 border bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl"
                  >
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border bg-white">
                      <svg className="icon fill-accent h-12 w-12">
                        <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                      </svg>
                    </div>

                    <h3 className="font-display text-jacarta-700 mb-4 text-lg dark:text-white">
                      {title}
                    </h3>
                    <p className="dark:text-jacarta-300">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* <!-- end process --> */}

        {/* <!-- Partner collections / FAQ / Testimonials --> */}
        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              width={1519}
              height={773}
              priority
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full"
            />
          </picture>
          <div className="container">
            <div className="mx-auto mb-8 max-w-xl text-center">
              <h2 className="font-display text-jacarta-700 mb-6 text-center text-3xl font-medium dark:text-white">
                Who has partnered with us
              </h2>
              <p className="dark:text-jacarta-300">
                While we take pride in being the first and largest marketplace
                and in our robust feature set, we also help our partners succeed
                with the following...
              </p>
            </div>

            {/* <!-- Collections Slider --> */}
            <div className="relative">
              <Feature_collections_carousel />
            </div>

            {/* <!-- end collections slider --> */}

            {/* <!-- FAQ --> */}
            <div className="pt-20 pb-24">
              <Accordion data={accordion_data} />
            </div>

            {/* <!-- Testimonials --> */}
            <div className="dark:bg-jacarta-700 rounded-2.5xl flex flex-wrap bg-white p-10 md:flex-nowrap md:space-x-8 md:p-[4.25rem] lg:space-x-16">
              <div className="bg-accent mb-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-full md:mb-0 md:w-16">
                <svg
                  width="22"
                  height="19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                >
                  <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z" />
                </svg>
              </div>

              <div className="mb-4 md:mb-0">
                <p className="text-jacarta-700 text-lg leading-normal dark:text-white">
                  {
                    "Xhibiter is one of the most exciting, important companies in the world right now because it's the portal to the new digital economy. If you're interested in shaping a new business model for creators, this is the team to join."
                  }
                </p>
                <span className="text-jacarta-700 font-display text-md mt-12 block font-medium dark:text-white">
                  Katie Smith
                </span>
                <span className="dark:text-jacarta-400 text-2xs font-medium tracking-tight">
                  General Partner at Entrepreneur
                </span>
              </div>

              <Image
                width={228}
                height={224}
                src="/images/testimonials.jpg"
                alt="smilie lady girl"
                className="rounded-2.5xl w-28 self-start lg:w-auto object-cover h-full"
              />
            </div>
          </div>
        </section>
        {/* <!-- end partner collections / faq / testimonials --> */}
        {/* <!-- CTA --> */}
        <section className="bg-accent py-28">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              {/* <h2 className="font-display mx-auto mb-8 max-w-sm text-3xl text-white">
							Interested In Becoming An Affiliate Partner?
						</h2> */}
              <HeadLine
                text="Interested In Becoming An Affiliate Partner?"
                classes="font-display mx-auto mb-8 max-w-sm text-3xl text-white"
              />
              <p className="mb-10 text-lg leading-normal text-white">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                Xhibiter
              </p>
              <Link
                href="/contact"
                className="text-accent hover:bg-accent-dark inline-block rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- end cta --> */}

        <PartnersComp />
      </div>
    </div>
  );
};

export default Partners;
