import SingleWalletFeature from "./SingleWalletFeature";

const index = () => {
  return (
    <section className="relative bg-light-base py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Wallet security is unlike every other wallet: It’s better.
          </h2>
          <p className="text-lg dark:text-jacarta-300">
            Your account is secured by private facial biometrics and
            industry-leading encryption to keep you safe from account takeover
            attacks and phishing. Discover total control and true peace of mind.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          <SingleWalletFeature />
        </div>

        <p className="mt-4 text-center text-lg dark:text-jacarta-300">
          Your funds will always be safe with Xhibiter.{" "}
          <a href="#" className="text-accent">
            Learn More.
          </a>
        </p>
      </div>
    </section>
  );
};

export default index;
