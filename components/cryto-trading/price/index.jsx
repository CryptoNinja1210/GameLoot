import CryptoTableList from "./CryptoTableList";

const index = () => {
  return (
    <>
      {/* <!-- Crypto Prices --> */}
      <section className="bg-jacarta-700 pb-24 pt-32 dark:bg-jacarta-900">
        <div className="container">
          <div className="scrollbar-custom overflow-x-auto">
            <div className="rounded-lg bg-white dark:bg-jacarta-700 dark:text-jacarta-300">
              <div className="flex items-center dark:border-jacarta-600 border-jacarta-100 border  text-sm ">
                <div className="hidden w-[6%] pl-4 sm:block lg:pl-10">#</div>
                <div className="w-[36%] px-3 py-5">Name</div>
                <div className="w-[24%] px-3 py-5 text-right lg:w-[16%]">
                  Price
                </div>
                <div className="hidden w-1/5 px-3 py-5 text-right md:block">
                  Volume (24h)
                </div>
                <div className="w-[16%] px-3 py-5 text-right lg:w-[12%]">
                  Change (24h)
                </div>
                <div className="w-[10%] py-5 pl-3 pr-4 text-right">Trade</div>
              </div>
              {/* End header */}

              <CryptoTableList />
              {/* pricing-table */}

              <div className="border-t border-jacarta-100 px-4 pt-4 pb-8 text-center dark:border-jacarta-600">
                <a
                  href="https://coinmarketcap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm text-accent"
                >
                  View more markets
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="ml-1 fill-accent"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </a>
              </div>
              {/* End viewmore */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end crypto prices -->  */}
    </>
  );
};

export default index;
