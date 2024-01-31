import ListItem from "./ListItem";
import TopThreeItem from "./TopThreeItem";

interface TabContentProps {
  filter: "region" | "national" | "global"
}

export default function TabContent({ filter }: TabContentProps) {
  const top3Data = [
    {
      username: "Top1 user",
      score: 2430
    },
    {
      username: "Top2 user",
      score: 1847
    },
    {
      username: "Top3 user",
      score: 1674
    },
  ];
  const otherData = [
    {
      username: "4th user",
      score: 1124
    },
    {
      username: "5th user",
      score: 1012
    },
    {
      username: "6th user",
      score: 940
    },
    {
      username: "7th user",
      score: 870
    },
    {
      username: "8th user",
      score: 700
    },
  ];

  return (
    <div className="max-w-[750px] mx-auto mt-6 flex flex-col">
      <div className="w-full flex justify-around bg-[#3b3b47] mb-4 pt-2 pb-4">
        {top3Data.map((user, index) => (
          <TopThreeItem
            key={user.username}
            username={user.username}
            rank={index + 1}
            score={user.score}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {otherData.map((user) => (
          <ListItem
            key={user.username}
            username={user.username}
            score={user.score}
          />
        ))}
      </div>
    </div>
  )
}