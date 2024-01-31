import React from "react";

const SingleProcessBlock = () => {
  const ProcessBlockContent = [
    {
      id: 1,
      step: "01",
      title: "Create an account",
      text: `Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein.`,
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            className="absolute top-5 right-5 fill-accent/25 dark:fill-accent/50"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </>
      ),
    },
    {
      id: 2,
      step: "02",
      title: "Link your bank account",
      text: `Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein.`,
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            className="absolute top-5 right-5 fill-accent/25 dark:fill-accent/50"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </>
      ),
    },
    {
      id: 3,
      step: "03",
      title: "Start buying & selling",
      text: `Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein.`,
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            className="absolute top-5 right-5 fill-accent/25 dark:fill-accent/50"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9.33 11.5h2.17A4.5 4.5 0 0 1 16 16H8.999L9 17h8v-1a5.578 5.578 0 0 0-.886-3H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625L6 10.071A6.967 6.967 0 0 1 9.33 11.5zM5 19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-7-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
          </svg>
        </>
      ),
    },
  ];

  return (
    <>
      {ProcessBlockContent.map((item) => (
        <div
          className="relative mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700 lg:w-1/3"
          key={item.id}
        >
          {item.icon}
          <span className="mb-2 inline-block text-2xs font-medium text-accent">
            Step {item.step}
          </span>
          <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
            {item.title}
          </h3>
          <p className="dark:text-jacarta-300">{item.text}</p>

          <div className="absolute -bottom-6 left-1/2 inline-flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-light-base dark:bg-jacarta-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="fill-accent dark:fill-accent-lighter"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleProcessBlock;
