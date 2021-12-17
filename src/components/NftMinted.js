import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const NftMinted = ({ txn, currentSupply, count }) => {
  const [nfts, setNfts] = useState([]);

  const getNftsminted = () => {
    const num = currentSupply + count;

    const baseurl =
      "https://testnets.opensea.io/assets/0xdae6edff6e3ba70ac797b8ba46b4e3a1fbcd7e9b/";

    for (let i = currentSupply; i < num; i++) {
      console.log("i", i);
      let nft = { url: baseurl + i, index: i };
      setNfts([...nfts, nft]);
      console.log(nfts);
    }
  };

  useEffect(() => {
    getNftsminted();
  }, [txn]);

  return (
    <div className="nftMinted-container">
      <h3>Your NFT has been Minted!!</h3>
      <div className="successLink-container">
        <p>Opensea link: </p>
        {nfts.map((nft) => (
          <a key={nft.index} target="_blank" href={nft.url}>
            {nft.index}
          </a>
        ))}
      </div>
      <div className="successLink-container">
        <a target="_blank" href={txn}>
          view txn in polygonscan
        </a>
      </div>
    </div>
  );
};

export default NftMinted;
