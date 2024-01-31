import React, { useState } from "react";

const FilterRightMenu = () => {
  const [activeMenu, setActiveMenu] = useState("all-time");

  const menuItems = [
    { id: "all-time", label: "All Time" },
    { id: "30d", label: "30d" },
    { id: "7d", label: "7d" },
    { id: "24h", label: "24h" },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="flex flex-shrink-0 items-center text-xs font-medium text-jacarta-500 dark:text-jacarta-300 sm:text-sm">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className={`flex h-10 w-full cursor-pointer items-center whitespace-nowrap border ${
            activeMenu === menuItem.id
              ? "border-transparent bg-accent text-white"
              : "border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700"
          } p-3 ${menuItem.id === "all-time" ? "first:rounded-l-lg" : ""} ${
            menuItem.id === "24h" ? "last:rounded-r-lg" : ""
          } hover:border-transparent hover:bg-accent hover:text-white sm:px-4 sm:py-2`}
          onClick={() => handleMenuClick(menuItem.id)}
        >
          {menuItem.label}
        </div>
      ))}
    </div>
  );
};

export default FilterRightMenu;
