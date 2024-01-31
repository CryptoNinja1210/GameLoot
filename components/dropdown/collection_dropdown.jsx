import React, { useState } from "react";
import { updateCollectionData } from "../../redux/counterSlice";
import { useDispatch } from "react-redux";

const Collection_dropdown = ({ data, value, select }) => {
  const dispatch = useDispatch();
  const [dropdownItemActive, setDropdownItemActive] = useState(null);
  const [dropdownShow, setDropdownShow] = useState(false);

  const handleDropdown = () => {
    window.addEventListener("click", (w) => {
      w.preventDefault()
      if (w.target.closest(".dropdown-toggle")) {
        if (dropdownShow) {
          setDropdownShow(false);
        } else {
          setDropdownShow(true);
        }
      } else {
        setDropdownShow(false);
      }
    });
  };
  const selectItem = (id, i) => {
    setDropdownItemActive(id)
    select(i)
  }

  console.log(data, value)
  const dropdownItemText = [
    {
      id: 1,
      text: "trending",
    },
    {
      id: 2,
      text: "top",
    },
    {
      id: 3,
      text: "recent",
    },
  ];
  return (
    <>
      <div className="dropdown relative my-1 cursor-pointer">
        <button
          className="dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-56 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white"
          onClick={handleDropdown}
        >
          <span className="font-display">{value}</span>
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
            dropdownShow
              ? " dark:bg-jacarta-800 z-10 max-w-sm w-[14rem] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0 show"
              : " dark:bg-jacarta-800 z-10 max-w-sm w-[14rem] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0 hidden"
          }
        >
          {data.map(({ id, text }, i) => {
            return (
              <button
                key={id}
                className="dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                onClick={() => selectItem(id, i)}
              >
                <span>{text}</span>
                {dropdownItemActive === id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-accent h-4 w-4 pl-1"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Collection_dropdown;
