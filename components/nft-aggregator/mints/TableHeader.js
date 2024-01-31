const TableHeader = () => {
  return (
    <div
      className="flex items-center justify-between bg-jacarta-50 py-5 px-4 text-jacarta-700 dark:bg-jacarta-800 dark:text-jacarta-100"
      role="row"
    >
      <div
        className="w-1/2 truncate text-left sm:w-[30%] lg:w-[24%]"
        role="columnheader"
      >
        Collection Mint Date
      </div>
      <div
        className="hidden w-3/12 items-center justify-end md:w-[10%] lg:flex"
        role="columnheader"
      >
        Top Wallets
        <span
          className="ml-1 mt-1 inline-block"
          data-tippy-content="Sources wallets are verified OpenSea wallets and top profit making wallets."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="mb-[2px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
          </svg>
        </span>
      </div>
      <div
        className="hidden w-[18%] cursor-pointer items-center justify-end text-right text-accent sm:flex md:w-[14%] lg:w-[10%]"
        role="columnheader"
      >
        30m Mints
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={16}
          height={16}
          className="ml-1 flex-shrink-0 fill-accent"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
        </svg>
      </div>
      <div
        className="flex w-1/4 items-center justify-end sm:w-[14%] lg:w-[11%]"
        role="columnheader"
      >
        Price
        <span
          className="ml-1 mt-1 inline-block"
          data-tippy-content="Mint price: Collections may have dynamic mint prices. We'll continually update prices accordingly"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="mb-[2px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
          </svg>
        </span>
      </div>
      <div
        className="hidden w-[14%] items-center justify-end text-right lg:flex"
        role="columnheader"
      >
        Unique Minters
        <span
          className="ml-1 mt-1 inline-block"
          data-tippy-content="Minters: # of unique wallets who minted. Holders: # of unique wallets holding the nft"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="mb-[2px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
          </svg>
        </span>
      </div>
      <div
        className="flex w-1/4 items-center justify-end text-right sm:w-[14%] lg:w-[12%]"
        role="columnheader"
      >
        Total Mints
      </div>

      <div className="hidden w-[9%] sm:block" role="columnheader" />
    </div>
  );
};

export default TableHeader;
