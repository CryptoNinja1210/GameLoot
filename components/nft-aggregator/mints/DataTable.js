import Image from "next/image";
import { Line } from "react-chartjs-2";

const DataTable = () => {
  const data = [
    {
      id: 1,
      imageSrc: "/images/nft-aggregator/item-1.jpg",
      title: "Monkeyme#155",
      time: "59 min ago",
      creatorImageSrc: "/images/avatars/creator_1.png",
      ownerImageSrc: "/images/avatars/owner_1.png",
      initialValue: "98",
      percentage: "-58.74%",
      mint: "Mint 0",
      floor: "Floor 0.003",
    },
    {
      id: 2,
      imageSrc: "/images/nft-aggregator/item-4.jpg",
      title: "Asuna #1649",
      time: "2 days ago",
      creatorImageSrc: "/images/avatars/creator_4.png",
      ownerImageSrc: "/images/avatars/owner_4.png",
      initialValue: "58",
      percentage: "9700.00%",
      mint: "Mint 0",
      floor: "Floor 0.038",
    },
    {
      id: 3,
      imageSrc: "/images/nft-aggregator/item-3.jpg",
      title: "Monkeyme#155",
      time: "59 min ago",
      creatorImageSrc: "/images/avatars/creator_3.png",
      ownerImageSrc: "/images/avatars/owner_3.png",
      initialValue: "98",
      percentage: "-58.74%",
      mint: "Mint 0",
      floor: "Floor 0.003",
    },
    {
      id: 4,
      imageSrc: "/images/nft-aggregator/item-4.jpg",
      title: "Asuna #1649",
      time: "2 days ago",
      creatorImageSrc: "/images/avatars/creator_4.png",
      ownerImageSrc: "/images/avatars/owner_4.png",
      initialValue: "58",
      percentage: "9700.00%",
      mint: "Mint 0",
      floor: "Floor 0.038",
    },
    {
      id: 5,
      imageSrc: "/images/nft-aggregator/item-5.jpg",
      title: "Monkeyme#155",
      time: "59 min ago",
      creatorImageSrc: "/images/avatars/creator_6.png",
      ownerImageSrc: "/images/avatars/owner_7.png",
      initialValue: "98",
      percentage: "-58.74%",
      mint: "Mint 0",
      floor: "Floor 0.003",
    },
    {
      id: 6,
      imageSrc: "/images/nft-aggregator/item-6.jpg",
      title: "Asuna #1649",
      time: "2 days ago",
      creatorImageSrc: "/images/avatars/creator_9.png",
      ownerImageSrc: "/images/avatars/owner_8.png",
      initialValue: "58",
      percentage: "9700.00%",
      mint: "Mint 0",
      floor: "Floor 0.038",
    },
    {
      id: 7,
      imageSrc: "/images/nft-aggregator/item-1.jpg",
      title: "Monkeyme#155",
      time: "59 min ago",
      creatorImageSrc: "/images/avatars/creator_1.png",
      ownerImageSrc: "/images/avatars/owner_1.png",
      initialValue: "98",
      percentage: "-58.74%",
      mint: "Mint 0",
      floor: "Floor 0.003",
    },
    {
      id: 8,
      imageSrc: "/images/nft-aggregator/item-4.jpg",
      title: "Asuna #1649",
      time: "2 days ago",
      creatorImageSrc: "/images/avatars/creator_4.png",
      ownerImageSrc: "/images/avatars/owner_4.png",
      initialValue: "58",
      percentage: "9700.00%",
      mint: "Mint 0",
      floor: "Floor 0.038",
    },
    {
      id: 9,
      imageSrc: "/images/nft-aggregator/item-4.jpg",
      title: "Asuna #1649",
      time: "2 days ago",
      creatorImageSrc: "/images/avatars/creator_4.png",
      ownerImageSrc: "/images/avatars/owner_4.png",
      initialValue: "58",
      percentage: "9700.00%",
      mint: "Mint 0",
      floor: "Floor 0.038",
    },
    {
      id: 10,
      imageSrc: "/images/nft-aggregator/item-5.jpg",
      title: "Monkeyme#155",
      time: "59 min ago",
      creatorImageSrc: "/images/avatars/creator_6.png",
      ownerImageSrc: "/images/avatars/owner_7.png",
      initialValue: "98",
      percentage: "-58.74%",
      mint: "Mint 0",
      floor: "Floor 0.003",
    },
    {
      id: 11,
      imageSrc: "/images/nft-aggregator/item-1.jpg",
      title: "Monkeyme#155",
      time: "59 min ago",
      creatorImageSrc: "/images/avatars/creator_1.png",
      ownerImageSrc: "/images/avatars/owner_1.png",
      initialValue: "98",
      percentage: "-58.74%",
      mint: "Mint 0",
      floor: "Floor 0.003",
    },
  ];

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap justify-between border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
          role="row"
        >
          <div className="flex w-1/2 sm:w-[30%] lg:w-[24%]" role="cell">
            <figure className="relative mr-3 w-8 shrink-0 self-start lg:w-10">
              <Image
                width={40}
                height={40}
                src={item.imageSrc}
                alt="items"
                className="rounded-2lg"
                loading="lazy"
              />
            </figure>
            <div>
              <span className="block text-sm text-jacarta-700 dark:text-white">
                {item.title}
              </span>
              <span className="text-xs text-jacarta-500 dark:text-jacarta-400">
                {item.time}
              </span>
            </div>
          </div>
          <div
            className="hidden w-3/12 items-center justify-end whitespace-nowrap md:w-[10%] lg:flex"
            role="cell"
          >
            <div className="flex items-center -space-x-2">
              <Image
                width={24}
                height={24}
                src={item.creatorImageSrc}
                alt="creator"
                className="h-6 w-6 rounded-full"
                title="Creator: Sussygirl"
              />
              <Image
                width={24}
                height={24}
                src={item.ownerImageSrc}
                alt="owner"
                className="h-6 w-6 rounded-full"
                title="Owner: Sussygirl"
              />
            </div>
          </div>
          <div
            className="hidden w-[18%] text-right sm:block md:w-[14%] lg:w-[10%]"
            role="cell"
          >
            <span className="block">{item.initialValue}</span>
            <span
              className={`text-xs ${
                item.percentage.includes("-") ? "text-red" : "text-green"
              }`}
            >
              {item.percentage}
            </span>
          </div>
          <div
            className="flex w-1/4 flex-col items-end justify-center text-right text-xs sm:w-[14%] lg:w-[11%]"
            role="cell"
          >
            <div className="flex items-center justify-end">
              <span>{item.mint}</span>
              <span title="ETH">
                <Image
                  width={14}
                  height={14}
                  src="/images/chains/eth-icon.svg"
                  alt="items"
                  className="ml-0.5 h-3.5 w-3.5"
                />
              </span>
            </div>
            <div className="flex items-center justify-end">
              <span>{item.floor}</span>
              <span title="ETH">
                <Image
                  width={14}
                  height={14}
                  src="/images/chains/eth-icon.svg"
                  alt="items"
                  className="ml-0.5 h-3.5 w-3.5"
                />
              </span>
            </div>
          </div>
          <div
            className="hidden w-[14%] flex-col items-end justify-center text-xs lg:flex"
            role="cell"
          >
            <div className="mb-1.5">
              <span className="text-sm text-jacarta-700 dark:text-white">
                {item.percentage}
              </span>
              <span>&nbsp;(614)</span>
            </div>
            <div className="w-24 overflow-hidden rounded-lg bg-jacarta-100 dark:bg-jacarta-600">
              <div
                className="h-1.5 rounded-lg bg-accent"
                style={{ width: item.percentage }}
              />
            </div>
          </div>
          <div
            className="flex w-1/4 flex-col items-end justify-center text-right text-xs sm:w-[14%] lg:w-[12%]"
            role="cell"
          >
            <div>
              <span className="text-sm text-jacarta-700">3,995</span>
              <span>(100%)</span>
            </div>
            <span>of 3,995</span>
          </div>

          <div
            className="mt-1 w-[9%] items-center justify-end sm:mt-0 sm:flex"
            role="columnheader"
          >
            <a
              href="#"
              className="inline-block rounded-full bg-accent py-1 px-4 text-center text-xs font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Mint
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default DataTable;
