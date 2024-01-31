import React, { useState } from "react";

const Categories = () => {
  const categories = [
    { name: "Art", color: "accent" },
    { name: "Collectibles", color: "jacarta" },
    { name: "Domain", color: "jacarta" },
    { name: "Music", color: "jacarta" },
    { name: "Photography", color: "jacarta" },
    { name: "Virtual World", color: "jacarta" },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <>
      {categories.map((category, index) => (
        <li className="my-1 mr-2.5" key={index}>
          <button
            className={`group flex h-9 items-center rounded-lg ${
              index === activeCategory
                ? "border-accent bg-accent text-white border"
                : `border border-jacarta-100 bg-white text-${category.color}-500`
            } px-4 font-display text-sm font-semibold transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white`}
            onClick={() => handleCategoryClick(index)}
          >
            <span>{category.name}</span>
          </button>
        </li>
      ))}
    </>
  );
};

export default Categories;
