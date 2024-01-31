import Image from "next/image";

interface TopThreeItemProps {
  rank: number; // 1, 2, 3
  username: string;
  score: number;
}

const scoreColors = {
  "1": "#f5bd25",
  "2": "#2458e6",
  "3": "#07a72a",
}
const itemOrders = {
  "1": 2,
  "2": 1,
  "3": 3
}

export default function TopThreeItem({ rank, username, score }: TopThreeItemProps) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ order: itemOrders[rank], marginTop: rank === 1 ? 0 : 36 }}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/images/game_page/crown.jpeg"
          width={24}
          height={22}
          alt="crown"
          style={{ visibility: rank === 1 ? "visible" : "hidden" }}
        />
        <div className="rounded-full w-16 h-16 bg-gray-500" />
      </div>

      <div className="font-bold text-lg mt-4 mb-6">
        {username}
      </div>
      <div className="font-bold text-lg" style={{ color: scoreColors[rank] || "#07a72a" }}>
        {score}
      </div>
    </div>
  )
}