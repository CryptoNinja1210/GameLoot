import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Ally } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { characters_data } from "../../data/characters_data";
import Link from "next/link";
import Image from "next/image";

const Characters_carousel = () => {
  return (
    <>
      {/* <!-- Coverflow Slider --> */}
      <div className="relative px-6 pb-16 sm:px-0">
        {/* <!-- Slider --> */}
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            100: {
              // width: 640,
              slidesPerView: 1,
            },
            575: {
              // width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            992: {
              // width: 768,
              slidesPerView: 5,
            },
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-4",
            prevEl: ".swiper-button-prev-4",
          }}
          className="swiper coverflow-slider !py-5"
        >
          {characters_data.map((item) => {
            const {
              img,
              id,
              smallText1,
              smallText2,
              title,
              icon1,
              icon2,
              routePath,
            } = item;
            return (
              <SwiperSlide key={id}>
                <article>
                  <Link
                    href={"/item/" + routePath}
                    className="animate-gradient--no-text-fill block animate-gradient overflow-hidden rounded-2.5xl !bg-clip-border p-[2px] text-center shadow-md transition-shadow hover:shadow-lg"
                  >
                    <div className="rounded-[1.125rem] bg-jacarta-900 p-8">
                      <Image
                        width={280}
                        height={280}
                        src="/images/nft-game/gradient_glow_small.png"
                        alt="glow small"
                        className="absolute inset-0"
                      />
                      <figure className="relative my-4 mb-14">
                        <Image
                          width={182}
                          height={212}
                          src={img}
                          alt="item 1"
                          className="swiper-lazy inline-block"
                        />
                        {/* <div className="swiper-lazy-preloader"></div> */}
                      </figure>
                      <div className="relative rounded-2lg bg-jacarta-700 p-5">
                        <h3 className="mb-3 text-lg font-semibold leading-none text-white">
                          {title}
                        </h3>
                        <div className="flex justify-center space-x-5">
                          <div className="flex items-center">
                            <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                              <svg className="icon h-6 w-6">
                                <use
                                  xlinkHref={`/icons.svg#icon-${icon1}`}
                                ></use>
                              </svg>
                            </div>
                            <span className="font-display text-sm font-semibold text-white">
                              {smallText1}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                              <svg className="icon h-6 w-6">
                                <use
                                  xlinkHref={`/icons.svg#icon-${icon2}`}
                                ></use>
                              </svg>
                            </div>
                            <span className="font-display text-sm font-semibold text-white">
                              {smallText2}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* <!-- end coverflow slider --> */}
      </div>
    </>
  );
};

export default Characters_carousel;
