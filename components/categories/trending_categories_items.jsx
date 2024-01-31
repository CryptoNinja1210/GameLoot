import React, { useEffect, useState } from "react";
import { tranding_category_filter } from "../../data/categories_data";
import CategoryItem from "./categoryItem";
import { trendingCategoryData } from "../../data/categories_data";
import Tippy from "@tippyjs/react";
import Recently_added_dropdown from "../dropdown/recently_added_dropdown";
import { useSelector, useDispatch } from "react-redux";
import { updateTrendingCategoryItemData } from "../../redux/counterSlice";

const Trending_categories_items = () => {
  const [itemdata, setItemdata] = useState(trendingCategoryData);
  const dispatch = useDispatch();
  const { trendingCategorySorText } = useSelector((state) => state.counter);
  const [filterVal, setFilterVal] = useState(0);

  const handleFilter = (category) => {
    if (category !== "all") {
      setItemdata(
        trendingCategoryData.filter((item) => item.category === category)
      );
    } else {
      setItemdata(trendingCategoryData);
    }
  };

  const sortText = [
    {
      id: 1,
      text: "Recently Added",
    },
    {
      id: 2,
      text: "Price: Low to High",
    },
    {
      id: 3,
      text: "Price: high to low",
    },
    {
      id: 4,
      text: "Auction Ending Soon",
    },
  ];

  useEffect(() => {
    dispatch(updateTrendingCategoryItemData(itemdata.slice(0, 8)));
  }, [itemdata, dispatch]);

  return (
    <>
      {/* <!-- Filter --> */}
      <div className="mb-8 flex flex-wrap items-center justify-between">
        <ul className="flex flex-wrap items-center">
          {tranding_category_filter.map(({ id, svg, text }) => {
            if (text === "all") {
              return (
                <li className="my-1 mr-2.5" key={id}>
                  <button
                    className={
                      filterVal === id
                        ? "dark:border-jacarta-600 group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white dark:border-transparent capitalize"
                        : "dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white capitalize"
                    }
                    onClick={() => {
                      handleFilter(text);
                      setFilterVal(id);
                    }}
                  >
                    {text}
                  </button>
                </li>
              );
            } else {
              return (
                <li className="my-1 mr-2.5" key={id}>
                  <button
                    onClick={() => {
                      handleFilter(text);
                      setFilterVal(id);
                    }}
                  >
                    <div
                      className={
                        filterVal === id
                          ? "dark:border-jacarta-600 group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white dark:border-transparent capitalize"
                          : "dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white capitalize"
                      }
                    >
                      <svg
                        className={
                          filterVal === id
                            ? "icon mr-1 h-4 w-4 transition-colors fill-white"
                            : "icon fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
                        }
                      >
                        <use xlinkHref={`/icons.svg#icon-${svg}`}></use>
                      </svg>
                      <span>{text}</span>
                    </div>
                  </button>
                </li>
              );
            }
          })}
        </ul>
        {/* dropdown */}
        <Recently_added_dropdown data={sortText} dropdownFor="recently_added" />
      </div>

      {/* <!-- Grid --> */}
      <CategoryItem />
    </>
  );
};

export default Trending_categories_items;
