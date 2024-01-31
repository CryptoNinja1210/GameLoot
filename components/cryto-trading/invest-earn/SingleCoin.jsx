import Image from "next/image";

const SingleCoin = () => {
  const singleCoinContent = [
    {
      id: 1,
      icon: "/images/crypto-trading/btc.png",
      name: "BTC",
      priceRange: "0.64%-71.53%",
    },
    {
      id: 2,
      icon: "/images/crypto-trading/usdt.png",
      name: "USDT",
      priceRange: "0.60%-201.77%",
    },
    {
      id: 3,
      icon: "/images/crypto-trading/eth.png",
      name: "ETH",
      priceRange: "0.31%-71.53%",
    },
    {
      id: 4,
      icon: "/images/crypto-trading/bnb.png",
      name: "BNB",
      priceRange: "0.35%-60.96%",
    },
    {
      id: 5,
      icon: "/images/crypto-trading/xrp.png",
      name: " XRP",
      priceRange: "0.30%-180.44%",
    },
    {
      id: 6,
      icon: "/images/crypto-trading/ada.png",
      name: "ADA",
      priceRange: "1.48%-93.33%",
    },
    {
      id: 7,
      icon: "/images/crypto-trading/sol.png",
      name: "SOL",
      priceRange: "2.67%-112.70%",
    },
    {
      id: 8,
      icon: "/images/crypto-trading/dot.png",
      name: "DOT",
      priceRange: "1.05%-177.23%",
    },
    {
      id: 9,
      icon: "/images/crypto-trading/matic.png",
      name: "MATIC",
      priceRange: "2.00%-215.36%",
    },
    {
      id: 10,
      icon: "/images/crypto-trading/doge.png",
      name: "DOGE",
      priceRange: "0.60%-69.53%",
    },
    {
      id: 11,
      icon: "/images/crypto-trading/xmr.png",
      name: " XMR",
      priceRange: "0.65%-72.53%",
    },
    {
      id: 12,
      icon: "/images/crypto-trading/link.png",
      name: "LINK",
      priceRange: "0.65%-58.48%",
    },
  ];

  return (
    <>
      {singleCoinContent.map((item) => (
        <a
          href="#"
          className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
          key={item.id}
        >
          <figure className="mr-4 shrink-0">
            <Image
              src={item.icon}
              alt="coin icon"
              width={48}
              height={48}
              className="h-12 w-12 rounded-2lg"
              loading="lazy"
            />
          </figure>
          <div>
            <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
              {item.name}
            </span>
            <span className="text-sm dark:text-jacarta-300">
              <span className="text-green">{item.priceRange}</span> APR
            </span>
          </div>
        </a>
      ))}
    </>
  );
};

export default SingleCoin;
