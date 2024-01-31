import Image from "next/image";
import Link from "next/link";
import React from "react";
import Meta from "../components/Meta";

const Error_page = () => {
  return (
    <div>
      <Meta title="404 || Xhibiter | NFT Marketplace Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- 404 --> */}
        <section className="dark:bg-jacarta-800 relative py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              src="/images/gradient_light.jpg"
              alt="gradient"
              width={1920}
              height={789}
            />
          </picture>

          <div className="container">
            <div className="mx-auto max-w-lg text-center">
              <span className="mb-14 inline-block">
                <Image
                  src="/images/404.png"
                  width={336}
                  height={165}
                  alt="gradient"
                />
              </span>
              <h1 className="text-jacarta-700 font-display mb-6 text-4xl dark:text-white md:text-6xl">
                Page Not Found!
              </h1>
              <p className="dark:text-jacarta-300 mb-12 text-lg leading-normal">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <Link
                href="/"
                className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Navigate Back Home
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- end 404 --> */}
      </div>
    </div>
  );
};

export default Error_page;
