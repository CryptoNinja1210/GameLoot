import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OfferTab from "./OfferTab";
import Properties from "./Properties";
import Activity_tab from "./Activity_tab";
import Price_history from "./Price_history";

const ItemsTabs = () => {
  const [tabsActive, setTabsActive] = useState(1);
  const tabsHeadText = [
    {
      id: 1,
      text: "Offers",
      icon: "offers",
    },
    {
      id: 2,
      text: "properties",
      icon: "properties",
    },
    {
      id: 3,
      text: "details",
      icon: "details",
    },
    {
      id: 4,
      text: "activities",
      icon: "activity",
    },
    {
      id: 5,
      text: "price history",
      icon: "price",
    },
  ];
  return (
    <>
      <div className="scrollbar-custom mt-14 overflow-x-auto rounded-lg">
        {/* <!-- Tabs Nav --> */}
        <Tabs className="min-w-fit tabs">
          <TabList className="nav nav-tabs flex items-center">
            {/* <!-- Offers --> */}
            {tabsHeadText.map(({ id, text, icon }) => {
              return (
                <Tab className="nav-item bg-transparent" key={id}>
                  <button
                    className={
                      tabsActive === id
                        ? "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active"
                        : "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white"
                    }
                    onClick={() => setTabsActive(id)}
                  >
                    <svg className="icon mr-1 h-5 w-5 fill-current">
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

          <TabPanel className="tab-content">
            <OfferTab />
          </TabPanel>
          <TabPanel>
            <Properties />
          </TabPanel>
          <TabPanel>
            {/* <!-- Details --> */}
            <div
              className="tab-pane fade"
              id="details"
              role="tabpanel"
              aria-labelledby="details-tab"
            >
              <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6 md:p-10">
                <div className="mb-2 flex items-center">
                  <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">
                    Contract Address:
                  </span>
                  <a href="#" className="text-accent">
                    0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F
                  </a>
                </div>
                <div className="mb-2 flex items-center">
                  <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">
                    Token ID:
                  </span>
                  <span
                    className="js-copy-clipboard text-jacarta-700 cursor-pointer select-none dark:text-white"
                    data-tippy-content="Copy"
                  >
                    7714
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">
                    Token Standard:
                  </span>
                  <span className="text-jacarta-700 dark:text-white">
                    ERC-721
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">
                    Blockchain:
                  </span>
                  <span className="text-jacarta-700 dark:text-white">
                    Ethereum
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <Activity_tab />
          </TabPanel>
          <TabPanel>
            <Price_history classes="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6" />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ItemsTabs;
