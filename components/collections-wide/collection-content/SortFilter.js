import { useState } from "react";

const sortOptions = [
  { label: "Recently Listed", value: "recently_listed" },
  { label: "Recently Created", value: "recently_created" },
  { label: "Recently Sold", value: "recently_sold" },
  { label: "Recently Received", value: "recently_received" },
  { label: "Ending Soon", value: "ending_soon" },
  { label: "Price Low to High", value: "price_low_high" },
  { label: "Price High to Low", value: "price_high_low" },
  { label: "Highest Last Sale", value: "highest_last_sale" },
  { label: "Oldest", value: "oldest" },
];

const SortFilter = () => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dropdown relative cursor-pointer">
      <div
        className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white h-12 py-3 px-4 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
        role="button"
        id="categoriesSort"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>{selectedOption.label}</span>
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
      {/* End selected value */}

      <div
        className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
        aria-labelledby="categoriesSort"
      >
        {sortOptions.map((option) => (
          <button
            key={option.value}
            className={`dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors ${
              selectedOption.value === option.value
                ? "bg-jacarta-50 dark:bg-jacarta-600"
                : "hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
            } ${selectedOption.value === option.value && "font-semibold"}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option.label}
            {selectedOption.value === option.value && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="h-4 w-4 fill-accent"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortFilter;
