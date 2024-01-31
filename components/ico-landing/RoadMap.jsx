import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const RoadMap = () => {
  const [itemsTabs, setItemsTabs] = useState(1);

  const roadMapList = [
    {
      id: 1,
      tabMenu: "2021 Q3",
    },
    {
      id: 2,
      tabMenu: "2021 Q4",
    },
    {
      id: 3,
      tabMenu: "2021 Q1",
    },
    {
      id: 4,
      tabMenu: "2021 Q2",
    },
    {
      id: 5,
      tabMenu: "2021 Q3",
    },
    {
      id: 6,
      tabMenu: "2021 Q4",
    },
    {
      id: 7,
      tabMenu: "2021 Q1",
    },
  ];
  const roadMapContent = [
    {
      id: 1,
      text: `Interested investors can buy into an initial coin offering to receive a new cryptocurrency token issued by the company. This token may have some utility related to the product or service that the company is offering or represent a stake in the company or project.`,
    },
    {
      id: 2,
      text: `This timeline details our funding and development goals. Connect our AI to your exchange account and invest crypto automatically.`,
    },
    {
      id: 3,
      text: `It is commonly adopted, applies to secure message transmission either directly without any key distribution in advance. This token may have some utility related to the product or service that the company is offering or represent a stake in the company or project.`,
    },
    {
      id: 4,
      text: `Interested investors can buy into an initial coin offering to receive a new cryptocurrency token issued by the company. This token may have some utility related to the product or service that the company is offering or represent a stake in the company or project.`,
    },
    {
      id: 5,
      text: `It is commonly adopted, applies to secure message transmission either directly without any key distribution in advance. This token may have some utility related to the product or service that the company is offering or represent a stake in the company or project.`,
    },
    {
      id: 6,
      text: `This timeline details our funding and development goals. Connect our AI to your exchange account and invest crypto automatically.`,
    },
    {
      id: 7,
      text: `It is commonly adopted, applies to secure message transmission either directly without any key distribution in advance. This token may have some utility related to the product or service that the company is offering or represent a stake in the company or project.`,
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-jacarta-900/60"
      style={{
        backgroundImage: 'url("/images/ico-landing/ico_landing_roadmap.jpg")',
      }}
    >
      <div className="container relative z-10">
        <h2 className="mb-6 font-display text-3xl text-white">Roadmap</h2>
        <p className="mb-12 max-w-xl text-lg text-jacarta-300">
          This timeline details our funding and development goals. Connect our
          AI to your exchange account and invest crypto automatically.
        </p>

        <Tabs>
          <div className="flex">
            <TabList className="nav nav-tabs w-1/3 space-y-9 self-start border-l-2 border-jacarta-200 py-2 pl-2 md:pl-8">
              {roadMapList.map((item) => (
                <Tab
                  className="nav-item"
                  key={item.id}
                  onClick={() => setItemsTabs(item.id)}
                >
                  <button
                    className={
                      itemsTabs === item.id
                        ? "active nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                        : "nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                    }
                  >
                    <span className="px-2 font-display text-lg font-medium md:text-2xl">
                      {item.tabMenu}
                    </span>
                  </button>
                </Tab>
              ))}
            </TabList>
            {/* End Tablist  */}

            <div className="tab-content w-full pl-4 md:mt-16 md:w-2/4">
              {roadMapContent.map((item) => (
                <TabPanel key={item.id}>
                  <p className="text-lg text-white">{item.text}</p>
                </TabPanel>
              ))}
            </div>
            {/* End tab-content */}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default RoadMap;
