import Image from "next/image";

const Features = () => {
  const featuresContent = [
    {
      id: 1,
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-6 w-6 fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm-1 8V7H4v6h2zm2-6v6h3v-2h2v2h3V7H8zm10 6h2V7h-2v6zM9 3v2h6V3H9z" />
          </svg>
        </>
      ),
      title: "Verify your identity",
      text: `Complete the identity verification process to secure your account and transactions.`,
    },
    {
      id: 2,
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-6 w-6 fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </>
      ),
      title: "Fund your account",
      text: `Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.`,
    },
    {
      id: 3,
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-6 w-6 fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z" />
          </svg>
        </>
      ),
      title: "Start trading",
      text: `Complete the identity verification process to secure your account and transactions.`,
    },
  ];

  return (
    <>
      {/* <!-- Features --> */}
      <section className="relative pt-24 pb-10 dark:bg-jacarta-800">
        <div className="container">
          <div className="lg:flex lg:flex-nowrap">
            <div className="mb-16 lg:w-1/2 lg:pr-20">
              <Image
                width={500}
                height={596}
                src="/images/crypto-trading/crypto_trading_feature.jpg"
                alt="cryto portfolio"
                loading="lazy"
                className="rounded-2.5xl w-full h-full object-cover"
              />
            </div>
            {/* <!-- End Left Image --> */}

            {/* <!-- Info --> */}
            <div className="mb-16 lg:w-1/2 lg:pl-5">
              <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                Create your cryptocurrency portfolio today
              </h2>
              <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
                Start your first trade with these easy steps.
              </p>

              {featuresContent.map((item) => (
                <div className="mb-6 flex space-x-6" key={item.id}>
                  <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-jacarta-700">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-3 mt-2 block font-display text-xl font-semibold text-jacarta-700 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="dark:text-jacarta-300">{item.text}</p>
                  </div>
                </div>
              ))}

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Get Started
                </a>
              </div>
              {/* End btn text */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end features -->   */}
    </>
  );
};

export default Features;
