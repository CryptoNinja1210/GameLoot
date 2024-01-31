
interface CollectionCardProps { 
  collectionName: string;
  description: string;
}

export default function CollectionCard({ collectionName, description }: CollectionCardProps) {
  return (
    <div className="bg-[#3b3b47] rounded-md w-[200px] overflow-hidden">
      <div className="bg-yellow-800 w-full h-[200px] rounded-md" />
      <div className="px-2 py-4 flex flex-col gap-2">
        <span className="text-xl">
          {collectionName}
        </span>
        <span className="text-sm text-gray-500">
          {description}
        </span>
      </div>
    </div>
  )
}