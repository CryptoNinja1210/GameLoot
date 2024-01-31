import Image from "next/image";
import React, { useState } from "react";

const VideoBlock = () => {
  const [videoModal, setvideoModal] = useState(false);
  return (
    <>
      <figure className="relative mb-8 overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-jacarta-900/25">
        <button
          onClick={() => setvideoModal(true)}
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
          width={690}
          height={540}
          src="/images/dao/video_cover_dao.jpg"
          className="w-full h-full object-cover"
          alt="video"
        />
      </figure>
      {/* <!-- end  video main block --> */}

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
                onClick={() => setvideoModal(false)}
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
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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

export default VideoBlock;
