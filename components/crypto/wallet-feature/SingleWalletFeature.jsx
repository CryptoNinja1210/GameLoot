import Image from "next/image";

const SingleWalletFeature = () => {
  const singleWalletContent = [
    {
      id: 1,
      icon: "w1",
      title: " Keyless Encryption",
      text: `It is commonly adopted, applies to secure message transmission either
      directly without any key distribution in advance`,
    },
    {
      id: 2,
      icon: "w2",
      title: " Biometric Protection",
      text: `Consider using anti-spoofing technology in conjunction with live
      detection to block unauthorized users.`,
    },
    {
      id: 3,
      icon: "w3",
      title: " 3-Factor Recovery",
      text: `It is commonly adopted, applies to secure message transmission either
      directly without any key distribution in advance`,
    },
  ];
  return (
    <>
      {singleWalletContent.map((item) => (
        <div
          className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700"
          key={item.id}
        >
          <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
            <Image
              src={`/images/crypto-app/${item.icon}.svg`}
              alt="icon"
              width={24}
              height={24}
              className="h-12 w-12"
            />
          </div>

          <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
            {item.title}
          </h3>
          <p className="dark:text-jacarta-300">{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default SingleWalletFeature;
