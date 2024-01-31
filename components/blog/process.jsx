import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <>
      {/* <!-- Process --> */}
      <section className="relative py-24 dark:bg-jacarta-800">
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
          <h2 className="mb-10 text-center font-display text-3xl text-jacarta-700 dark:text-white">
            Get Started in 3 Steps
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
              </svg>
              <div className="mb-6 inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                </svg>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Connect your Wallet
              </h3>
              <p className="dark:text-jacarta-300">
                Once {"you've"} set up your wallet of choice, connect it to
                OpenSeaby clicking the NFT Marketplacein the top right corner.
              </p>
            </div>
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#10b981] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(16,185,129,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
              <div className="mb-6 inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-green"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Create your NFT Store
              </h3>
              <p className="dark:text-jacarta-300">
                Click Create and set up your collection. Add social links, a
                description, profile & banner images, and set a secondary sales
                fee.
              </p>
            </div>
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#ef4444] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(239,68,68,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
              </svg>
              <div className="mb-6 inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-12 w-12 fill-red"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                </svg>
              </div>
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Start Selling & Growing
              </h3>
              <p className="dark:text-jacarta-300">
                Choose between auctions, fixed-price listings, and
                declining-price listings. You choose how you want to sell your
                NFTs!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end process --> */}
    </>
  );
};

export default Process;
