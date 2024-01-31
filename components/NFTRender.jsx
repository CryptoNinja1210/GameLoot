import { MediaRenderer } from "@thirdweb-dev/react";

const NFT = ({ ipfsLink }) => {
  
    return (    
    <MediaRenderer 
      src={ipfsLink}
    />
    );
  };

export default NFT;