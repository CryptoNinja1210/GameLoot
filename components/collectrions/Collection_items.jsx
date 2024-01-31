import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { trendingCategoryData } from "../../data/categories_data";
import Activity_item from "./Activity_item";
import Image from "next/image";
import FilterCategoryItem from "../categories/filterCategoryItem";

const Collection_items = () => {
  const [itemsTabs, setItemsTabs] = useState(1);
  const [categoryItemData, setCategoryItemData] =
    useState(trendingCategoryData);

  const collectionItemsTabs = [
    {
      id: 1,
      text: "Items",
      icon: "items",
    },
    {
      id: 2,
      text: "Activity",
      icon: "activities",
    },
  ];
  return (
    <>
      <section className="relative py-24">
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
          {/* <!-- Tabs Nav --> */}
          <Tabs className="tabs">
            <TabList className="nav nav-tabs dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-center border-b">
              {collectionItemsTabs.map(({ id, text, icon }) => {
                return (
                  <Tab
                    className="nav-item"
                    key={id}
                    onClick={() => setItemsTabs(id)}
                  >
                    <button
                      className={
                        itemsTabs === id
                          ? "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active"
                          : "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white"
                      }
                    >
                      <svg className="icon icon-items mr-1 h-5 w-5 fill-current">
                        <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                      </svg>
                      <span className="font-display text-base font-medium">
                        {text}
                      </span>
                    </button>
                  </Tab>
                );
              })}
            </TabList>

            <TabPanel>
              <div>
                <FilterCategoryItem />
              </div>
            </TabPanel>
            <TabPanel>
              <Activity_item />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Collection_items;
