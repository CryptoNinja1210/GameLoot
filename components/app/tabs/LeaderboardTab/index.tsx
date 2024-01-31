import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import TabContent from "./TabContent";

export default function LeaderboardTab() {
  const [activeTab, setActiveTab] = useState("region");

  const tabsData = [
    {
      label: "Region",
      value: "region",
      desc: <TabContent filter="region" />,
    },
    {
      label: "National",
      value: "national",
      desc: <TabContent filter="national" />,
    },
    {
      label: "Global",
      value: "global",
      desc: <TabContent filter="global" />,
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-none bg-[#3b3b47] px-0 py-6 mt-1 mx-auto w-[80%]"
        indicatorProps={{
          className:
            "bg-transparent shadow-none rounded-none",
        }}
      >
        {tabsData.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-100 text-lg" : "text-purple-300 text-lg"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {tabsData.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="text-gray-300">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}