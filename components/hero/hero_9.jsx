import Image from "next/image";
import Link from "next/link";

const Hero_9 = () => {
  const heroImgContent = [
    {
      id: 1,
      positionClass: "bottom-[17%] left-12",
      bgClass: "bg-[#8247E5]/50",
      icon: "/images/chains/polygon@2x.png",
      name: "Polygon",
      currencyMeta: "PY",
    },
    {
      id: 2,
      positionClass: "right-8 top-1/2",
      bgClass: "bg-[#62688F]/50",
      icon: "/images/chains/ethereum@2x.png",
      name: "Ethereum",
      currencyMeta: "ETH",
    },
    {
      id: 3,
      positionClass: "right-1/3 top-1/4",
      bgClass: "bg-[#000000]/50",
      icon: "/images/chains/bitcoin@2x.png",
      name: "Bitcoin",
      currencyMeta: " BTC",
    },
  ];
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="relative h-screen">
        <Image
          width={1519}
          height={722}
          src="/images/hero/hero_dao.jpg"
          alt="gradient"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* hero img */}

        <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
          <div className="grid h-full items-center gap-4 md:grid-cols-12">
            <div className="col-span-5 flex h-full flex-col items-center justify-center py-10 md:items-start lg:py-20 relative">
              <h1 className="mb-6 text-center font-display text-5xl text-white md:text-left lg:text-6xl">
                DAO-enabled NFT platforms or the NFT marketplaces
              </h1>
              <p className="mb-8 max-w-md text-center text-lg text-white md:text-left">
                Every digital creation available through MakersPlace is an
                authentic and truly unique.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/collection/explore_collection"
                  className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Get Started
                </Link>
                <Link
                  href="/collection/explore_collection"
                  className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                >
                  Learn More
                </Link>
              </div>
              {/* End button group */}
            </div>
            {/* End .col */}

            <div className="relative col-span-6 col-start-7 hidden h-full md:block">
              {heroImgContent.map((item) => (
                <div
                  className={`absolute ${item.positionClass} animate-fly`}
                  key={item.id}
                >
                  <div
                    className={`flex items-center space-x-4 rounded-2lg ${item.bgClass} p-2.5 pr-6 pl-0 backdrop-blur-md`}
                  >
                    <div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <Image
                        width={24}
                        height={24}
                        src={item.icon}
                        alt="icon"
                        className="max-w-[50%] object-contain"
                      />
                    </div>
                    <span className="font-display text-sm text-white">
                      {item.name}
                    </span>
                    <span className="font-display text-sm text-white/40">
                      {item.currencyMeta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_9;
