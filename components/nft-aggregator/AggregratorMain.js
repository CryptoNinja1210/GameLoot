import { useState } from "react";
import MintsContent from "./mints";
import SweepsContent from "./sweeps";
import TrendingContent from "./trending";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const AggregratorMain = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <section className="pb-24">
      <div className="container">
        <Tabs
          className="scrollbar-custom "
          selectedIndex={selectedTabIndex}
          onSelect={handleTabSelect}
        >
          {/* Tab List */}
          <TabList className="nav nav-tabs mb-4 flex items-center space-x-1 sm:space-x-6">
            <Tab className="nav-item">
              <button
                className={`nav-link nav-link--style-4 relative flex items-center whitespace-nowrap py-1.5 px-4 font-display font-semibold text-jacarta-400 hover:text-jacarta-700 dark:text-jacarta-200 dark:hover:text-white ${
                  selectedTabIndex === 0 ? "active" : ""
                }`}
                onClick={() => handleTabSelect(0)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="mr-1 h-5 w-5 fill-orange"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13 10h7l-9 13v-9H4l9-13z" />
                </svg>
                <span className="font-display text-base font-medium">
                  Trending
                </span>
              </button>
            </Tab>
            {/* End tab */}

            <Tab className="nav-item">
              <button
                className={`nav-link nav-link--style-4 relative flex items-center whitespace-nowrap py-1.5 px-4 font-display font-semibold text-jacarta-400 hover:text-jacarta-700 dark:text-jacarta-200 dark:hover:text-white ${
                  selectedTabIndex === 1 ? "active" : ""
                }`}
                onClick={() => handleTabSelect(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="mr-1 h-5 w-5 fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
                <span className="font-display text-base font-medium">
                  Sweeps
                </span>
              </button>
            </Tab>
            {/* End tab */}

            <Tab className="nav-item">
              {" "}
              <button
                className={`nav-link nav-link--style-4 relative flex items-center whitespace-nowrap py-1.5 px-4 font-display font-semibold text-jacarta-400 hover:text-jacarta-700 dark:text-jacarta-200 dark:hover:text-white ${
                  selectedTabIndex === 2 ? "active" : ""
                }`}
                onClick={() => handleTabSelect(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="mr-1 h-5 w-5 fill-green"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z" />
                </svg>
                <span className="font-display text-base font-medium">
                  Mints
                </span>
              </button>
            </Tab>
            {/* End tab */}
          </TabList>
          {/* End TabList */}

          <TabPanel>
            <TrendingContent />
          </TabPanel>
          {/* End Trending content */}

          <TabPanel>
            <SweepsContent />
          </TabPanel>
          {/* End Sweeps content */}

          <TabPanel>
            <MintsContent />
          </TabPanel>
          {/* End Mints content */}
        </Tabs>
      </div>
    </section>
  );
};

export default AggregratorMain;
