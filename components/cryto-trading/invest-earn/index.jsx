import SingleCoin from "./SingleCoin";

const index = () => {
  return (
    <>
      {/* <!-- Invest --> */}
      <section className="relative bg-light-base py-24 dark:bg-jacarta-900">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Invest and earn
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              Simple & Secure. Search popular coins and start earning
            </p>
          </div>
          {/* End sec-title */}

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
            <SingleCoin />
          </div>

          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Start Earning
            </a>
          </div>
        </div>
      </section>
      {/* <!-- end invest --> */}
    </>
  );
};

export default index;
