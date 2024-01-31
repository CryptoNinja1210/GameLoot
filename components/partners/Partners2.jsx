import Image from "next/image";
import Link from "next/link";

const Partners2 = () => {
  const partnerGroup = [
    { id: 1, link: "https://www.nft-dao.org/", logo: "partner_logo_1" },
    { id: 2, link: "https://www.nft-dao.org/", logo: "partner_logo_2" },
    { id: 3, link: "https://www.nft-dao.org/", logo: "partner_logo_3" },
    { id: 4, link: "https://www.nft-dao.org/", logo: "partner_logo_4" },
    { id: 5, link: "https://www.nft-dao.org/", logo: "partner_logo_5" },
  ];
  return (
    <>
      <div className="bg-light-base dark:bg-jacarta-700 ">
        <div className="container">
          <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
            {partnerGroup.map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
              >
                <Image
                  width={173}
                  height={103}
                  className="object-contain"
                  src={`/images/partners/${item.logo}.png`}
                  alt="partner 1"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners2;
