import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const NftMinted = ({ txn, currentSupply, count }) => {
  const [nfts, setNfts] = useState([]);

  return (
    <div className="nftMinted-container">
      <h3>Your NFT has been Minted!!</h3>
      <div
        className="successLink-container"
        style={{ justifyContent: "center" }}
      >
        <a target="_blank" href="https://opensea.io/collection/crypto-reeves">
          View your NFTs in Opensea
        </a>
      </div>
      <div
        className="successLink-container"
        style={{ justifyContent: "center" }}
      >
        <a target="_blank" href={txn}>
          view txn in polygonscan
        </a>
      </div>
    </div>
  );
};

export default NftMinted;
