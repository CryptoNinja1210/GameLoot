import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Gameloot",
  keyword:
    "bitcoin, blockchain, crypto gaming, crypto collectibles, crypto marketplace, cryptocurrency, digital items, market, nft, nft marketplace, non-fungible tokens, virtual asset, wallet",
  desc: "A marketplace for gaming NFTs and digital assets on the blockchain. Powered by Gameloot.",
};

export default Meta;
