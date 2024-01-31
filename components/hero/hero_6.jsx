import Link from "next/link";
import React from "react";
import { hero_6_data } from "../../data/hero_6_data";
import Image from "next/image";

const Hero_6 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="relative px-6 pb-8 py-24 md:pt-32">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
              {hero_6_data.slice(0, 4).map((item) => {
                const { id, title, img, authorName } = item;
                const itemLink = img
                  .split("/")
                  .slice(-1)
                  .toString()
                  .replace("_square.jpg", "")
                  .replace(".gif", "");
                return (
                  <article key={id}>
                    <div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-700">
                      <figure className="relative">
                        <Link
                          href={`/item/${itemLink}`}
                          className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20"
                        >
                          <Image
                            width={470}
                            height={470}
                            src={img}
                            alt={title}
                            className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                          />
                        </Link>
                      </figure>
                      <div className="pointer-events-none absolute bottom-0 w-full p-5">
                        <h2 className="font-display text-base leading-none text-white xl:text-lg">
                          {title}
                        </h2>
                        <span className="text-2xs text-white">
                          {authorName}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            {hero_6_data.slice(4, -4).map((item) => {
              const { id, title, img, authorName } = item;
              const itemLink = img
                .split("/")
                .slice(-1)
                .toString()
                .replace(".jpg", "")
                .replace("_square", "")
                .replace(".gif", "");
              return (
                <article key={id}>
                  <div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-700">
                    <figure className="relative">
                      <Link
                        href={`/item/${itemLink}`}
                        className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20"
                      >
                        <Image
                          width={470}
                          height={470}
                          src={img}
                          alt={title}
                          className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                        />
                      </Link>
                    </figure>
                    <div className="pointer-events-none absolute bottom-0 w-full p-5">
                      <h2 className="font-display text-base leading-none text-white xl:text-lg">
                        {title}
                      </h2>
                      <span className="text-2xs text-white">{authorName}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
              {hero_6_data.slice(5, 9).map((item) => {
                const { id, title, img, authorName } = item;
                const itemLink = img
                  .split("/")
                  .slice(-1)
                  .toString()
                  .replace(".jpg", "")
                  .replace("_square", "")
                  .replace(".gif", "");
                return (
                  <article key={id}>
                    <div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-700">
                      <figure className="relative">
                        <Link
                          href={`/item/${itemLink}`}
                          className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20"
                        >
                          <Image
                            width={470}
                            height={470}
                            src={img}
                            alt={title}
                            className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                          />
                        </Link>
                      </figure>
                      <div className="pointer-events-none absolute bottom-0 w-full p-5">
                        <h2 className="font-display text-base leading-none text-white xl:text-lg">
                          {title}
                        </h2>
                        <span className="text-2xs text-white">
                          {authorName}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_6;
