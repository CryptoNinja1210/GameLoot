import Link from "next/link";
import React, { useState } from "react";
import News_item from "../../components/blog/news_item";
import { news_data } from "../../data/news_data";
import Meta from "../../components/Meta";
import Image from "next/image";

const Blog = () => {
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  const [data, setdata] = useState(news_data.slice(0, 6));

  const handleLoadMore = () => {
    setdata(news_data);
    setLoadMoreBtn(false);
  };
  return (
    <>
      <Meta title="Blog || Xhibiter | NFT Marketplace Next.js Template" />
      {/* <!-- Blog --> */}
      <section className="relative  pt-[5.5rem] lg:pt-24">
        <div className="py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              width={1519}
              height={1119}
              priority
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full object-cover w-full"
            />
          </picture>

          <div className="container">
            {/* <!-- Featured Post --> */}
            <article className="mb-[1.875rem] md:mb-16">
              <div className="rounded-2xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row">
                <figure className="group overflow-hidden md:w-1/2">
                  <Link href="/single_post/post_1">
                    <Image
                      width={585}
                      height={455}
                      src="/images/blog/post_1.jpg"
                      alt="post 1"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </Link>
                </figure>

                {/* <!-- Body --> */}
                <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] border bg-white p-[10%] md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                  {/* <!-- Meta --> */}
                  <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                    <Link
                      href="#"
                      className="dark:text-jacarta-200 text-jacarta-700 font-display hover:text-accent"
                    >
                      Deothemes
                    </Link>
                    <span className="dark:text-jacarta-400">in</span>
                    <span className="text-accent inline-flex flex-wrap items-center space-x-1">
                      <a href="#">{"NFT's"}</a>
                      <a href="#">DIGITAL ART</a>
                    </span>
                  </div>

                  <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white sm:text-3xl">
                    <Link href="/single_post/post_1">
                      List your collection for secondary sales
                    </Link>
                  </h2>
                  <p className="dark:text-jacarta-200 mb-8">
                    Since we launched Tezos at the end of 2021, many awesome
                    creators...
                  </p>

                  {/* <!-- Date / Time --> */}
                  <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                    <span>
                      <time>5 Feb</time>
                    </span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </article>

            <News_item data={data} />

            {/* <!-- Load More --> */}
            {loadMoreBtn && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoadMore}
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <!-- end blog --> */}
    </>
  );
};

export default Blog;
