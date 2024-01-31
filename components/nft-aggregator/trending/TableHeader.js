const TableHeader = () => {
  return (
    <div
      className="flex items-center bg-jacarta-50 py-5 px-4 text-jacarta-700 dark:bg-jacarta-800 dark:text-jacarta-100"
      role="row"
    >
      <div
        className="w-6/12 truncate text-left md:w-6/12 lg:w-4/12"
        role="columnheader"
      >
        Collection
      </div>
      <div
        className="flex w-3/12 cursor-pointer items-center justify-end text-accent md:w-2/12"
        role="columnheader"
      >
        24h Volume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={16}
          height={16}
          className="ml-1 flex-shrink-0 fill-accent"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
        </svg>
      </div>
      <div
        className="hidden w-2/12 cursor-pointer items-center justify-end text-right md:flex"
        role="columnheader"
      >
        24h
        <svg
          width={16}
          height={25}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <g clipPath="url(#clip0_2135_22855)">
            <path
              d="M8 7.219l-3.3 3.3-.942-.943L8 5.333l4.243 4.243-.943.943-3.3-3.3z"
              fill="currentColor"
            />
          </g>
          <g clipPath="url(#clip1_2135_22855)">
            <path
              d="M8 17.781l3.3-3.3.943.943L8 19.667l-4.242-4.243.942-.943 3.3 3.3z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2135_22855">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
            <clipPath id="clip1_2135_22855">
              <path fill="#fff" transform="translate(0 9)" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className="flex w-3/12 cursor-pointer items-center justify-end md:w-2/12"
        role="columnheader"
      >
        Floor Price
        <svg
          width={16}
          height={25}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <g clipPath="url(#clip0_2135_22855)">
            <path
              d="M8 7.219l-3.3 3.3-.942-.943L8 5.333l4.243 4.243-.943.943-3.3-3.3z"
              fill="currentColor"
            />
          </g>
          <g clipPath="url(#clip1_2135_22855)">
            <path
              d="M8 17.781l3.3-3.3.943.943L8 19.667l-4.242-4.243.942-.943 3.3 3.3z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2135_22855">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
            <clipPath id="clip1_2135_22855">
              <path fill="#fff" transform="translate(0 9)" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className="hidden w-1/12 cursor-pointer items-center justify-end text-right lg:flex"
        role="columnheader"
      >
        Owners
        <svg
          width={16}
          height={25}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <g clipPath="url(#clip0_2135_22855)">
            <path
              d="M8 7.219l-3.3 3.3-.942-.943L8 5.333l4.243 4.243-.943.943-3.3-3.3z"
              fill="currentColor"
            />
          </g>
          <g clipPath="url(#clip1_2135_22855)">
            <path
              d="M8 17.781l3.3-3.3.943.943L8 19.667l-4.242-4.243.942-.943 3.3 3.3z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2135_22855">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
            <clipPath id="clip1_2135_22855">
              <path fill="#fff" transform="translate(0 9)" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className="hidden w-1/12 cursor-pointer items-center justify-end text-right lg:flex"
        role="columnheader"
      >
        Supply
        <svg
          width={16}
          height={25}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <g clipPath="url(#clip0_2135_22855)">
            <path
              d="M8 7.219l-3.3 3.3-.942-.943L8 5.333l4.243 4.243-.943.943-3.3-3.3z"
              fill="currentColor"
            />
          </g>
          <g clipPath="url(#clip1_2135_22855)">
            <path
              d="M8 17.781l3.3-3.3.943.943L8 19.667l-4.242-4.243.942-.943 3.3 3.3z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2135_22855">
              <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
            <clipPath id="clip1_2135_22855">
              <path fill="#fff" transform="translate(0 9)" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TableHeader;
