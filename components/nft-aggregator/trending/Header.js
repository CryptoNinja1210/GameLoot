import FilterRightMenu from "./FilterRightMenu";
import Form from "./Form";

const Header = () => {
  return (
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
        <div className="flex flex-shrink-0 flex-col">
          <div className="text-base font-medium text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
            196 results
          </div>
          <div className="text-2xs text-jacarta-300 dark:text-jacarta-400">
            10 min ago
          </div>
        </div>
      </div>
      <Form />
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex flex-shrink-0 items-center gap-3 md:hidden">
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
        <FilterRightMenu />
      </div>
    </div>
  );
};

export default Header;
