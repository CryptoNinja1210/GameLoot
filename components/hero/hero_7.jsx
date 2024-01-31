import Image from "next/image";
import Link from "next/link";

const Hero_6 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="relative pb-32 pt-20 lg:pt-48">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient.jpg"
            alt="gradient"
            className="h-full w-full object-cover"
          />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <Image
            width={1519}
            height={773}
            priority
            className="h-full w-full"
            src="/images/gradient_dark.jpg"
            alt="gradient dark"
          />
        </picture>
        <Image
          width={613}
          height={415}
          src="/images/patterns/pattern_donut.png"
          alt="pattern donut"
          className="absolute right-0 top-0 -z-10"
        />

        <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
          <div className="grid h-full items-center gap-4 lg:grid-cols-12">
            <div className="col-span-5 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20">
              <p className="mb-10 text-xs font-bold uppercase text-jacarta-500 dark:text-jacarta-200">
                Discover How To Earn More
              </p>
              <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">
                We Ensure & Transform NFT Business Growing
              </h1>
              <p className="mb-8 max-w-md text-center text-lg dark:text-jacarta-200 lg:text-left">
                Every digital creation available through MakersPlace is an
                authentic and truly unique.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Contact Us
                </Link>
                <Link
                  href="/collection/explore_collection"
                  className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* <!-- Hero image --> */}
            <div className="col-span-6">
              <div className="relative text-center lg:pl-32 lg:text-right">
                <div className="absolute -left-[18%] top-1/3 inline-block animate-fly rounded-2lg bg-[#EAF7E1] p-6 shadow-2xl sm:left-[5%] md:left-20">
                  <div className="flex gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-green"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z" />
                      </svg>
                    </span>
                    <div className="text-left">
                      <span className="block font-display text-3xl text-green">
                        3x
                      </span>
                      <span className="block font-display text-sm text-jacarta-600">
                        Increased Profits
                      </span>
                    </div>
                  </div>
                </div>
                <Image
                  width={524}
                  height={670}
                  src="/images/hero/hero_consultant_main.jpg"
                  alt="crypto consultant hero"
                  className="inline-block rounded-2.5xl"
                />

                <div className="absolute bottom-0 -right-[5%] inline-block animate-fly rounded-2lg bg-white p-8 shadow-2xl sm:bottom-28 sm:right-[5%] lg:-right-[17%]">
                  <div className="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="absolute right-6 top-6 fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
                    </svg>
                    <span className="block font-display text-3xl text-[#737EF2]">
                      +10k
                    </span>
                    <span className="mb-5 block font-display text-sm text-jacarta-600">
                      Happy customers
                    </span>
                    <Image
                      width={152}
                      height={24}
                      src="/images/crypto-consultant/happy_customers.png"
                      alt="happy customers"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_6;
