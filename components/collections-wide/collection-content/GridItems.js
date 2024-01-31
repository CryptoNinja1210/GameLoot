import Image from "next/image";
import Link from "next/link";

import Card from "../../Cards/Card";

import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";

const GridItems = ({contractAddress}) => {
  const pageSize = 15;

  //const contractAdd = "0x495f947276749ce646f68ac8c248420045cb7b5e";

  //const contractAddress = "0x100fef21276f3D383Ae7bDBE52d86FC57f8f8Ff9";
  const { contract } = useContract(contractAddress);
  const quaryParams = {
    count: pageSize,
    start: 2
  };
  const { data: nfts, isLoading: isLoadingNFTs } = useNFTs(
    contract,
    quaryParams,
    pageSize
  );



  const items = [
    {
      id: 1,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 1",
      title: "Art Me Outside",
      price: "1.55 ETH",
      lastSale: "1.3 ETH",
      verified: true,
    },
    {
      id: 2,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 2",
      title: "PankySkal",
      price: "2.3 ETH",
      lastSale: "0.5 ETH",
      verified: true,
    },
    {
      id: 3,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 3",
      title: "VR Space_287",
      price: "5.6 ETH",
      lastSale: "3.4 ETH",
      verified: false,
    },
    {
      id: 4,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 4",
      title: "Metasmorf",
      price: "1.4 ETH",
      lastSale: "0.7 ETH",
      verified: false,
    },
    {
      id: 5,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 1",
      title: "Art Me Outside",
      price: "1.55 ETH",
      lastSale: "1.3 ETH",
      verified: false,
    },
    {
      id: 6,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 2",
      title: "PankySkal",
      price: "2.3 ETH",
      lastSale: "0.5 ETH",
      verified: true,
    },
    {
      id: 7,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 3",
      title: "VR Space_287",
      price: "5.6 ETH",
      lastSale: "3.4 ETH",
      verified: true,
    },
    {
      id: 8,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 4",
      title: "Metasmorf",
      price: "1.4 ETH",
      lastSale: "0.7 ETH",
      verified: true,
    },
    {
      id: 9,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 1",
      title: "Art Me Outside",
      price: "1.55 ETH",
      lastSale: "1.3 ETH",
      verified: false,
    },
    {
      id: 10,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 2",
      title: "PankySkal",
      price: "2.3 ETH",
      lastSale: "0.5 ETH",
      verified: false,
    },
    {
      id: 11,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 3",
      title: "VR Space_287",
      price: "5.6 ETH",
      lastSale: "3.4 ETH",
      verified: true,
    },
    {
      id: 12,
      contract: "0x00000000016c35e3613AD3Ed484Aa48f161b67FD",
      alt: "item 4",
      title: "Metasmorf",
      price: "1.4 ETH",
      lastSale: "0.7 ETH",
      verified: false,
    },
  ];

  return (
    <div>
      {isLoadingNFTs ? (
        <div>Loading...</div>
      ) : (
        <>
          <ul
            role="list"
            className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 overflow-auto"
          >
            {nfts.map((nft) => (
              <li key={nft.metadata.id} className="relative">
                <Card metadata={nft.metadata}/>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GridItems;
