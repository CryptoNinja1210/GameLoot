import Categories from "./category/Categories";
import ChainCurrency from "./chains/ChainCurrency";
import CollectionsItem from "./collections/CollectionsItem";
import Form from "./collections/Form";
import FilterWise from "./status/FilterWise";
import PriceFilter from "./price";

const Sidebar = () => {
  return (
    <div className="lg:w-1/5 mb-10 js-collections-sidebar lg:h-[calc(100vh_-_232px)] lg:overflow-auto lg:sticky lg:top-32 lg:mr-12 pr-4 scrollbar-custom divide-y divide-jacarta-100 dark:divide-jacarta-600">
      <div>
        <h2 id="filters-collections-heading">
          <button
            className="accordion-button relative flex w-full items-center justify-between py-3 text-left font-display text-xl text-jacarta-700 dark:text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filters-collections"
            aria-expanded="true"
            aria-controls="filters-collections"
          >
            <span>Collections</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="accordion-arrow h-5 w-5 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </button>
        </h2>
        <div
          id="filters-collections"
          className="mt-3 collapse show"
          aria-labelledby="filters-collections-heading"
        >
          <Form />
          <ul className="space-y-6 mb-8">
            <CollectionsItem />
          </ul>
        </div>
      </div>
      {/* Collections filter */}

      <div className="mt-4 pt-4">
        <h2 id="filters-chains-heading">
          <button
            className="accordion-button collapsed relative flex w-full items-center justify-between py-3 text-left font-display text-xl text-jacarta-700 dark:text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filters-chains"
            aria-expanded="false"
            aria-controls="filters-chains"
          >
            <span>Chains</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="accordion-arrow h-5 w-5 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </button>
        </h2>
        <div
          id="filters-chains"
          className="mt-3 collapse"
          aria-labelledby="filters-chains-heading"
        >
          <ul className="space-y-6 mb-8">
            <ChainCurrency />
          </ul>
        </div>
      </div>
      {/* Chains filter */}

      <div className="mt-4 pt-4">
        <h2 id="filters-status-heading">
          <button
            className="accordion-button collapsed relative flex w-full items-center justify-between py-3 text-left font-display text-xl text-jacarta-700 dark:text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filters-status"
            aria-expanded="false"
            aria-controls="filters-status"
          >
            <span>Status</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="accordion-arrow h-5 w-5 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </button>
        </h2>
        <div
          id="filters-status"
          className="mt-3 collapse"
          aria-labelledby="filters-status-heading"
        >
          <ul className="space-y-6 mb-8">
            <FilterWise />
          </ul>
        </div>
      </div>
      {/* Status filter */}

      <div className="mt-4 pt-4">
        <h2 id="filters-price-heading">
          <button
            className="accordion-button relative flex w-full items-center justify-between py-3 text-left font-display text-xl text-jacarta-700 dark:text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filters-price"
            aria-expanded="true"
            aria-controls="filters-price"
          >
            <span>Price</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="accordion-arrow h-5 w-5 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </button>
        </h2>
        <div
          id="filters-price"
          className="mt-3 mb-8 space-y-4 collapse show"
          aria-labelledby="filters-price-heading"
        >
          <PriceFilter />
        </div>
      </div>
      {/* Price filter */}

      <div className="mt-4 pt-4">
        <h2 id="filters-categories-heading">
          <button
            className="accordion-button relative flex w-full items-center justify-between py-3 text-left font-display text-xl text-jacarta-700 dark:text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filters-categories"
            aria-expanded="true"
            aria-controls="filters-categories"
          >
            <span>Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="accordion-arrow h-5 w-5 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>
          </button>
        </h2>
        <div
          id="filters-categories"
          className="mt-3 collapse show"
          aria-labelledby="filters-categories-heading"
        >
          <ul className="flex flex-wrap items-center">
            <Categories />
          </ul>
        </div>
      </div>
      {/* Categories filter */}
    </div>
  );
};

export default Sidebar;
