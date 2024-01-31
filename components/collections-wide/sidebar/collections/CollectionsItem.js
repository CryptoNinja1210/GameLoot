import Image from "next/image";

const CollectionsItem = () => {
  const collectionItems = [
    {
      id: 1,
      imageSrc: "/images/nft-aggregator/item-14.jpg",
      alt: "avatar 1",
      name: "NFT Funny Cat",
      count: "30,643",
    },
    {
      id: 2,
      imageSrc: "/images/nft-aggregator/item-2.jpg",
      alt: "avatar 1",
      name: "Azuki #4017",
      count: "10,000",
    },
    {
      id: 3,
      imageSrc: "/images/nft-aggregator/item-7.jpg",
      alt: "avatar 1",
      name: "Crypto bull #6195",
      count: "8,899",
    },
    {
      id: 4,
      imageSrc: "/images/nft-aggregator/item-1.jpg",
      alt: "avatar 1",
      name: "Monkeyme#155",
      count: "25,671",
    },
  ];

  return (
    <>
      {collectionItems.map((item) => (
        <li key={item.id}>
          <label className="flex items-center cursor-pointer w-full">
            <input
              type="checkbox"
              id="terms"
              className="h-5 w-5 mr-3 rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
            />
            <figure className="relative mr-2 w-8 shrink-0 lg:mr-4 lg:w-10 flex">
              <Image
                width={40}
                height={40}
                src={item.imageSrc}
                alt={item.alt}
                className="rounded-2lg"
                loading="lazy"
              />
              {item.id === 1 && (
                <div
                  className="absolute -right-2 -bottom-1 flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
            <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">
              {item.name}
            </span>
            <span className="ml-auto text-sm dark:text-jacarta-300">
              {item.count}
            </span>
          </label>
        </li>
      ))}
    </>
  );
};

export default CollectionsItem;
