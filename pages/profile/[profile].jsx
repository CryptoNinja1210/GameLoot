import React, { useEffect, useState } from "react";
import Image from "next/image";
import UserId from "../../components/userId";
import Meta from "../../components/Meta";

const Edit_user = () => {
  const [profilePhoto, setProfilePhoto] = useState();
  const [coverePhoto, setCoverePhoto] = useState();
  const [preview, setPreview] = useState();
  const [coverPreview, setCoverPreview] = useState();

  const handleProfilePhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setProfilePhoto(file);
    } else {
      setProfilePhoto(null);
    }
  };

  const handleCoverPhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setCoverePhoto(file);
    } else {
      setCoverePhoto(null);
    }
  };

  useEffect(() => {
    if (profilePhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(profilePhoto);
    } else {
      setPreview(null);
    }
  }, [profilePhoto]);

  useEffect(() => {
    if (coverePhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(coverePhoto);
    } else {
      setCoverPreview(null);
    }
  }, [coverePhoto]);

  return (
    <div>
      <Meta title="Profile || Xhibiter | NFT Marketplace Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- Banner --> */}
        <div className="relative">
          <Image
            width={1519}
            height={300}
            priority
            src={coverPreview ? coverPreview : "/images/user/banner.jpg"}
            alt="banner"
            className="h-[18.75rem] w-full object-cover"
          />
          <div className="container relative -translate-y-4">
            <div className="font-display group hover:bg-accent absolute right-0 bottom-4 flex items-center rounded-lg bg-white py-2 px-4 text-sm">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 cursor-pointer opacity-0"
                onChange={(e) => handleCoverPhoto(e)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-400 mr-1 h-4 w-4 group-hover:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"></path>
              </svg>
              <span className="text-black mt-0.5 block group-hover:text-white">
                Edit cover photo
              </span>
            </div>
          </div>
        </div>
        {/* <!-- end banner --> */}
        {/* <!-- Edit Profile --> */}
        <section className="dark:bg-jacarta-800 relative py-16">
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
            <div className="mx-auto max-w-[48.125rem] md:flex">
              {/* <!-- Form --> */}
              <div className="mb-12 md:w-1/2 md:pr-8">
                <div className="mb-6">
                  <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                    Username<span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="profile-username"
                    className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white px-3"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                    Bio<span className="text-red">*</span>
                  </label>
                  <textarea
                    id="profile-bio"
                    className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white px-3"
                    required
                    placeholder="Tell the world your story!"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                    Email address<span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="profile-email"
                    className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white px-3"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                    Links<span className="text-red">*</span>
                  </label>
                  <div className="relative">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      className="fill-jacarta-300 dark:fill-jacarta-400 pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                    <input
                      type="text"
                      id="profile-twitter"
                      className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-t-lg py-3 pl-10 hover:ring-2 focus:ring-inset dark:text-white"
                      placeholder="@twittername"
                    />
                  </div>
                  <div className="relative">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      className="fill-jacarta-300 dark:fill-jacarta-400 pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                    <input
                      type="text"
                      id="profile-instagram"
                      className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 -mt-px w-full py-3 pl-10 hover:ring-2 focus:ring-inset dark:text-white"
                      placeholder="instagramname"
                    />
                  </div>
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-jacarta-300 dark:fill-jacarta-400 pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                    </svg>
                    <input
                      type="url"
                      id="profile-website"
                      className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 -mt-px w-full rounded-b-lg py-3 pl-10 hover:ring-2 focus:ring-inset dark:text-white"
                      placeholder="yoursitename.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
                    Wallet Address
                  </label>

                  <UserId
                    classes="js-copy-clipboard dark:bg-jacarta-700 border-jacarta-100 hover:bg-jacarta-50 dark:border-jacarta-600 dark:text-jacarta-300 flex w-full select-none items-center rounded-lg border bg-white py-3 px-4"
                    userId="0x7a9fe22691c811ea339401bbb2leb"
                  />
                </div>
                <button className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                  Update Profile
                </button>
              </div>
              {/* <!-- Avatar --> */}
              <div className="flex space-x-5 md:w-1/2 md:pl-8">
                <form className="shrink-0">
                  <figure className="relative inline-block">
                    <Image
                      src={preview ? preview : "/images/user/user_avatar.gif"}
                      alt="collection avatar"
                      className="dark:border-jacarta-600 rounded-xl border-[5px] border-white"
                      height={140}
                      width={140}
                    />
                    <div className="group hover:bg-accent border-jacarta-100 absolute -right-3 -bottom-2 h-8 w-8 overflow-hidden rounded-full border bg-white text-center hover:border-transparent">
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute top-0 left-0 w-full cursor-pointer opacity-0"
                        onChange={(e) => handleProfilePhoto(e)}
                      />
                      <div className="flex h-full items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="fill-jacarta-400 h-4 w-4 group-hover:fill-white"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
                        </svg>
                      </div>
                    </div>
                  </figure>
                </form>
                <div className="mt-4">
                  <span className="font-display text-jacarta-700 mb-3 block text-sm dark:text-white">
                    Profile Image
                  </span>
                  <p className="dark:text-jacarta-300 text-sm leading-normal">
                    We recommend an image of at least 300x300. Gifs work too.
                    Max 5mb.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end edit profile --> */}
      </div>
    </div>
  );
};

export default Edit_user;
