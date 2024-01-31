import DataTable from "./DataTable";
import FilterRightMenu from "./FilterRightMenu";
import Form from "./Form";
import TableHeader from "./TableHeader";

const SweepsContent = () => {
  return (
    <div
      role="table"
      className="rounded-2lg border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
    >
      <div className="flex flex-col justify-between gap-4 rounded-t-2lg border-b border-jacarta-100 bg-jacarta-50 p-4 dark:border-jacarta-600 dark:bg-jacarta-800 md:flex-row md:items-center md:gap-6">
        <div className="hidden flex-shrink-0 items-center gap-3 md:flex">
          <div className="flex h-10 w-10 group cursor-pointer items-center justify-center rounded-2lg dark:bg-jacarta-700 dark:border-jacarta-600 border border-jacarta-100 bg-white dark:hover:bg-accent hover:bg-accent hover:border-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="h-4 w-4 fill-jacarta-700 dark:fill-white group-hover:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
            </svg>
          </div>
          <div className="hidden flex-shrink-0 flex-col sm:flex">
            <div className="text-base font-medium text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
              196 results
            </div>
            <div className="text-2xs text-jacarta-300 dark:text-jacarta-400">
              10 min ago
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-1">
          <Form />
        </div>
        {/* End flex */}

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center lg:justify-start">
          <FilterRightMenu />
          <div className="flex justify-between">
            <div className="flex flex-shrink-0 items-center gap-3 sm:hidden">
              <div className="flex h-10 w-10 group cursor-pointer items-center justify-center rounded-2lg dark:bg-jacarta-700 dark:border-jacarta-600 border border-jacarta-100 bg-white dark:hover:bg-accent hover:bg-accent hover:border-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  className="h-4 w-4 fill-jacarta-700 dark:fill-white group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
                </svg>
              </div>
              <div className="flex flex-shrink-0 flex-col">
                <div className="text-left text-base font-medium text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
                  196 results
                </div>
                <div className="text-left text-2xs text-jacarta-300 dark:text-jacarta-400">
                  10 min ago
                </div>
              </div>
            </div>
            <button className="flex h-10 group flex-shrink-0 items-center justify-center space-x-1 rounded-lg border border-jacarta-100 bg-white py-1.5 px-4 font-display text-sm font-semibold text-jacarta-500 hover:bg-accent hover:border-accent dark:border-jacarta-600 dark:bg-jacarta-700">
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
              <span className="mt-0.5 dark:text-jacarta-300 group-hover:text-white">
                Filter
              </span>
            </button>
          </div>
        </div>
        {/* End flex */}
      </div>
      <TableHeader />
      <DataTable />
    </div>
  );
};

export default SweepsContent;
