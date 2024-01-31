import React, { useState } from "react";

const DropdownFilter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const currencies = [
    { id: 1, label: "USD", icon: "usd" },
    { id: 2, label: "ETH", icon: "eth" },
    { id: 3, label: "SOL", icon: "sol" },
  ];

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="dropdown relative cursor-pointer">
      <div
        className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 bg-white w-full h-12 py-3 px-4 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
        role="button"
        id="filtersPrice"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>{selectedCurrency ? selectedCurrency.label : "USD"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          className="h-5 w-5 fill-jacarta-500 dark:fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
        </svg>
      </div>
      <div
        className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
        aria-labelledby="filtersPrice"
      >
        {currencies.map((currency) => (
          <button
            key={currency.id}
            className={`dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors ${
              selectedCurrency === currency
                ? "bg-jacarta-50 dark:bg-jacarta-600"
                : "hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
            }`}
            onClick={() => handleCurrencySelect(currency)}
          >
            {currency.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropdownFilter;
