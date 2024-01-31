import Image from "next/image";

const data = [
  {
    id: 1,
    creatorAvatar: "/images/avatars/creator_1.png",
    ownerAvatar: "/images/avatars/owner_1.png",
    itemImage: "/images/nft-aggregator/item-1.jpg",
    itemName: "Monkeyme#155",
    count: 15,
    price: 0.3,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x6ee5...ea21",
    timestamp: "just now",
  },
  {
    id: 2,
    creatorAvatar: "/images/avatars/creator_2.png",
    ownerAvatar: "/images/avatars/owner_2.png",
    itemImage: "/images/nft-aggregator/item-2.jpg",
    itemName: "Azuki #4017",
    count: 7,
    price: 9.3712,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x9120...edcc",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    creatorAvatar: "/images/avatars/creator_3.png",
    ownerAvatar: "/images/avatars/owner_3.png",
    itemImage: "/images/nft-aggregator/item-3.jpg",
    itemName: "Monkeyme#155",
    count: 15,
    price: 0.3,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x6ee5...ea21",
    timestamp: "just now",
  },
  {
    id: 4,
    creatorAvatar: "/images/avatars/creator_4.png",
    ownerAvatar: "/images/avatars/owner_4.png",
    itemImage: "/images/nft-aggregator/item-4.jpg",
    itemName: "Azuki #4017",
    count: 7,
    price: 9.3712,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x9120...edcc",
    timestamp: "1 hour ago",
  },
  {
    id: 5,
    creatorAvatar: "/images/avatars/creator_8.png",
    ownerAvatar: "/images/avatars/owner_5.png",
    itemImage: "/images/nft-aggregator/item-5.jpg",
    itemName: "Monkeyme#155",
    count: 15,
    price: 0.3,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x6ee5...ea21",
    timestamp: "just now",
  },
  {
    id: 6,
    creatorAvatar: "/images/avatars/creator_9.png",
    ownerAvatar: "/images/avatars/owner_8.png",
    itemImage: "/images/nft-aggregator/item-6.jpg",
    itemName: "Azuki #4017",
    count: 7,
    price: 9.3712,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x9120...edcc",
    timestamp: "1 hour ago",
  },
  {
    id: 7,
    creatorAvatar: "/images/avatars/creator_2.png",
    ownerAvatar: "/images/avatars/owner_7.png",
    itemImage: "/images/nft-aggregator/item-7.jpg",
    itemName: "Monkeyme#155",
    count: 15,
    price: 0.3,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x6ee5...ea21",
    timestamp: "just now",
  },
  {
    id: 8,
    creatorAvatar: "/images/avatars/creator_8.png",
    ownerAvatar: "/images/avatars/owner_8.png",
    itemImage: "/images/nft-aggregator/item-8.jpg",
    itemName: "Azuki #4017",
    count: 7,
    price: 9.3712,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x9120...edcc",
    timestamp: "1 hour ago",
  },
  {
    id: 9,
    creatorAvatar: "/images/avatars/creator_9.png",
    ownerAvatar: "/images/avatars/owner_9.png",
    itemImage: "/images/nft-aggregator/item-9.jpg",
    itemName: "Monkeyme#155",
    count: 15,
    price: 0.3,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x6ee5...ea21",
    timestamp: "just now",
  },
  {
    id: 10,
    creatorAvatar: "/images/avatars/creator_4.png",
    ownerAvatar: "/images/avatars/owner_10.png",
    itemImage: "/images/nft-aggregator/item-10.jpg",
    itemName: "Azuki #4017",
    count: 7,
    price: 9.3712,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x9120...edcc",
    timestamp: "1 hour ago",
  },
  {
    id: 11,
    creatorAvatar: "/images/avatars/creator_1.png",
    ownerAvatar: "/images/avatars/owner_11.png",
    itemImage: "/images/nft-aggregator/item-11.jpg",
    itemName: "Azuki #4017",
    count: 7,
    price: 9.3712,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x9120...edcc",
    timestamp: "1 hour ago",
  },
  {
    id: 12,
    creatorAvatar: "/images/avatars/creator_2.png",
    ownerAvatar: "/images/avatars/owner_7.png",
    itemImage: "/images/nft-aggregator/item-12.jpg",
    itemName: "Azuki #4017",
    count: 7,
    price: 9.3712,
    chainIcon: "/images/chains/eth-icon.svg",
    transactionHash: "0x9120...edcc",
    timestamp: "1 hour ago",
  },
];

const DataTable = () => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
          role="row"
        >
          <div className="hidden w-[14%] items-center -space-x-2 lg:flex">
            <Image
              width={24}
              height={24}
              src={item.creatorAvatar}
              alt="creator"
              className="h-6 w-6 rounded-full"
              title="Creator: Sussygirl"
            />
            <Image
              width={24}
              height={24}
              src={item.ownerAvatar}
              alt="owner"
              className="h-6 w-6 rounded-full"
              title="Owner: Sussygirl"
            />
          </div>
          <div
            className="flex w-6/12 items-center md:w-6/12 lg:w-4/12"
            role="cell"
          >
            <figure className="relative mr-4 w-8 shrink-0 self-start lg:w-10">
              <Image
                width={40}
                height={40}
                src={item.itemImage}
                alt="items"
                className="rounded-2lg"
                loading="lazy"
              />
            </figure>
            <span className="text-sm text-jacarta-700 dark:text-white">
              {item.itemName}
            </span>
          </div>
          <div
            className="hidden w-3/12 items-center justify-end whitespace-nowrap md:flex md:w-2/12"
            role="cell"
          >
            {item.count}
          </div>
          <div className="flex w-2/12 items-center justify-end" role="cell">
            <span className="text-green">{item.price.toFixed(4)}</span>
            <span title="ETH">
              <Image
                width={14}
                height={14}
                src={item.chainIcon}
                alt="items"
                className="ml-0.5 h-4 w-4"
              />
            </span>
          </div>
          <div
            className="hidden w-3/12 items-center justify-end md:w-2/12 lg:flex"
            role="cell"
          >
            -
          </div>
          <div
            className="hidden w-2/12 items-center justify-end text-accent md:flex"
            role="cell"
          >
            <a href="#">{item.transactionHash}</a>
          </div>
          <div
            className="hidden w-2/12 items-center justify-end md:flex"
            role="cell"
          >
            {item.timestamp}
          </div>
        </div>
      ))}
    </>
  );
};

export default DataTable;
