import Image from "next/image";
import Link from "next/link";

const DataTable = () => {
  // Array of objects representing the table data
  const tableData = [
    {
      id: 1,
      imageSrc: "/images/nft-aggregator/item-1.jpg",
      name: "Monkeyme#155",
      price: "1,035.01",
      percentage: "+2,262.44%",
      quantity: "7.650",
      followers: "5.7K",
      views: "9.6K",
      isVerified: true,
      isIncrease: true,
    },
    {
      id: 2,
      imageSrc: "/images/nft-aggregator/item-2.jpg",
      name: "Azuki #4017",
      price: "501.75",
      percentage: "-299.12%",
      quantity: "14.007",
      followers: "12.5K",
      views: "19.4K",
      isVerified: true,
      isIncrease: false,
    },
    {
      id: 3,
      imageSrc: "/images/nft-aggregator/item-3.jpg",
      name: "Splendid Girl",
      price: "398.06",
      percentage: "",
      quantity: "65.000",
      followers: "6.2K",
      views: "10.0K",
      isVerified: false,
      isIncrease: false,
    },
    {
      id: 4,
      imageSrc: "/images/nft-aggregator/item-4.jpg",
      name: "Monkeyme#155",
      price: "1,035.01",
      percentage: "+2,262.44%",
      quantity: "7.650",
      followers: "5.7K",
      views: "9.6K",
      isVerified: true,
      isIncrease: true,
    },
    {
      id: 5,
      imageSrc: "/images/nft-aggregator/item-5.jpg",
      name: "Azuki #4017",
      price: "501.75",
      percentage: "-299.12%",
      quantity: "14.007",
      followers: "12.5K",
      views: "19.4K",
      isVerified: true,
      isIncrease: false,
    },
    {
      id: 6,
      imageSrc: "/images/nft-aggregator/item-6.jpg",
      name: "Splendid Girl",
      price: "398.06",
      percentage: "",
      quantity: "65.000",
      followers: "6.2K",
      views: "10.0K",
      isVerified: false,
      isIncrease: false,
    },
    {
      id: 7,
      imageSrc: "/images/nft-aggregator/item-7.jpg",
      name: "Monkeyme#155",
      price: "1,035.01",
      percentage: "+2,262.44%",
      quantity: "7.650",
      followers: "5.7K",
      views: "9.6K",
      isVerified: true,
      isIncrease: true,
    },
    {
      id: 8,
      imageSrc: "/images/nft-aggregator/item-8.jpg",
      name: "Azuki #4017",
      price: "501.75",
      percentage: "-299.12%",
      quantity: "14.007",
      followers: "12.5K",
      views: "19.4K",
      isVerified: true,
      isIncrease: false,
    },
    {
      id: 9,
      imageSrc: "/images/nft-aggregator/item-9.jpg",
      name: "Splendid Girl",
      price: "398.06",
      percentage: "-118.70%",
      quantity: "65.000",
      followers: "6.2K",
      views: "10.0K",
      isVerified: false,
      isIncrease: false,
    },
    {
      id: 10,
      imageSrc: "/images/nft-aggregator/item-10.jpg",
      name: "Azuki #4017",
      price: "501.75",
      percentage: "-299.12%",
      quantity: "14.007",
      followers: "12.5K",
      views: "19.4K",
      isVerified: true,
      isIncrease: true,
    },
    {
      id: 11,
      imageSrc: "/images/nft-aggregator/item-11.jpg",
      name: "Splendid Girl",
      price: "398.06",
      percentage: "+118.70%",
      quantity: "65.000",
      followers: "6.2K",
      views: "10.0K",
      isVerified: false,
      isIncrease: true,
    },
    {
      id: 12,
      imageSrc: "/images/nft-aggregator/item-12.jpg",
      name: "Splendid Girl",
      price: "398.06",
      percentage: "+118.70%",
      quantity: "65.000",
      followers: "6.2K",
      views: "10.0K",
      isVerified: false,
      isIncrease: true,
    },
  ];

  return <>
    {tableData.map((item) => (
      (<Link
      href="/collection/explore_collection"
      key={item.id}
      className="flex border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
      role="row"
      >

        <div
          className="flex w-6/12 items-center md:w-6/12 lg:w-4/12"
          role="cell"
        >
          <figure className="relative mr-5 w-8 shrink-0 self-start lg:w-10">
            <Image
              width={40}
              height={40}
              src={item.imageSrc}
              alt="items"
              className="rounded-2lg"
              loading="lazy"
            />
            {item.isVerified && (
              <div
                className="absolute -right-3 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                title="Verified Collection"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="h-[.875rem] w-[.875rem] fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </div>
            )}
          </figure>
          <span className="text-sm text-jacarta-700 dark:text-white">
            {item.name}
          </span>
        </div>
        <div
          className="flex w-3/12 items-center justify-end whitespace-nowrap md:w-2/12"
          role="cell"
        >
          <span>{item.price}</span>
          <span title="ETH">
            <Image
              width={14}
              height={14}
              src="/images/chains/eth-icon.svg"
              alt="items"
              className="ml-0.5 h-4 w-4"
            />
          </span>
        </div>
        <div
          className="hidden w-2/12 items-center justify-end md:flex"
          role="cell"
        >
          <span className={item.isIncrease ? "text-green" : "text-red"}>
            {item.percentage}
          </span>
        </div>
        <div
          className="flex w-3/12 items-center justify-end md:w-2/12"
          role="cell"
        >
          <span>{item.quantity}</span>
          <span title="ETH">
            <Image
              width={14}
              height={14}
              src="/images/chains/eth-icon.svg"
              alt="items"
              className="ml-0.5 h-4 w-4"
            />
          </span>
        </div>
        <div
          className="hidden w-1/12 items-center justify-end lg:flex"
          role="cell"
        >
          <span>{item.followers}</span>
        </div>
        <div
          className="hidden w-1/12 items-center justify-end lg:flex"
          role="cell"
        >
          <span>{item.views}</span>
        </div>

      </Link>)
    ))}
  </>;
};

export default DataTable;
