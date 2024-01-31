import Image from "next/image";
import FaqAccordion from "./accoedion";

const Faq = () => {
  return (
    <div>
      {/* <!-- FAQ --> */}
      <section className="relative py-24 dark:bg-jacarta-800">
        <div className="container">
          <div className="justify-between lg:flex lg:space-x-20">
            <div className="lg:w-[45%]">
              <h2 className="mb-6 font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mb-12 text-lg dark:text-jacarta-300">
                The most comprehensive complete-system warranty in the solar
                industry. Hassle-free replacement, repair or reimbursement.
              </p>

              <FaqAccordion />

              <p className="text-lg text-jacarta-700 dark:text-jacarta-100">
                Any Question?{" "}
                <a href="#" className="text-accent">
                  support@xhibiter.com
                </a>
              </p>
            </div>
            <div className="lg:w-[55%]">
              <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                <div className="relative mb-8 max-w-[13.125rem] self-end rounded-2.5xl bg-green p-8 shadow-2xl">
                  <Image
                    width={60}
                    height={60}
                    src="/images/patterns/pattern_circle_1.png"
                    className="absolute -top-10 -left-8 -z-10 animate-fly dark:z-0 dark:opacity-10"
                    alt="pattern"
                  />
                  <div>
                    <span className="mb-4 block font-display text-base text-white">
                      Individual Investors
                    </span>
                    <span className="mb-4 block font-display text-4xl text-white">
                      7,000+
                    </span>
                    <span className="block text-base text-white">
                      Sed do eiusmod tempor.
                    </span>
                  </div>
                </div>
                <Image
                  width={320}
                  height={320}
                  src="/images/crypto-consultant/faq.jpg"
                  className="mb-8 inline-block rounded-2.5xl"
                  alt="faq"
                />
              </div>
              <div className="relative">
                <Image
                  width={150}
                  height={150}
                  src="/images/patterns/pattern_circle_2.png"
                  className="absolute -bottom-8 right-12 animate-fly dark:opacity-10"
                  alt="pattern"
                />
                <div className="relative mx-auto max-w-xs self-start rounded-2.5xl bg-blue p-8 shadow-2xl">
                  <div className="absolute right-8 top-8 rounded-full bg-white p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-blue"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z" />
                    </svg>
                  </div>

                  <div className="text-left">
                    <span className="mb-4 block font-display text-base text-white">
                      Invested to date
                    </span>
                    <span className="mb-4 block font-display text-4xl text-white">
                      $3.7B
                    </span>
                    <span className="block text-base text-white">
                      Sed do eiusmod tempor.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end faq --> */}
    </div>
  );
};

export default Faq;
