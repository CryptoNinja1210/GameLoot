import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Social_dropdown from "../../components/dropdown/Social_dropdown";
import Auctions_dropdown from "../../components/dropdown/Auctions_dropdown";
import user_data from "../../data/user_data";
import User_items from "../../components/user/User_items";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { CopyToClipboard } from "react-copy-to-clipboard";
import Meta from "../../components/Meta";

const User = () => {
  const router = useRouter();
  const pid = router.query.user;

  const [likesImage, setLikesImage] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLikes = () => {
    if (!likesImage) {
      setLikesImage(true);
    } else {
      setLikesImage(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <>
      <Meta title="User || Xhibiter | NFT Marketplace Next.js Template" />
      {/* <!-- Profile --> */}
      {user_data
        .filter((item) => item.id === pid)
        .map((item) => {
          const { id, image, title, userId, text, joinYear, icon, coverPhoto } =
            item;
          return (
            <div className="pt-[5.5rem] lg:pt-24" key={id}>
              {/* <!-- Banner --> */}
              <div className="relative h-[18.75rem]">
                <Image
                  width={1519}
                  height={300}
                  src={coverPhoto}
                  alt="banner"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <!-- end banner --> */}
              <section className="dark:bg-jacarta-800 bg-light-base relative pb-12 pt-28">
                {/* <!-- Avatar --> */}
                <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <figure className="relative h-40 w-40 dark:border-jacarta-600 rounded-xl border-[5px] border-white">
                    <Image
                      width={141}
                      height={141}
                      src={image}
                      alt={title}
                      className="dark:border-jacarta-600 rounded-xl border-[5px] border-white w-full h-full object-contain"
                    />
                    <div
                      className="dark:border-jacarta-600 bg-green absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                      data-tippy-content="Verified Collection"
                    >
                      {icon && (
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
                      )}
                    </div>
                  </figure>
                </div>

                <div className="container">
                  <div className="text-center">
                    <h2 className="font-display text-jacarta-700 mb-2 text-4xl font-medium dark:text-white">
                      {title}
                    </h2>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4">
                      <Tippy content="ETH">
                        <svg className="icon h-4 w-4 mr-1">
                          <use xlinkHref="/icons.svg#icon-ETH"></use>
                        </svg>
                      </Tippy>

                      <Tippy
                        hideOnClick={false}
                        content={
                          copied ? <span>copied</span> : <span>copy</span>
                        }
                      >
                        <button className="js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap">
                          <CopyToClipboard
                            text={userId}
                            onCopy={() => setCopied(true)}
                          >
                            <span>{userId}</span>
                          </CopyToClipboard>
                        </button>
                      </Tippy>
                    </div>

                    <p className="dark:text-jacarta-300 mx-auto mb-2 max-w-xl text-lg">
                      {text}
                    </p>
                    <span className="text-jacarta-400">
                      Joined December {joinYear}
                    </span>

                    <div className="mt-6 flex items-center justify-center space-x-2.5 relative">
                      <div className="dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white">
                        <div className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm">
                          <button onClick={() => handleLikes()}>
                            {likesImage ? (
                              <svg className="icon dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4">
                                <use xlinkHref="/icons.svg#icon-heart-fill"></use>
                              </svg>
                            ) : (
                              <svg className="icon dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4">
                                <use xlinkHref="/icons.svg#icon-heart"></use>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>

                      <Social_dropdown />

                      <Auctions_dropdown classes="dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white relative" />
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- end profile --> */}
              <User_items />
            </div>
          );
        })}
    </>
  );
};

export default User;
