import React, { useState } from "react";

const FilterRightMenu = () => {
  const [activeMenu, setActiveMenu] = useState("24h");

  const menuItems = [
    { id: "24h", label: "24h" },
    { id: "6h", label: "6h" },
    { id: "1h", label: "1h" },
    { id: "30m", label: "30m" },
    { id: "15m", label: "15m" },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="flex flex-shrink-0 items-center text-xs font-medium text-jacarta-500 dark:text-jacarta-300 sm:text-sm">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className={`flex h-10 w-full cursor-pointer items-center justify-center whitespace-nowrap border ${
            activeMenu === menuItem.id
              ? "border-transparent bg-accent text-white"
              : "border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700"
          } p-3 ${menuItem.id === "24h" ? "first:rounded-l-lg" : ""} ${
            menuItem.id === "15m" ? "last:rounded-r-lg" : ""
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
