import GridItems from "./GridItems";
import ListItems from "./ListItems";

const Collections = ({contractAddress}) => {
  return (
    <div className="tab-content">
      {/* Grid */}
      <div
        className="tab-pane fade show active"
        id="view-grid" 
        role="tabpanel"
        aria-labelledby="view-grid-tab"
      >
        <div className="">
          <GridItems contractAddress={contractAddress} />
        </div>
      </div>
      {/* List */}
      <div
        className="tab-pane fade"
        id="view-list"
        role="tabpanel"
        aria-labelledby="view-list-tab"
      >
        <div className="scrollbar-custom overflow-x-auto">
          <div
            role="table"
            className="w-full min-w-[736px] border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white rounded-2lg"
          >
            <div
              className="flex rounded-t-2lg bg-jacarta-50 dark:bg-jacarta-600"
              role="row"
            >
              <div className="md:w-2/5 w-1/4 py-3 px-4" role="columnheader">
                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                  Collection
                </span>
              </div>
              <div
                className="md:w-[12%] w-[15%] py-3 px-4 text-right"
                role="columnheader"
              >
                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                  Floor Price
                </span>
              </div>
              <div
                className="md:w-[12%] w-[15%] py-3 px-4 text-right"
                role="columnheader"
              >
                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                  Volume
                </span>
              </div>
              <div
                className="md:w-[12%] w-[15%] py-3 px-4 text-right"
                role="columnheader"
              >
                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                  Volume Change
                </span>
              </div>
              <div
                className="md:w-[12%] w-[15%] py-3 px-4 text-right"
                role="columnheader"
              >
                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                  Items
                </span>
              </div>
              <div
                className="md:w-[12%] w-[15%] py-3 px-4 text-right"
                role="columnheader"
              >
                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                  Owners
                </span>
              </div>
            </div>
            <ListItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
