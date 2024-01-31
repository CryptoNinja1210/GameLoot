import React, { useState } from "react";

const FilterWise = () => {
  const filterOptions = [
    { id: "buyNow", label: "Buy Now" },
    { id: "onAuction", label: "On Auction" },
    { id: "new", label: "New" },
    { id: "hasOffers", label: "Has Offers" },
  ];

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterToggle = (filterId) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId));
    } else {
      setSelectedFilters([...selectedFilters, filterId]);
    }
  };

  return (
    <>
      {filterOptions.map((option) => (
        <li key={option.id}>
          <label className="flex items-center cursor-pointer w-full">
            <input
              type="checkbox"
              id={option.id}
              className="h-5 w-5 mr-2 rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
              checked={selectedFilters.includes(option.id)}
              onChange={() => handleFilterToggle(option.id)}
            />
            <span className="dark:text-white">{option.label}</span>
          </label>
        </li>
      ))}
    </>
  );
};

export default FilterWise;
