import Link from "next/link";
import React, { useEffect } from "react";
import { rankings_data } from "../../data/rankings_data";
import Image from "next/image";
import Recently_added_dropdown from "../../components/dropdown/recently_added_dropdown";
import Meta from "../../components/Meta";
import { collectRenkingData } from "../../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Index = () => {
  const { filteredRenkingData } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const categoryText = [
    {
      id: 1,
      text: "All",
    },
    {
      id: 2,
      text: "Art",
    },
    {
      id: 3,
      text: "Collectibles",
    },
    {
      id: 4,
      text: "Domain",
    },
    {
      id: 5,
      text: "Music",
    },
    {
      id: 6,
      text: "Photography",
    },
    {
      id: 7,
      text: "Virtual World",
    },
  ];
  const blockchainText = [
    {
      id: 1,
      text: "Ethereum",
    },
    {
      id: 2,
      text: "Polygon",
    },
    {
      id: 3,
      text: "Flow",
    },
    {
      id: 4,
      text: "Tezos",
    },
  ];
  const last7DaysRanks = [
    {
      id: 1,
      text: "Last 7 Days",
    },
    {
      id: 2,
      text: "Last 14 Days",
    },
    {
      id: 3,
      text: "Last 30 Days",
    },
    {
      id: 4,
      text: "Last 60 Days",
    },
    {
      id: 5,
      text: "Last 90 Days",
    },
    {
      id: 6,
      text: "Last Year",
    },
    {
      id: 7,
      text: "All Time",
    },
  ];

  useEffect(() => {
    dispatch(collectRenkingData(rankings_data));
  }, [dispatch]);

  return (
    <>
      <Meta title="Rankings || Xhibiter | NFT Marketplace Next.js Template" />
      {/* <!-- Rankings --> */}
      <section className="relative lg:mt-24 lg:pb-24 pb-24">
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
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
            Rankings
          </h1>

          {/* <!-- Filters --> */}
          <div className="mb-8 flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap items-center">
              {/* <!-- Categories --> */}
              <Recently_added_dropdown
                data={categoryText}
                dropdownFor="rankingCategories"
              />

              {/* <!-- Chains --> */}
              <Recently_added_dropdown
                data={blockchainText}
                dropdownFor="blockchain"
              />
            </div>

            {/* last 7 days */}
            <Recently_added_dropdown
              data={last7DaysRanks}
              dropdownFor="last7Days-ranks"
            />

            {/* <!--  --> */}
          </div>
          {/* <!-- end filters --> */}

          {/* <!-- Table --> */}
          <div className="scrollbar-custom overflow-x-auto">
            <div
              role="table"
              className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white"
            >
              <div
                className="dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex"
                role="row"
              >
                <div className="w-[28%] py-3 px-4" role="columnheader">
                  <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                    Collection
                  </span>
                </div>
                <div className="w-[12%] py-3 px-4" role="columnheader">
                  <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                    Volume
                  </span>
                </div>
                <div className="w-[12%] py-3 px-4" role="columnheader">
                  <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                    24h %
                  </span>
                </div>
                <div className="w-[12%] py-3 px-4" role="columnheader">
                  <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                    7d %
                  </span>
                </div>
                <div className="w-[12%] py-3 px-4" role="columnheader">
                  <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                    Floor Price
                  </span>
                </div>
                <div className="w-[12%] py-3 px-4" role="columnheader">
                  <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                    Owners
                  </span>
                </div>
                <div className="w-[12%] py-3 px-4" role="columnheader">
                  <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                    Items
                  </span>
                </div>
              </div>
              {filteredRenkingData.slice(0, 7).map((item) => {
                const {
                  id,
                  image,
                  title,
                  volume,
                  h24,
                  d7,
                  h24Color,
                  d7Color,
                  price,
                  owners,
                  items,
                  icon,
                } = item;
                const itemLink = image
                  .split("/")
                  .slice(-1)
                  .toString()
                  .replace(".jpg", "");

                return (
                  <Link
                    href={/user/ + itemLink}
                    key={id}
                    className="flex transition-shadow hover:shadow-lg"
                  >
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[28%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <span className="mr-2 lg:mr-4">{id}</span>
                      <figure className="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                        <Image
                          src={image}
                          alt={title}
                          height={32}
                          width={32}
                          className="rounded-2lg object-contain"
                        />

                        {icon && (
                          <div
                            className="dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                            data-tippy-content="Verified Collection"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="h-[.875rem] w-[.875rem] fill-white"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        )}
                      </figure>
                      <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                        {title}
                      </span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center whitespace-nowrap border-t py-4 px-4"
                      role="cell"
                    >
                      <span className="-ml-1" data-tippy-content="ETH">
                        <svg className="icon mr-1 h-4 w-4">
                          <use xlinkHref="/icons.svg#icon-ETH"></use>
                        </svg>
                      </span>
                      <span className="text-sm font-medium tracking-tight">
                        {volume}
                      </span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <span className={`text-${h24Color}`}>{h24}</span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <span className={`text-${d7Color}`}>{d7}</span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <span className="-ml-1" data-tippy-content="ETH">
                        <svg className="icon mr-1 h-4 w-4">
                          <use xlinkHref="/icons.svg#icon-ETH"></use>
                        </svg>
                      </span>
                      <span className="text-sm font-medium tracking-tight">
                        {price}
                      </span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <span>{owners}</span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <span>{items}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end rankings --> */}
    </>
  );
};

export default Index;
