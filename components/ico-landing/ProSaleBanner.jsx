import ProSaleCounter from "./ProSaleCounter";

const ProSaleBanner = () => {
  return (
    <div className="container -translate-y-24">
      <div className="rounded-2.5xl bg-light-base px-6 py-16 shadow-sm dark:bg-jacarta-700 md:px-16 lg:px-24">
        <div className="flex-wrap justify-between lg:flex">
          <div className="mb-14">
            <h2 className="mb-4 font-display text-3xl text-jacarta-700 dark:text-white">
              ICO Pre-Sale is <span className="text-accent">Alive!</span>
            </h2>
            <p className="mb-8 text-lg text-jacarta-500 dark:text-jacarta-300">
              Discount Tier: 40%
            </p>
            <a
              href="item.html"
              className="inline-block rounded-full bg-accent py-2.5 px-8 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Buy Token Now
            </a>
          </div>
          {/* End left text */}

          <div>
            <ProSaleCounter />
            {/* End pro sale countdown banner */}

            {/* start Progress */}
            <div className="mb-2 flex justify-between dark:text-jacarta-300">
              <span>
                Reached: <span className="text-green">$19,550,000</span>
              </span>
              <span>$70,000,000</span>
            </div>
            <div className="rounded bg-accent-lighter">
              <div className="h-4 rounded bg-accent" style={{ width: "32%" }} />
            </div>
            <div className="mt-2 flex justify-between dark:text-jacarta-300">
              <span>Softcap</span>
              <span>Hardcap</span>
            </div>
            {/* End progress */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSaleBanner;
