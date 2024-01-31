import React from "react";

const CryptoCounter = () => {
  const funFactContent = [
    {
      id: 1,
      meta: "$159B",
      text: `Quarterly volume traded`,
    },
    {
      id: 2,
      meta: "100+",
      text: `Countries supported
      `,
    },
    {
      id: 3,
      meta: "108M+",
      text: `Verified users`,
    },
  ];
  return (
    <>
      {/* <!-- Stats --> */}
      <section className="bg-light-base py-24 pb-14 dark:bg-jacarta-700">
        <div className="container">
          <div className="md:flex md:flex-nowrap md:space-x-6">
            {funFactContent.map((item) => (
              <div className="mb-10 text-center md:w-1/3" key={item.id}>
                <span className="mb-3 block font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                  {item.meta}
                </span>
                <span className="text-lg dark:text-jacarta-300">
                  {item.text}
                </span>
              </div>
            ))}
            {/* End single block */}
          </div>
        </div>
      </section>
      {/* <!-- end stats -->  */}
    </>
  );
};

export default CryptoCounter;
