import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { features_carousel_data } from "../../data/features_carousel_data";
import Image from "next/image";

const Features_carousel = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          565: {
            slidesPerView: 2,
          },
          775: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        className=" card-slider-4-columns !py-5 !overflow-visible"
      >
        {features_carousel_data.map((item) => {
          const { id, img, title, desc } = item;
          return (
            <SwiperSlide className="text-white" key={id}>
              <div className="rounded-2.5xl bg-jacarta-800 p-10">
                <div className="mb-4 md:mb-0">
                  <figure className="mb-8">
                    <Image src={img} alt="" height={48} width={48} />
                  </figure>
                  <h3 className="mb-4 font-display text-lg text-white">
                    {title}
                  </h3>
                  <p className="text-jacarta-300">{desc}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Features_carousel;
