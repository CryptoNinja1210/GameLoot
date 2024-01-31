import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import {
  updatetrendingCategorySorText,
  updateTrendingCategoryItemByInput,
} from "../../redux/counterSlice";
import { useDispatch } from "react-redux";
import {
  updateRenkingData,
  updateRenkingDataByBlockchain,
  updateRenkingDataByPostdate,
} from "../../redux/counterSlice";
import Image from "next/image";

const Recently_added_dropdown = ({ data, dropdownFor }) => {
  const dispatch = useDispatch();
  const [currencyValFrom, setCurrencyValFrom] = useState("");
  const [currencyValTo, setCurrencyValTo] = useState("");
  const [sortActive, setsortActive] = useState(1);
  const [sortFilterText, setSortFilterText] = useState("");
  const [renkingCategoriesdropdownShow, setRenkingCategoriesDropdownShow] =
    useState(false);
  const [blockChaindropdownShow, setBlockChainDropdownShow] = useState(false);
  const [itemDateDropdown, setItemDateDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [dropdownSale, setDropdownSale] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  const handleRenkingCategoriesDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".rankingCategoriesDropdown")) {
        if (renkingCategoriesdropdownShow) {
          setRenkingCategoriesDropdownShow(false);
        } else {
          setRenkingCategoriesDropdownShow(true);
        }
      } else {
        setRenkingCategoriesDropdownShow(false);
      }
    });
  };
  const handleBlockChainDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".blockchainDropdown")) {
        if (blockChaindropdownShow) {
          setBlockChainDropdownShow(false);
        } else {
          setBlockChainDropdownShow(true);
        }
      } else {
        setBlockChainDropdownShow(false);
      }
    });
  };

  const handleItemDateDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".itemDateDropdown")) {
        if (itemDateDropdown) {
          setItemDateDropdown(false);
        } else {
          setItemDateDropdown(true);
        }
      } else {
        setItemDateDropdown(false);
      }
    });
  };

  const handleCategoryDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".category-dropdown")) {
        if (categoryDropdown) {
          setCategoryDropdown(false);
        } else {
          setCategoryDropdown(true);
        }
      } else {
        setCategoryDropdown(false);
      }
    });
  };

  const handleSaleDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".dropdown-sale")) {
        if (dropdownSale) {
          setDropdownSale(false);
        } else {
          setDropdownSale(true);
        }
      } else {
        setDropdownSale(false);
      }
    });
  };

  const handleCurrencyDropdown = () => {
    console.log("first");
    if (currencyDropdown) {
      setCurrencyDropdown(false);
    } else {
      setCurrencyDropdown(true);
    }
  };

  // console.log(blockChaindropdownShow);

  useEffect(() => {
    dispatch(updatetrendingCategorySorText(sortFilterText));
  }, [sortFilterText, dispatch]);

  const inputData = [
    {
      id: 1,
      text: "Verified Only",
    },
    {
      id: 2,
      text: "NFSW Only",
    },
    {
      id: 3,
      text: "Show Lazy Minted",
    },
  ];

  const handleInput = (e, text) => {
    if (e.target.checked) {
      // console.log(text);
      dispatch(updateTrendingCategoryItemByInput(text));
    } else {
      dispatch(updateTrendingCategoryItemByInput(""));
    }
  };

  const handleCurrencyValTo = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setCurrencyValTo(0);
    } else {
      setCurrencyValTo(value);
    }
  };
  const handleCurrencyValFrom = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setCurrencyValFrom(0);
    } else {
      setCurrencyValFrom(value);
    }
  };

  if (dropdownFor === "recently_added") {
    return (
      <div>
        {/* dropdown */}
        <div className="dropdown relative my-1 cursor-pointer">
          <Tippy
            animation="fade"
            arrow={false}
            trigger="click"
            interactive="true"
            placement="bottom"
            className="tooltip-container"
            content={
              <div
                className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-500"
                aria-labelledby="categoriesSort"
              >
                <span className="font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold">
                  Sort By
                </span>
                {data.map((item) => {
                  const { id, text } = item;
                  return (
                    <button
                      key={id}
                      className="dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                      onClick={() => {
                        setsortActive(id);

                        setSortFilterText(text);
                      }}
                    >
                      {text}
                      {sortActive === id && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="fill-accent mb-[3px] h-4 w-4"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                        </svg>
                      )}
                    </button>
                  );
                })}

                <span className="font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold">
                  Options
                </span>
                {inputData.map(({ id, text }) => {
                  return (
                    <div
                      key={id}
                      className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                    >
                      <span className="flex items-center justify-between">
                        <span>{text}</span>
                        <input
                          type="checkbox"
                          name="check"
                          className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
                          onChange={(e) => handleInput(e, text)}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            }
          >
            <div className="dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white">
              <span className="font-display">Trending</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-500 h-4 w-4 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
            </div>
          </Tippy>
        </div>
      </div>
    );
  } else if (dropdownFor === "blockchain") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle blockchainDropdown dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white"
          onClick={handleBlockChainDropdown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z"></path>
          </svg>
          <span>Blockchain</span>
        </button>

        <div
          className={
            blockChaindropdownShow
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0"
          }
        >
          <ul className="flex flex-col flex-wrap">
            {data.map(({ id, text }) => {
              return (
                <li key={id} onClick={() => setsortActive(id)}>
                  <button
                    className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                    onClick={() =>
                      dispatch(updateRenkingDataByBlockchain(text))
                    }
                  >
                    <span className="text-jacarta-700 dark:text-white">
                      {text}
                    </span>
                    {sortActive === id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else if (dropdownFor === "category") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle category-dropdown dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white"
          onClick={handleCategoryDropdown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"></path>
          </svg>
          <span>Category</span>
        </button>

        <div
          className={
            categoryDropdown
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0"
          }
        >
          <ul className="flex flex-col flex-wrap">
            {data.map(({ id, text }) => {
              return (
                <li key={id} onClick={() => setsortActive(id)}>
                  <button className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                    <span className="text-jacarta-700 dark:text-white">
                      {text}
                    </span>
                    {sortActive === id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else if (dropdownFor === "rankingCategories") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle rankingCategoriesDropdown dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white"
          onClick={handleRenkingCategoriesDropdown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"></path>
          </svg>
          <span>all Category</span>
        </button>

        <div
          className={
            renkingCategoriesdropdownShow
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0 hidden"
          }
        >
          <ul className="flex flex-col flex-wrap">
            {data.map(({ id, text }) => {
              return (
                <li key={id} onClick={() => setsortActive(id)}>
                  <button
                    className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                    onClick={() => dispatch(updateRenkingData(text))}
                  >
                    <span className="text-jacarta-700 dark:text-white">
                      {text}
                    </span>
                    {sortActive === id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else if (dropdownFor === "sale-type") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle dropdown-sale dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white"
          onClick={handleSaleDropdown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM13 10V5l-5 7h3v5l5-7h-3z"></path>
          </svg>
          <span>Sale type</span>
        </button>

        <div
          className={
            dropdownSale
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0"
          }
        >
          <ul className="flex flex-col flex-wrap">
            {data.map(({ id, text }) => {
              return (
                <li key={id}>
                  <button
                    className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                    onClick={() => setsortActive(id)}
                  >
                    <span className="text-jacarta-700 dark:text-white">
                      {text}
                    </span>
                    {sortActive === id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="dark:border-jacarta-600 border-jacarta-100 -ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t px-7 pt-4">
            <button
              type="button"
              className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold transition-all hover:text-white"
            >
              Clear
            </button>
            <button
              type="button"
              className="bg-accent shadow-accent-volume hover:bg-accent-dark flex-1 rounded-full py-2 px-6 text-center text-sm font-semibold text-white transition-all"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  } else if (dropdownFor === "price-range") {
    const currencyData = [
      {
        id: 1,
        image: "/images/chains/ETH.png",
        text: "ETH",
      },
      {
        id: 2,
        image: "/images/chains/FLOW.png",
        text: "FLOW",
      },
      {
        id: 3,
        image: "/images/chains/FUSD.png",
        text: "FUSD",
      },
      {
        id: 4,
        image: "/images/chains/XTZ.png",
        text: "XTZ",
      },
      {
        id: 5,
        image: "/images/chains/DAI.png",
        text: "DAI",
      },
      {
        id: 6,
        image: "/images/chains/RARI.png",
        text: "RARI",
      },
    ];
    return (
      <div className="my-1 mr-2.5">
        <Tippy
          animation="fade"
          arrow={false}
          trigger="click"
          interactive="true"
          placement="bottom"
          className="tooltip-container"
          content={
            <div
              className="dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show"
              aria-labelledby="priceRangeFilter"
            >
              {/* <!-- Blockchain --> */}
              <div className="dropdown mb-4 cursor-pointer px-5 pt-2 relative">
                <button
                  className="currency-dropdown dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border py-3.5 px-3 text-sm dark:text-white w-full"
                  onClick={handleCurrencyDropdown}
                >
                  <span className="font-display flex items-center">
                    <Image
                      width={24}
                      height={24}
                      src="/images/chains/ETH.png"
                      alt="eth"
                      className="mr-2 h-5 w-5 rounded-full"
                    />
                    ETH
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-500 h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                  </svg>
                </button>

                <div
                  className={
                    currencyDropdown
                      ? "dark:bg-jacarta-800 z-10 min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
                      : "dark:bg-jacarta-800 z-10 min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0 hidden"
                  }
                >
                  {currencyData.map(({ id, text, image }) => {
                    return (
                      <button
                        key={id}
                        className="dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                        onClick={() => setCurrencyDropdown(false)}
                      >
                        <span className="flex items-center">
                          <Image
                            width={24}
                            height={24}
                            src={image}
                            alt="eth"
                            className="mr-2 h-5 w-5 rounded-full"
                          />
                          {text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* <!-- From / To --> */}
              <div className="flex items-center space-x-3 px-5 pb-2">
                <input
                  type="number"
                  placeholder="From"
                  value={currencyValFrom}
                  onChange={(e) => handleCurrencyValFrom(e)}
                  className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                />
                <input
                  type="number"
                  placeholder="To"
                  value={currencyValTo}
                  onChange={(e) => handleCurrencyValTo(e)}
                  className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                />
              </div>

              <div className="dark:border-jacarta-600 border-jacarta-100 -ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t px-7 pt-4">
                <button
                  type="button"
                  className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold transition-all hover:text-white"
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark flex-1 rounded-full py-2 px-6 text-center text-sm font-semibold text-white transition-all"
                >
                  Apply
                </button>
              </div>
            </div>
          }
        >
          <button
            className="group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white"
            id="priceRangeFilter"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z"></path>
            </svg>
            <span>Price Range</span>
          </button>
        </Tippy>
      </div>
    );
  } else if (dropdownFor === "last7Days-ranks") {
    return (
      <div className="dropdown relative my-1 cursor-pointer">
        <button
          className="dark:bg-jacarta-700 itemDateDropdown dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white"
          onClick={handleItemDateDropdown}
        >
          <span className="font-display">Last 7 Days</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-500 h-4 w-4 dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
          </svg>
        </button>

        <div
          className={
            itemDateDropdown
              ? "dropdown-menu dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-xl max-w-xs w-[13rem] bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-xl max-w-xs w-[13rem] bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0"
          }
        >
          {data.map(({ id, text }) => {
            return (
              <button
                key={id}
                onClick={() => {
                  setsortActive(id);
                  dispatch(updateRenkingDataByPostdate(text));
                }}
                className="dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
              >
                {text}
                {sortActive === id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-accent mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Recently_added_dropdown;
