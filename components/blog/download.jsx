import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <>
      {/* <!-- CTA Download App --> */}
      <section className="relative pt-20 dark:bg-jacarta-800">
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
          <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-y-0 lg:space-x-4">
            <div className="mb-10 lg:order-1 lg:w-2/4 xl:w-[30%]">
              <div className="text-center lg:text-left">
                <h2 className="mb-6 font-display text-xl text-jacarta-700 dark:text-white lg:pr-4">
                  Download Xhibiter app
                  <span className="text-jacarta-300 ml-2">
                    to track your NFT portfolio and discover drops
                  </span>
                </h2>
                <div className="inline-flex space-x-4">
                  <a
                    href="#"
                    className="group flex items-center rounded-full bg-white py-3 px-6 text-center font-semibold text-jacarta-500 shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                  >
                    <svg className="icon mr-2 -mt-1 inline-block h-5 w-5 fill-jacarta-500 transition-colors group-hover:fill-white">
                      <use xlinkHref="/icons.svg#icon-apple"></use>
                    </svg>
                    App Store
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded-full bg-white py-3 px-6 text-center font-semibold text-jacarta-500 shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/images/playStore.png"
                      alt="play store"
                      className="mr-2 h-5 w-5 fill-jacarta-700 dark:fill-white"
                    />
                    Google play
                  </a>
                </div>
              </div>
            </div>
            <div className="order-3 text-center lg:order-2 lg:w-1/4 lg:self-end xl:w-[40%]">
              <Image
                width={375}
                height={336}
                src="/images/mobile_app_iphone.png"
                className="inline-block object-containr"
                alt="mobile app"
              />
            </div>
            <div className="mb-10 hidden lg:order-3 lg:block lg:w-2/4 xl:w-[30%]">
              <div className="flex items-center space-x-8 lg:pl-6">
                <div className="inline-block flex-shrink-0 rounded-2.5xl border border-jacarta-100 bg-white p-6">
                  <Image
                    width={100}
                    height={100}
                    className="object-contain"
                    src="/images/qr.png"
                    alt="qr code"
                  />
                </div>
                <div className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="mb-2 h-6 w-6 fill-jacarta-700 dark:fill-white"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
                    </g>
                  </svg>
                  <span className="text-lg text-jacarta-700 dark:text-white">
                    Scan to download Xhibiter app
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end cta download app --> */}
    </>
  );
};

export default Download;
