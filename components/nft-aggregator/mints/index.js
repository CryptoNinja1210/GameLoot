import DataTable from "./DataTable";
import DropdownMenu from "./DropdownMenu";
import FilterRightMenu from "./FilterRightMenu";
import Form from "./Form";
import TableHeader from "./TableHeader";

const MintsContent = () => {
  return (
    <div
      role="table"
      className="rounded-2lg border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
    >
      <div className="flex flex-col gap-4 rounded-t-2lg border-b border-jacarta-100 bg-jacarta-50 p-4 dark:border-jacarta-600 dark:bg-jacarta-800 sm:gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-between gap-4 md:flex-row md:items-center md:gap-10">
          <div className="hidden flex-shrink-0 flex-col space-y-1 md:flex">
            <div className="flex flex-shrink-0 items-center space-x-1">
              <span
                className="mr-1 inline-block h-4 w-4 animate-heartBeat bg-contain bg-center text-xl"
                style={{
                  backgroundImage:
                    "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png)",
                }}
              />
              <div className="hidden flex-shrink-0 flex-col sm:flex">
                <div className="text-base font-medium uppercase text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
                  Live View
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-jacarta-300 dark:text-jacarta-400">
              <div className="text-2xs text-jacarta-500 dark:text-jacarta-300">
                196 results
              </div>
              <span>|</span>
              <div className="text-2xs">10 min ago</div>
            </div>
          </div>
          <div className="relative flex w-full flex-1">
            <Form />
          </div>
        </div>
        {/* End flex */}

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center lg:justify-start">
          <DropdownMenu />
          <FilterRightMenu />
        </div>
        {/* End flex */}

        <div className="flex flex-shrink-0 items-center gap-3 md:hidden">
          <div className="flex flex-col space-y-1">
            <div className="flex flex-shrink-0 items-center space-x-1">
              <span
                className="mr-1 inline-block h-4 w-4 animate-heartBeat bg-contain bg-center text-xl"
                style={{
                  backgroundImage:
                    "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/images/apple/64/2764-fe0f.png)",
                }}
              />
              <div className="flex flex-shrink-0 flex-col">
                <div className="text-base font-medium uppercase text-jacarta-500 dark:text-jacarta-300 md:whitespace-nowrap">
                  Live View
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-jacarta-300 dark:text-jacarta-400">
              <div className="text-2xs text-jacarta-500 dark:text-jacarta-200">
                196 results
              </div>
              <span>|</span>
              <div className="text-2xs">10 min ago</div>
            </div>
          </div>
        </div>
      </div>

      <TableHeader />
      <DataTable />
    </div>
  );
};

export default MintsContent;
