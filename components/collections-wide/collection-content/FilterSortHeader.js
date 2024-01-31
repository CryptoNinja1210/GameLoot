import SortFilter from "./SortFilter";

const FilterSortHeader = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex space-x-2 mb-2">
        <button className="js-collections-toggle-filters flex h-10 group flex-shrink-0 items-center justify-center space-x-1 rounded-lg border border-jacarta-100 bg-white py-1.5 px-4 font-display text-sm font-semibold text-jacarta-500 hover:bg-accent hover:border-accent dark:hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-jacarta-700 dark:fill-white group-hover:fill-white"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4h18zM6.404 6L11 12.894V20h2v-7.106L17.596 6H6.404z" />
          </svg>
          <span className="mt-0.5 dark:text-white group-hover:text-white">
            Filters
          </span>
        </button>
        <button className="lex h-10 group flex-shrink-0 items-center justify-center space-x-1 rounded-lg border border-jacarta-100 bg-white py-1.5 px-4 font-medium text-2xs hover:bg-accent hover:border-accent dark:hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700">
          <span className="mt-0.5 dark:text-white group-hover:text-white">
            Clear All
          </span>
        </button>
      </div>
      {/* View / Sorting */}

      <div className="flex flex-wrap items-center space-x-3">
        <ul
          className="nav nav-tabs flex items-center justify-center border border-jacarta-100 dark:border-jacarta-600 rounded-lg overflow-hidden"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-link--style-5 active group relative flex items-center justify-center whitespace-nowrap h-[2.875rem] w-12 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
              id="view-grid-tab"
              data-bs-toggle="tab"
              data-bs-target="#view-grid"
              type="button"
              role="tab"
              aria-controls="view-grid"
              aria-selected="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="h-5 w-5 fill-current"
              >
                <path
                  d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </li>
          {/* End grid button */}

          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-link--style-5 relative flex items-center justify-center whitespace-nowrap h-[2.875rem] w-12 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
              id="view-list-tab"
              data-bs-toggle="tab"
              data-bs-target="#view-list"
              type="button"
              role="tab"
              aria-controls="view-list"
              aria-selected="false"
              tabIndex={-1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="h-5 w-5 fill-current"
              >
                <path
                  d="M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </li>
          {/* End list button */}
        </ul>
        <SortFilter />
      </div>
    </div>
  );
};

export default FilterSortHeader;
