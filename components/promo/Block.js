import React from "react";

const Block = () => {
  const blocksData = [
    {
      value: "1M+",
      label: "Active Users",
    },
    {
      value: "$115M",
      label: "Already Earned",
    },
    {
      value: "4.8",
      label: "Average Ratings",
    },
    {
      value: "250+",
      label: "NFT Collections",
    },
  ];

  return (
    <>
      {blocksData.map((block, index) => (
        <div key={index}>
          <div>
            <span className="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
              {block.value}
            </span>
          </div>
          <span className="text-lg text-white">{block.label}</span>
        </div>
      ))}
    </>
  );
};

export default Block;
