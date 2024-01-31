import Image from "next/image";
import Link from "next/link";

const ListItems = () => {

  const tableData = [
    {
      id: 1,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      name: "NFT Funny Cat",
      ethValue: "0.12",
      ethVolume: "3.265",
      ethChange: "-49.99%",
      views: "10.0K",
      likes: "3.5K",
      isVerified: true,
      isIncrease: true,
    },
    {
      id: 2,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      name: "Cryptopank",
      ethValue: "0.017",
      ethVolume: "5.344",
      ethChange: "+531.8%",
      views: "9.8K",
      likes: "868",
      isVerified: false,
      isIncrease: true,
    },
    {
      id: 3,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      name: "NFT Funny Cat",
      ethValue: "0.12",
      ethVolume: "3.265",
      ethChange: "-49.99%",
      views: "10.0K",
      likes: "3.5K",
      isVerified: false,
      isIncrease: true,
    },
    {
      id: 4,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      name: "Cryptopank",
      ethValue: "0.017",
      ethVolume: "5.344",
      ethChange: "+531.8%",
      views: "9.8K",
      likes: "868",
      isVerified: false,
      isIncrease: true,
    },
    {
      id: 5,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      name: "NFT Funny Cat",
      ethValue: "0.12",
      ethVolume: "3.265",
      ethChange: "-49.99%",
      views: "10.0K",
      likes: "3.5K",
      isVerified: false,
      isIncrease: true,
    },
    {
      id: 6,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      name: "Cryptopank",
      ethValue: "0.017",
      ethVolume: "5.344",
      ethChange: "+531.8%",
      views: "9.8K",
      likes: "868",
      isVerified: true,
      isIncrease: false,
    },
    {
      id: 7,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      name: "Cryptopank",
      ethValue: "0.017",
      ethVolume: "5.344",
      ethChange: "+531.8%",
      views: "9.8K",
      likes: "868",
      isVerified: true,
      isIncrease: false,
    },
  ];

  return (
    <>
      {tableData.map((row) => (
        <Link
          href="/user/avatar_6"
          key={row.id}
          className="flex transition-shadow hover:shadow-lg"
          role="row"
        >
          <div
            className="flex md:w-2/5 w-1/4 items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
            role="cell"
          >
            <span className="mr-3 lg:mr-5">{row.id}</span>
            <figure className="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">

              {row.isVerified && (
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
              {row.name}
            </span>
          </div>
          <div
            className="flex justify-end items-center md:w-[12%] w-[15%] whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
            role="cell"
          >
            <span className="-ml-1" title="ETH">
              <Image
                width={14}
                height={14}
                src="/images/eth.png"
                className="mr-1 h-4 w-4"
                alt="etherium icon"
              />
            </span>
            <span className="text-sm font-medium tracking-tight">
              {row.ethValue}
            </span>
          </div>
          <div
            className="flex justify-end md:w-[12%] w-[15%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
            role="cell"
          >
            <span className="-ml-1" title="ETH">
              <Image
                width={14}
                height={14}
                src="/images/eth.png"
                className="mr-1 h-4 w-4"
                alt="etherium icon"
              />
            </span>
            <span className="text-sm font-medium tracking-tight">
              {row.ethVolume}
            </span>
          </div>
          <div
            className="flex justify-end md:w-[12%] w-[15%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
            role="cell"
          >
            <span className={row.isIncrease ? "text-green" : "text-red"}>
              {row.ethChange}
            </span>
          </div>
          <div
            className="flex justify-end md:w-[12%] w-[15%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
            role="cell"
          >
            {row.views}
          </div>
          <div
            className="flex justify-end md:w-[12%] w-[15%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
            role="cell"
          >
            {row.likes}
          </div>
        </Link>
      ))}
    </>
  );
};

export default ListItems;
