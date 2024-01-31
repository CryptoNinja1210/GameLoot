import React, { useState } from "react";
import HeadLine from "../headLine";
import Auctions_category_data from "../../data/auctions_category_data";
import Tippy from "@tippyjs/react";
import Countdown_timer from "../Countdown_timer";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import Link from "next/link";
import { bidsModalShow } from "../../redux/counterSlice";
import { useDispatch } from "react-redux";
import "tippy.js/themes/light.css";
import Image from "next/image";
import auctions_category_data from "../../data/auctions_category_data";
import Likes from "../likes";

const Auctions_categories = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(Auctions_category_data.slice(0, 8));
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);

  const handleloadMore = () => {
    setData(auctions_category_data);
    setLoadMoreBtn(false);
  };
  return (
    <div>
      <section className="py-24">
        <div className="container">
          <HeadLine
            image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png"
            text="Live Auctions"
            classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
          />
          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => {
              const {
                id,
                bigImage,
                creatorImage,
                ownerImage,
                title,
                price,
                likes,
                auction_timer,
              } = item;
              const itemLink = bigImage
                .split("/")
                .slice(-1)
                .toString()
                .replace(".jpg", "")
                .replace(".gif", "");
              return (
                <article key={id}>
                  <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-center justify-between relative">
                      <div className="flex -space-x-2 ">
                        <Tippy
                          theme="tomato"
                          content={
                            <span className="py-1 px-2 block">
                              Creator: Sussygirl
                            </span>
                          }
                        >
                          <Link href={/item/ + itemLink}>
                            <Image
                              src={creatorImage}
                              alt="creator"
                              className="h-6 w-6 rounded-full"
                              height={24}
                              width={24}
                            />
                          </Link>
                        </Tippy>
                        <Tippy
                          content={
                            <span className="py-1 px-2 block">
                              Owner: Sussygirl
                            </span>
                          }
                        >
                          <Link href={/item/ + itemLink}>
                            <Image
                              src={ownerImage}
                              alt="creator"
                              className="h-6 w-6 rounded-full"
                              height={24}
                              width={24}
                            />
                          </Link>
                        </Tippy>
                      </div>

                      {/* auction dropdown */}
                      <Auctions_dropdown classes="dark:hover:bg-jacarta-600 dropdown hover:bg-jacarta-100 rounded-full " />
                    </div>
                    <figure className="relative">
                      <Link href={/item/ + itemLink}>
                        <Image
                          src={bigImage}
                          alt="item 8"
                          className="w-full rounded-[0.625rem]"
                          loading="lazy"
                          width={800}
                          height={800}
                        />
                      </Link>
                      <Countdown_timer time={+auction_timer} />
                    </figure>
                    <div className="mt-7 flex items-center justify-between">
                      <Link href={/item/ + itemLink}>
                        <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                          {title}
                        </span>
                      </Link>
                      <span className="dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2">
                        <span>
                          <Tippy
                            content={
                              <span className="py-1 px-2 block">ETH</span>
                            }
                          >
                            <svg className="h-4 w-4">
                              <use xlinkHref="/icons.svg#icon-ETH"></use>
                            </svg>
                          </Tippy>
                        </span>
                      </span>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="dark:text-jacarta-300">Highest Bid</span>
                      <span className="dark:text-jacarta-100 text-jacarta-700">
                        {price}
                      </span>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <button
                        className="text-accent font-display text-sm font-semibold"
                        onClick={() => dispatch(bidsModalShow())}
                      >
                        Place bid
                      </button>

                      <Likes
                        like={likes}
                        classes="flex items-center space-x-1"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {loadMoreBtn && (
            <div className="mt-10 text-center">
              <button
                onClick={handleloadMore}
                className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Auctions_categories;
