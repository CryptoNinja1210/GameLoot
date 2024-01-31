import HelpBlock from "./HelpBlock";

const index = () => {
  return (
    <section className="relative bg-light-base py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="items-center justify-between lg:flex lg:space-x-24">
          <div className="lg:w-[45%]">
            <h2 className="mb-6 font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Need help?
            </h2>
            <p className="mb-6 text-lg dark:text-jacarta-300">
              Discover NFTs, decentralized finance, crypto gaming, and thousands
              of Dapps! We’ve integrated with the WalletConnect protocol to
              facilitate your simple and secure connection.
            </p>
            <p className="dark:text-jacarta-300">
              We’ve integrated with the WalletConnect protocol to facilitate
              your simple and secure connection to the world of Web3 quickly and
              instantaneously.
            </p>
          </div>
          <div className="lg:w-[55%]">
            <HelpBlock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
