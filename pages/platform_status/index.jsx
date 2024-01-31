import React from "react";
import ImageTitle from "../../components/imageTitle";
import Meta from "../../components/Meta";
import Image from "next/image";

const Platform_status = () => {
  return (
    <div>
      <Meta title="Platform Status || Xhibiter | NFT Marketplace Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- Page Title --> */}

        <ImageTitle
          text="Xhibiter System Status"
          image="/images/page-title/knowledge_base_banner.jpg"
        />

        {/* <!-- Platform Status --> */}
        <section className="relative py-24">
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
            <div className="mx-auto max-w-[53.125rem]">
              <div className="bg-green font-display text-md mb-16 rounded-lg p-4 font-medium text-white">
                <span>All Systems Operational</span>
              </div>

              {/* <!-- Table --> */}
              <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:divide-jacarta-600 divide-jacarta-100 mb-14 divide-y overflow-hidden rounded-lg border bg-white">
                <div className="flex items-center justify-between py-4 px-5">
                  <span className="text-jacarta-700 font-medium dark:text-white">
                    API
                  </span>
                  <span className="text-green">Operational</span>
                </div>
                <div className="flex items-center justify-between py-4 px-5">
                  <span className="text-jacarta-700 font-medium dark:text-white">
                    Desktop Application
                  </span>
                  <span className="text-green">Operational</span>
                </div>
                <div className="flex items-center justify-between py-4 px-5">
                  <span className="text-jacarta-700 font-medium dark:text-white">
                    Website
                  </span>
                  <span className="text-green">Operational</span>
                </div>
                <div className="flex items-center justify-between py-4 px-5">
                  <span className="text-jacarta-700 font-medium dark:text-white">
                    Mobile Application
                  </span>
                  <span className="text-orange-bright">Active Incident</span>
                </div>
                <div className="flex items-center justify-between py-4 px-5">
                  <div className="flex items-center space-x-2">
                    <span className="text-jacarta-700 font-medium dark:text-white">
                      Support Services
                    </span>
                    <span
                      className="inline-block"
                      data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter."
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="dark:fill-jacarta-300 fill-jacarta-500 h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z" />
                      </svg>
                    </span>
                  </div>
                  <span className="text-green">Operational</span>
                </div>
                <div className="flex items-center justify-between py-4 px-5">
                  <span className="text-jacarta-700 font-medium dark:text-white">
                    Emails
                  </span>
                  <span className="text-green">Operational</span>
                </div>
              </div>

              <h2 className="font-display text-jacarta-700 mb-6 text-xl dark:text-white">
                Past Incidents
              </h2>

              <div className="mb-8">
                <div className="dark:border-jacarta-600 border-jacarta-100 text-jacarta-700 mb-4 border-b pb-4 text-lg font-medium dark:text-white">
                  Apr 8, 2022
                </div>
                <p className="dark:text-jacarta-300">
                  No incidents reported today.
                </p>
              </div>

              <div className="mb-8">
                <div className="dark:border-jacarta-600 border-jacarta-100 text-jacarta-700 mb-4 border-b pb-4 text-lg font-medium dark:text-white">
                  Apr 7, 2022
                </div>
                <p className="dark:text-jacarta-300">
                  No incidents reported today.
                </p>
              </div>

              <div className="mb-8">
                <div className="dark:border-jacarta-600 border-jacarta-100 text-jacarta-700 mb-4 border-b pb-4 text-lg font-medium dark:text-white">
                  Apr 6, 2022
                </div>
                <p className="dark:text-jacarta-300">
                  No incidents reported today.
                </p>
              </div>

              <div className="mb-8">
                <div className="dark:border-jacarta-600 border-jacarta-100 text-jacarta-700 mb-4 border-b pb-4 text-lg font-medium dark:text-white">
                  Apr 5, 2022
                </div>
                <p className="text-orange-bright mb-4 font-medium">
                  Database connectivity issues
                </p>
                <div className="mb-6">
                  <p className="dark:text-jacarta-300">
                    <strong className="text-jacarta-700 dark:text-white">
                      Resolved
                    </strong>{" "}
                    - This incident has been resolved.
                  </p>
                  <time className="dark:text-jacarta-300 text-sm">
                    Apr 5, 16:53 UTC
                  </time>
                </div>
                <div className="mb-6">
                  <p className="dark:text-jacarta-300">
                    <strong className="text-jacarta-700 dark:text-white">
                      In progress
                    </strong>{" "}
                    - Scheduled maintenance is currently in progress. We will
                    provide updates as necessary.
                  </p>
                  <time className="dark:text-jacarta-300 text-sm">
                    Apr 5, 16:52 UTC
                  </time>
                </div>
                <div className="mb-6">
                  <p className="dark:text-jacarta-300">
                    <strong className="text-jacarta-700 dark:text-white">
                      Investigating
                    </strong>{" "}
                    - We are experiencing intermittent database connectivity
                    issues. The team is currently investigating.
                  </p>
                  <time className="dark:text-jacarta-300 text-sm">
                    Apr 5, 16:45 UTC
                  </time>
                </div>
              </div>

              <div className="mb-8">
                <div className="dark:border-jacarta-600 border-jacarta-100 text-jacarta-700 mb-4 border-b pb-4 text-lg font-medium dark:text-white">
                  Apr 4, 2022
                </div>
                <p className="dark:text-jacarta-300">
                  No incidents reported today.
                </p>
              </div>

              <div className="dark:border-jacarta-600 border-jacarta-100 text-2xs mt-12 flex items-center justify-between border-t pt-4">
                <a href="#" className="text-blue flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-4 w-4 fill-current"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
                  </svg>
                  <span>Incident History</span>
                </a>
                <a
                  href="https://deothemes.com"
                  className="dark:text-jacarta-300 hover:text-blue"
                >
                  Powered by DeoThemes
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end platform status --> */}
      </div>
    </div>
  );
};

export default Platform_status;
