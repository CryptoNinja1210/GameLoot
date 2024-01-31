import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "tippy.js/dist/tippy.css";
import Browse_category_data from "../../data/Browse_category_data";
import Link from "next/link";
import Image from "next/image";

const Browse_category_carousel = () => {
  return (
    <div className="overflow-hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          100: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          700: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        className=" card-slider-4-columns !py-5"
        style={{ transform: "scaleX(1.2)" }}
      >
        {Browse_category_data.map((item) => {
          const { id, image, title, bgColor } = item;
          return (
            <SwiperSlide key={id}>
              <article>
                <Link
                  href="/collection/explore_collection"
                  className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg"
                >
                  <figure
                    style={{ backgroundColor: bgColor }}
                    className={` rounded-t-[0.625rem] w-full rounded-[0.625rem`}
                  >
                    <Image
                      width={152}
                      height={98}
                      src={image}
                      alt="item 1"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="mt-4 text-center">
                    <span className="font-display text-jacarta-700 text-lg dark:text-white">
                      {title}
                    </span>
                  </div>
                </Link>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Browse_category_carousel;
