import Image from "next/image";
import TradeVolume from "./TradeVolume";

const Intro = () => {
  return (
    // <!-- Intro -->
    <section className="bg-gradient-to-r from-[transparent_33%] to-[#F5F8FA_33%] py-36 dark:to-[#101436_33%]">
      <div className="container">
        <div className="lg:flex lg:justify-between">
          {/* <!-- Image --> */}
          <div className="relative lg:w-[45%]">
            <figure className="relative">
              <Image
                width={500}
                height={500}
                src="/images/dao/intro_dao.jpg"
                className="rounded-2.5xl w-full h-full object-cover"
                alt="web protocol"
              />
            </figure>
          </div>

          {/* <!-- Info --> */}
          <div className="py-10 lg:w-[55%] lg:pl-24">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
              Evolution of NFT Platforms Web3 Social Impact Protocol
            </h2>
            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
              NFTs are implemented on blockchains using smart contracts. Each
              token minted on the blockchain protocol carries unique information
              called Metadata.
            </p>
            <p className="dark:text-jacarta-300">
              Therefore, NFT platforms or the NFT marketplace cannot be
              centralized. However, the founders of the blockchain protocol have
              sovereignty over decisions such as launching features on the
              blockchain, establishing rules, and unveiling upgrades.
            </p>
            <TradeVolume />
          </div>
        </div>
      </div>
    </section>
    // <!-- end intro -->
  );
};

export default Intro;
