import React, { useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Meta from "../../components/Meta";
import { Metamask_comp_login } from "../../components/metamask/Metamask";
import Image from "next/image";

const Login = () => {
  const [itemActive, setItemActive] = useState(1);
  const tabItem = [
    {
      id: 1,
      text: "Ethereum",
      icon: "ETH",
    },
    {
      id: 2,
      text: "Torus",
      icon: "torus",
    },
    {
      id: 4,
      text: "Mobile Wallet",
      icon: "mbl-wallet",
    },
  ];

  return (
    <div>
      <Meta title="Login || Xhibiter | NFT Marketplace Next.js Template" />
      {/* <!-- Login --> */}
      <section className="relative h-screen">
        <div className="lg:flex lg:h-full">
          {/* <!-- Left --> */}
          <div className="relative text-center lg:w-1/2">
            <Image
              width={768}
              height={722}
              src="/images/login.jpg"
              alt="login"
              className="absolute h-full w-full object-cover"
            />
            {/* <!-- Logo --> */}
            <Link href="/" className="relative inline-block py-36">
              <Image
                width={130}
                height={28}
                src="/images/gameloot.png"
                className="inline-block max-h-7"
                alt=""
              />
            </Link>
          </div>

          {/* <!-- Right --> */}
          <div className="relative flex items-center justify-center p-[10%] lg:w-1/2">
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

            <div className="w-full max-w-[25.625rem] text-center">
              <h1 className="text-jacarta-700 font-display mb-6 text-4xl dark:text-white">
                Sign in
              </h1>
              <p className="dark:text-jacarta-300 mb-10 text-lg leading-normal">
                Choose one of available wallet providers or create a new wallet.
                <a href="#" className="text-accent">
                  What is a wallet?
                </a>
              </p>

              {/* <!-- Tabs Nav --> */}
              <Tabs className="tabs ">
                <TabList className="no-scrollbar nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b pb-px md:justify-center">
                  {tabItem.map(({ id, text, icon }) => {
                    return (
                      <Tab
                        className="nav-item"
                        key={id}
                        onClick={() => setItemActive(id)}
                      >
                        <button
                          className={
                            itemActive === id
                              ? "nav-link active hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white"
                              : "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white"
                          }
                        >
                          <svg className="icon icon-ETH mr-1 mb-[2px] h-4 w-4 fill-current">
                            <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                          </svg>

                          <span className="font-display text-base font-medium">
                            {text}
                          </span>
                        </button>
                      </Tab>
                    );
                  })}
                </TabList>

                {/* <!-- Ethereum --> */}
                <TabPanel>
                  <div className="tab-pane fade show active">
                    <Metamask_comp_login />

                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <Image
                        width={24}
                        height={24}
                        src="/images/wallets/torus_24.svg"
                        className="mr-2.5 inline-block h-6 w-6 object-contain"
                        alt="icon"
                      />
                      <span>Torus</span>
                    </button>

                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <Image
                        width={24}
                        height={24}
                        src="/images/wallets/wallet_connect_24.svg"
                        className="mr-2.5 inline-block h-6 w-6 object-contain"
                        alt="login"
                      />
                      <span>Mobile Wallet</span>
                    </button>

                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <span>Show more options</span>
                    </button>
                  </div>
                </TabPanel>
                {/* <!-- Ethereum end --> */}

                {/* <!-- Torus --> */}
                <TabPanel>
                  <div
                    className="tab-pane fade"
                    id="torus"
                    aria-labelledby="torus-tab"
                  >
                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <Image
                        width={24}
                        height={24}
                        src="/images/wallets/torus_24.svg"
                        className="mr-2.5 inline-block h-6 w-6"
                        alt="wallet"
                      />
                      <span>Torus</span>
                    </button>

                    <Metamask_comp_login />

                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <Image
                        width={24}
                        height={24}
                        src="/images/wallets/wallet_connect_24.svg"
                        className="mr-2.5 inline-block h-6 w-6"
                        alt="wallet"
                      />
                      <span>Mobile Wallet</span>
                    </button>

                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <span>Show more options</span>
                    </button>
                  </div>
                </TabPanel>
                {/* <!-- Torus end --> */}

                {/* <!-- Wallet Connect --> */}
                <TabPanel>
                  <div className="tab-pane fade">
                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <Image
                        width={24}
                        height={24}
                        src="/images/wallets/wallet_connect_24.svg"
                        className="mr-2.5 inline-block h-6 w-6"
                        alt=""
                      />
                      <span>Mobile Wallet</span>
                    </button>

                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <Image
                        width={24}
                        height={24}
                        src="/images/wallets/torus_24.svg"
                        className="mr-2.5 inline-block h-6 w-6"
                        alt=""
                      />
                      <span>Torus</span>
                    </button>

                    <Metamask_comp_login />

                    <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <span>Show more options</span>
                    </button>
                  </div>
                </TabPanel>
                {/* <!-- Wallet Connect --> */}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end login --> */}
    </div>
  );
};

export default Login;
