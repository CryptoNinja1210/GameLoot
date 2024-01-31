import Image from "next/image";

const ChainCurrency = () => {
  const chainCurrencies = [
    {
      id: 1,
      imageSrc: "/images/chains/eth-chain.png",
      alt: "Ethereum",
      name: "Ethereum",
    },
    {
      id: 2,
      imageSrc: "/images/chains/polygon-chain.png",
      alt: "Polygon",
      name: "Polygon",
    },
    {
      id: 3,
      imageSrc: "/images/chains/tezos-chain.png",
      alt: "Tezos",
      name: "Tezos",
    },
    {
      id: 4,
      imageSrc: "/images/chains/solana-chain.png",
      alt: "Solana",
      name: "Solana",
    },
  ];

  return (
    <>
      {chainCurrencies.map((currency) => (
        <li key={currency.id}>
          <label className="flex items-center cursor-pointer w-full">
            <input
              type="checkbox"
              id="terms"
              className="h-5 w-5 mr-3 rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
            />
            <figure className="relative mr-2 w-8 shrink-0 flex">
              <Image
                width={32}
                height={32}
                src={currency.imageSrc}
                alt={currency.alt}
                className="rounded-2lg"
                loading="lazy"
              />
            </figure>
            <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">
              {currency.name}
            </span>
          </label>
        </li>
      ))}
    </>
  );
};

export default ChainCurrency;
