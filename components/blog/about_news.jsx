import React from "react";
import { news_data } from "../../data/news_data";
import HeadLine from "../headLine";
import Image from "next/image";
import News_item from "./news_item";

const About_news = () => {
  return (
    <>
      {/* <!-- Latest Posts --> */}
      <section className="relative py-24">
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
          <HeadLine
            text="You Might Have Read About Us In The News"
            classes="font-display text-jacarta-700 mb-12 text-center text-3xl dark:text-white"
          />

          <News_item data={news_data.slice(1, 4)} />
        </div>
      </section>
      {/* <!-- end latest posts --> */}
    </>
  );
};

export default About_news;
