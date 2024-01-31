import Image from "next/image";

const SingleFeatuer = () => {
  const featureContent = [
    {
      id: 1,
      bgLight: "bg-[#CDBCFF]",
      bgFill: "bg-accent",
      icon: "1",
      meta: "$76 billion",
      textInfo: "24h trading volume on our app exchange",
    },
    {
      id: 2,
      bgLight: "bg-[#C4F2E3]",
      bgFill: "bg-green",
      icon: "2",
      meta: "310+",
      textInfo: "Cryptocurrencies listed",
    },
    {
      id: 3,
      bgLight: "bg-[#CDDFFB]",
      bgFill: "bg-blue",
      icon: "3",
      meta: "100+ million",
      textInfo: "Download our app and register users in 3 minutes",
    },
    {
      id: 4,
      bgLight: "bg-[#FFD0D0]",
      bgFill: "bg-red",
      icon: "4",
      meta: "$0.00023",
      textInfo: "Lowest transaction fees",
    },
  ];
  return (
    <>
      {featureContent.map((item) => (
        <div
          className="rounded-2.5xl bg-light-base p-8 text-center dark:bg-jacarta-800"
          key={item.id}
        >
          <div className={`mb-6 inline-flex rounded-full ${item.bgLight} p-3`}>
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${item.bgFill}`}
            >
              <Image
                width={20}
                height={20}
                src={`/images/crypto-app/${item.icon}.svg`}
                alt="icon"
                className="h-5 w-5 "
              />
            </div>
          </div>
          <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
            {item.meta}
          </h3>
          <p className="dark:text-jacarta-300">{item.textInfo}</p>
        </div>
      ))}
    </>
  );
};

export default SingleFeatuer;
