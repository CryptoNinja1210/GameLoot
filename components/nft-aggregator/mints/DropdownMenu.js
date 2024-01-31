import { useState } from "react";

const DropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = [
    { label: "All", icon: "mb-[3px] h-4 w-4 fill-accent" },
    { label: "Mintable", icon: "" },
    { label: "Free Mints", icon: "" },
    { label: "Paid Mints", icon: "" },
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setIsMenuOpen(false); // Close the dropdown menu when an item is selected
    // Apply your filtering logic here based on the selected filter
    // ...
  };

  return (
    <div className="dropdown cursor-pointer">
      <div
        className="dropdown-toggle inline-flex h-10 w-[220px] items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white lg:w-[8rem]"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="font-display">{selectedFilter}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          className="h-4 w-4 fill-jacarta-500 dark:fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
        </svg>
      </div>

      <div
        className={`dropdown-menu z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800 ${
          isMenuOpen ? "" : "hidden"
        }`}
        aria-labelledby="sort"
      >
        {filterOptions.map((option, index) => (
          <button
            key={index}
            className={`dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600 ${
              selectedFilter === option.label
                ? "bg-jacarta-50 dark:bg-jacarta-600"
                : ""
            }`}
            onClick={() => handleFilterClick(option.label)}
          >
            {option.label}
            {selectedFilter === option.label && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="mb-[3px] h-4 w-4 fill-accent"
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

export default DropdownMenu;
