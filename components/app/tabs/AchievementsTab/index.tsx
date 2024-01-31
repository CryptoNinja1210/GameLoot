import { Spinner, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
import { GameEntity } from "../../../../lib/interfaces/custom.types";
import UnlockedTab from "./UnlockedTab";
import React from "react";
import LockedTab from "./LockedTab";

export default function AchievementsTab({ game }: { game: GameEntity }) {
  const [activeTab, setActiveTab] = useState("unlocked");

  const tabsData = [
    {
      label: "Unlocked",
      value: "unlocked",
      desc: <UnlockedTab />,
    },
    {
      label: "Locked",
      value: "locked",
      desc: <LockedTab />,
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