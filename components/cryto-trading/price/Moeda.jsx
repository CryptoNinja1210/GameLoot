const Moeda = ({ name, price, symbol, volume, image, priceChange, rank }) => {
  return (
    <div className="flex crypto-price items-center">
      <div className="crypto-price__index hidden sm:block lg:pl-10 pl-4 w-[6%] text-sm">
        {rank}
      </div>
      <div className="crypto-price__coin flex w-[36%] items-center px-3 py-5">
        <img
          src={image}
          className="mr-2 flex-shrink-0"
          width="24"
          height="24"
          alt="crypto"
        />
        <div className="crypto-price__name flex-1 text-sm font-display font-semibold">
          <span className="text-jacarta-700 dark:text-white mr-3">{name}</span>
          <span className="text-jacarta-300">{symbol}</span>
        </div>
      </div>

      <div className="crypto-price__price lg:w-[16%] text-right w-[24%] px-3 py-5 text-jacarta-700 dark:text-white ">
        ${price}
      </div>
      <div className="crypto-price__volume w-1/5 hidden text-right md:block px-3 py-5 text-jacarta-500">
        ${volume.toLocaleString()}
      </div>

      {priceChange < 0 ? (
        <div className="crypto-price__change lg:w-[12%] text-right w-[16%] px-3 py-5">
          <span className="text-red">{priceChange.toFixed(2)}%</span>
        </div>
      ) : (
        <div className="crypto-price__change lg:w-[12%] text-right w-[16%] px-3 py-5">
          <span className="text-green"> {priceChange.toFixed(2)}%</span>
        </div>
      )}

      <div className="crypto-price__trade w-[10%] pl-3 pr-4 py-5 text-right">
        <a
          href="https://coinmarketcap.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full hover:bg-jacarta-700 bg-green px-5 py-2 text-white font-display font-semibold text-sm"
        >
          Buy
        </a>
      </div>
    </div>
  );
};

export default Moeda;
