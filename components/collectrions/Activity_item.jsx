import React, { useEffect, useState } from "react";
import { collection_activity_item_data } from "../../data/collection_data";
import Link from "next/link";
import Image from "next/image";

const Activity_item = () => {
  const [filterVal, setFilterVal] = useState(null);
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const [data, setData] = useState(collection_activity_item_data);
  const [filterData, setfilterData] = useState(
    collection_activity_item_data.map((item) => {
      const { category } = item;
      return category;
    })
  );

  const [inputText, setInputText] = useState("");

  const handleFilter = (category) => {
    setData(
      collection_activity_item_data.filter((item) => item.category === category)
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = collection_activity_item_data.filter((item) => {
      return item.title.toLowerCase().includes(inputText);
    });
    setData(newArray);
    setInputText("");
  };

  useEffect(() => {
    setfilterData(filterData.filter(onlyUnique));
  }, []);

  return (
    <>
      {/* <!-- Activity Tab --> */}
      <div className="tab-pane fade">
        {/* <!-- Records / Filter --> */}
        <div className="lg:flex">
          {/* <!-- Records --> */}
          <div className="mb-10 shrink-0 basis-8/12 space-y-5 lg:mb-0 lg:pr-10">
            {data.slice(0, 5).map((item) => {
              const { id, image, title, price, time, category } = item;
              const itemLink = image
                .split("/")
                .slice(-1)
                .toString()
                .replace(".jpg", "")
                .replace(".gif", "")
                .replace("_sm", "")
                .replace("avatar", "item");
              return (
                <Link
                  href={`/item/${itemLink}`}
                  key={id}
                  className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <figure className="mr-5 self-start">
                    <Image
                      src={image}
                      alt={title}
                      height={50}
                      width={50}
                      objectFit="cover"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                  </figure>
                  <div>
                    <h3 className="font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white">
                      {title}
                    </h3>
                    <span className="dark:text-jacarta-200 text-jacarta-500 mb-3 block text-sm">
                      {price}
                    </span>
                    <span className="text-jacarta-300 block text-xs">
                      {time}
                    </span>
                  </div>
                  <div className="dark:border-jacarta-600 border-jacarta-100 ml-auto rounded-full border p-3">
                    <svg className="icon fill-jacarta-700 dark:fill-white h-6 w-6">
                      <use xlinkHref={`/icons.svg#icon-${category}`}></use>
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* <!-- Filters --> */}
          <aside className="basis-4/12 lg:pl-5">
            <form
              action="search"
              className="relative mb-12 block"
              onSubmit={handleSubmit}
            >
              <input
                type="search"
                className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                placeholder="Search"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                type="submit"
                className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-500 h-4 w-4 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                </svg>
              </button>
            </form>

            <h3 className="font-display text-jacarta-500 mb-4 font-semibold dark:text-white">
              Filters
            </h3>
            <div className="flex flex-wrap">
              {filterData.map((category, i) => {
                return (
                  <button
                    className={
                      filterVal === i
                        ? "dark:border-jacarta-600 group bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border px-4 py-3 border-transparent text-white dark:border-transparent"
                        : "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                    }
                    key={i}
                    onClick={() => {
                      handleFilter(category);
                      setFilterVal(i);
                    }}
                  >
                    <svg
                      className={
                        filterVal === i
                          ? "icon mr-2 h-4 w-4 fill-white"
                          : "icon fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                      }
                    >
                      <use xlinkHref={`/icons.svg#icon-${category}`}></use>
                    </svg>
                    <span className="text-2xs font-medium capitalize">
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Activity_item;
