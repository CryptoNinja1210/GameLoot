import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Promo = () => {
  const [videoModal, setvideoModal] = useState(false);
  const [url, setUrl] = useState(null);
  return (
    <>
      {/* <!-- Promo --> */}
      <section className="relative py-24 dark:bg-jacarta-800">
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
          <div className="lg:flex lg:justify-between">
            {/* <!-- Image --> */}
            <div className="relative lg:w-[55%]">
              <Image
                width={68}
                height={68}
                src="/images/patterns/pattern_circle_1.png"
                className="absolute -bottom-4 -left-8 animate-fly dark:opacity-10"
                alt="circle"
              />
              <Image
                width={143}
                height={143}
                src="/images/patterns/pattern_circle_2.png"
                className="absolute -top-14 right-0 animate-fly dark:opacity-10 md:-right-12"
                alt="circle"
              />
              <div className="flex items-center space-x-7">
                <figure className="relative">
                  <Image
                    width={308}
                    height={452}
                    src="/images/crypto-consultant/promo_1.jpg"
                    className="rounded-3xl w-full h-full object-cover"
                    alt="promo"
                  />
                </figure>
                <figure className="relative overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-jacarta-900/25">
                  <button
                    onClick={() => {
                      setvideoModal(true);
                      setUrl("https://www.youtube.com/embed/dQw4w9WgXcQ");
                    }}
                    className="js-video-modal-trigger absolute top-1/2 left-1/2 flex h-16 w-16 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />
                    </svg>
                  </button>
                  <Image
                    width={308}
                    height={471}
                    src="/images/crypto-consultant/promo_2.jpg"
                    className="w-full h-full object-cover"
                    alt="img"
                  />
                </figure>
              </div>
            </div>

            {/* <!-- Info --> */}
            <div className="py-10 lg:w-[45%] lg:pl-28">
              <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                You Can Save Time & Money In Your Business
              </h2>
              <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="mb-8 flex space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-8 w-8 shrink-0 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                </svg>
                <div>
                  <span className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                    Team Management
                  </span>
                  <span className="dark:text-jacarta-300">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia.
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-8 w-8 shrink-0 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                </svg>
                <div>
                  <span className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                    Revenue-based payments
                  </span>
                  <span className="dark:text-jacarta-300">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end promo --> */}

      {/* <!-- YouTube Video Modal --> */}
      <div
        className={
          videoModal ? "modal lightbox fade show block" : "modal lightbox fade"
        }
      >
        <div className="modal-dialog modal-dialog-centered modal-xl w-full">
          <div className="modal-content border-0 bg-transparent">
            <div className="modal-body p-0 relative">
              <button
                onClick={() => {
                  setvideoModal(false);
                  setUrl(null);
                }}
                type="button"
                className="btn-close position-absolute top-0 end-0 p-3 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  className="h-6 w-6"
                >
                  <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>
              <div
                id="lightboxCarousel-d7ewe4ig"
                className="lightbox-carousel carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="position-absolute top-50 start-50 translate-middle text-white">
                      <div className="spinner-border" role="status"></div>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={url}
                        title="YouTube video player"
                        allow="accelerometer clipboard-write encrypted-media gyroscope picture-in-picture autoplay"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
