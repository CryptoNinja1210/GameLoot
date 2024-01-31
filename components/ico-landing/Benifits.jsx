import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Benifits = () => {
  const singleBenifits = [
    {
      id: 1,
      icon: "w1",
      title: "Virtual Database",
      text: `It is commonly adopted, applies to secure message transmission either
      directly without any key distribution in advance`,
    },
    {
      id: 2,
      icon: "w2",
      title: "Secured Money",
      text: `It is commonly adopted, applies to secure message transmission either
      directly without any key distribution in advance`,
    },
    {
      id: 3,
      icon: "w3",
      title: "Private Legal",
      text: `It is commonly adopted, applies to secure message transmission either
      directly without any key distribution in advance`,
    },
  ];
  return (
    <>
      <section className="py-24 dark:bg-jacarta-900 benifit-section">
        <div className="container">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              565: {
                slidesPerView: 2,
              },
              995: {
                slidesPerView: 3,
              },
            }}
            className="!pt-10"
          >
            {singleBenifits.map((item) => {
              const { id, icon, title, text } = item;
              return (
                <SwiperSlide className="text-white overflow-visible" key={id}>
                  <div
                    className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700"
                    key={id}
                  >
                    <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                      <Image
                        src={`/images/crypto-app/${icon}.svg`}
                        alt="icon"
                        width={48}
                        height={48}
                        className="h-12 w-12"
                      />
                    </div>

                    <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                      {title}
                    </h3>
                    <p className="dark:text-jacarta-300 text-jacarta-700">
                      {text}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Benifits;
