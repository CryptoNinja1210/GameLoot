import DropdownFilter from "./DropdownFilter";

const PriceFilter = () => {
  return (
    <>
      <DropdownFilter />
      {/* End dropdown */}

      <div className="flex space-x-4">
        <input
          className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
          type="text"
          placeholder="Min"
        />
        <input
          className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
          type="text"
          placeholder="Max"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-accent-lighter w-full py-3 px-8 text-center font-semibold text-white transition-all hover:bg-accent-dark"
      >
        Apply
      </button>
    </>
  );
};

export default PriceFilter;
