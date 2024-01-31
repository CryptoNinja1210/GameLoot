import React from "react";
import { items_activity_data } from "../../data/items_tabs_data";
import Link from "next/link";

const Activity_tab = () => {
  return (
    <>
      {/* <!-- Activity --> */}
      <div
        className="tab-pane fade"
        id="activity"
        role="tabpanel"
        aria-labelledby="activity-tab"
      >
        {/* <!-- Filter --> */}
        <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base border border-b-0 px-4 pt-5 pb-2.5">
          <div className="flex flex-wrap">
            <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"></path>
              </svg>
              <span className="text-2xs font-medium">Listing</span>
            </button>
            <button className="dark:hover:bg-accent-dark hover:bg-accent-dark bg-accent mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-transparent px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="mr-2 h-4 w-4 fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>
              </svg>
              <span className="text-2xs font-medium text-white">Bids</span>
            </button>
            <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"></path>
              </svg>
              <span className="text-2xs font-medium">Transfers</span>
            </button>
            <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"></path>
              </svg>
              <span className="text-2xs font-medium">Sales</span>
            </button>
          </div>
        </div>

        <div
          role="table"
          className="scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 max-h-72 w-full overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white"
        >
          <div
            className="dark:bg-jacarta-600 bg-light-base sticky top-0 flex"
            role="row"
          >
            <div className="w-[17%] py-2 px-4" role="columnheader">
              <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                Event
              </span>
            </div>
            <div className="w-[17%] py-2 px-4" role="columnheader">
              <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                Price
              </span>
            </div>
            <div className="w-[22%] py-2 px-4" role="columnheader">
              <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                From
              </span>
            </div>
            <div className="w-[22%] py-2 px-4" role="columnheader">
              <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                To
              </span>
            </div>
            <div className="w-[22%] py-2 px-4" role="columnheader">
              <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                Date
              </span>
            </div>
          </div>
          {items_activity_data.map((item) => {
            const { id, price, from, to, text, date } = item;
            return (
              <div className="flex" role="row" key={id}>
                <div
                  className="dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4"
                  role="cell"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>
                  </svg>
                  {text}
                </div>
                <div
                  className="dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4"
                  role="cell"
                >
                  <span className="-ml-1" data-tippy-content="ETH">
                    <svg className="icon mr-1 h-4 w-4">
                      <use xlinkHref="icons.svg#icon-ETH"></use>
                    </svg>
                  </span>
                  <span className="text-green text-sm font-medium tracking-tight">
                    {price} ETH
                  </span>
                </div>
                <div
                  className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4"
                  role="cell"
                >
                  <Link href="#" className="text-accent">
                    {from}
                  </Link>
                </div>
                <div
                  className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4"
                  role="cell"
                >
                  <Link href="#" className="text-accent">
                    {to}
                  </Link>
                </div>
                <div
                  className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4"
                  role="cell"
                >
                  <Link
                    href="#"
                    className="text-accent flex flex-wrap items-center"
                    target="_blank"
                    rel="nofollow noopener"
                    title="Opens in a new window"
                    data-tippy-content="March 13 2022, 2:32 pm"
                  >
                    <span className="mr-1">{date}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-4 w-4 fill-current"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Activity_tab;
