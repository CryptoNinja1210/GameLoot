interface ListItemProps {
  username: string;
  score: number;
}

export default function ListItem({ username, score }: ListItemProps) {
  return (
    <div className="flex items-center px-4 py-2 bg-[#3b3b47]">
      <div className="rounded-full w-16 h-16 bg-gray-500 mr-4" />
      <div className="font-bold">
        {username}
      </div>
      <div className="font-bold text-lg ml-auto">
        {score}
      </div>
    </div>
  )
}