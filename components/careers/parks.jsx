/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Parks = () => {
  return (
    <div>
      {/* <!-- Perks --> */}
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
          <div className="lg:flex lg:justify-between">
            {/* <!-- Image --> */}
            <div className="lg:w-[55%]">
              <div className="relative">
                <Image
                  src="/images/about/story.jpg"
                  alt="story"
                  width={200}
                  height={200}
                  className="mx-auto mt-8 w-[80%] rotate-[8deg] rounded-[10rem]"
                />
                <Image
                  width={740}
                  height={602}
                  src="/images/hero/3D_elements.png"
                  alt="elements"
                  className="absolute top-0 animate-fly"
                />
              </div>
            </div>

            {/* <!-- Info --> */}
            <div className="py-20 lg:w-[45%] lg:pl-16">
              <h2 className="mb-6 font-display text-2xl text-jacarta-700 dark:text-white">
                Our Perks when you join the team.
              </h2>
              <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                Employees are our number-one priority, so we like to take care
                of them!
              </p>
              <p className="mb-10 dark:text-jacarta-300">
                Every digital creation available through MakersPlace is an
                authentic and truly unique digital creation, signed and issued
                by the creator — made possible by blockchain technology. Even if
                the digital creation is copied, it won't be the authentic and
                originally signed version.
              </p>
              <div className="flex space-x-4 sm:space-x-12">
                <div className="w-1/2">
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                    </svg>
                    <span className="block font-display text-base text-jacarta-700 dark:text-white">
                      Paid family leave
                    </span>
                  </div>
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                    </svg>
                    <span className="block font-display text-base text-jacarta-700 dark:text-white">
                      Flexible hours
                    </span>
                  </div>
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                    </svg>
                    <span className="block font-display text-base text-jacarta-700 dark:text-white">
                      Unlimited Coffee
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                    </svg>
                    <span className="block font-display text-base text-jacarta-700 dark:text-white">
                      Health insurance
                    </span>
                  </div>
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                    </svg>
                    <span className="block font-display text-base text-jacarta-700 dark:text-white">
                      Challenging Work
                    </span>
                  </div>
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-accent"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                    </svg>
                    <span className="block font-display text-base text-jacarta-700 dark:text-white">
                      Great Pay
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end perks --> */}
    </div>
  );
};

export default Parks;
