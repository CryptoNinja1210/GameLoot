import { Spinner, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import AboutTab from "../../../components/app/tabs/AboutTab";
import AchievementsTab from "../../../components/app/tabs/AchievementsTab";
import CollectionsTab from "../../../components/app/tabs/CollectionsTab";
import CommentsTab from "../../../components/app/tabs/CommentsTab";
import LeaderboardTab from "../../../components/app/tabs/LeaderboardTab";
import PageContainer from "../../../components/layout/PageContainer";
import { useOneGame } from "../../../hooks/useGames";


export default function GamePage() {
  const { query } = useRouter();
  const gameId = query["gameId"] as string;

  const [activeTab, setActiveTab] = useState("about");
  const { isLoading, data } = useOneGame(gameId);

  const tabsData = [
    {
      label: "About",
      value: "about",
      desc: <AboutTab game={data} />,
    },
    {
      label: "Achievements",
      value: "achievements",
      desc: <AchievementsTab game={data} />,
    },
    {
      label: "Leaderboard",
      value: "leaderboard",
      desc: <LeaderboardTab />,
    },
    {
      label: "Collections",
      value: "collections",
      desc: <CollectionsTab />,
    },
    {
      label: "Comments",
      value: "comments",
      desc: <CommentsTab />,
    },
  ];

  return (
    <PageContainer>
      {isLoading ? (
        <div className="flex">
          <Spinner />
        </div>
      ) : !data ? (
        <p>Not found gameId: {gameId}</p>
      ) : (
        <div>
          <Image
            src={data.thumbnailUrl}
            width={1440}
            height={768}
            alt="Preview Image"
          />

          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-y border-gray-900 bg-transparent px-0 py-2 mt-6 w-[80%] mx-auto"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-500 shadow-none rounded-none",
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
        </div>
      )}
    </PageContainer>
  )
}