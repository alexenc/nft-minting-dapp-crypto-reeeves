import React, { useState } from "react";
import styled from "styled-components";
import nft from "../assets/Mint.gif";
import NftMinted from "./NftMinted";

const Container = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

const Mintcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Mintsection = ({
  WhitelistMintNFT,
  MintNFT,
  isPending,
  minting,
  txn,
  currentSupply,
  minted,
}) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(35);

  const [error, setError] = useState(false);
  const increment = () => {
    if (count >= 25) {
      setCount(25);
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="mintContainer" id="mint">
      <div className="supplyContainer">
        <h2>{currentSupply}/1302 NFT minted</h2>
      </div>
      <Container>
        <div className="nftcontainer">
          <img src={nft} alt="" />
        </div>
        <Mintcontainer>
          <div className="infocontainer">
            <div className="priceinfocontainer">
              <h2 className="mint-title">1 NFT = 35 Matic</h2>
            </div>

            <div className="numbercontainer">
              <h3>Number of NFTs:</h3>
              <div className="amountcontainer">
                <button onClick={decrement}>-</button>
                <p> {count}</p>
                <button onClick={increment}>+</button>
              </div>
            </div>

            <div className="totalpricecontiner">
              <p>Total price:</p>
              <div className="pricecontainer">
                <p>{price * count} MATIC</p>
              </div>
            </div>
            {minting ? (
              <button className="btn-hover color-1">minting...</button>
            ) : (
              <button
                onClick={() => MintNFT(count)}
                /* onClick={() => setError(true)}*/
                className="btn-hover color-1"
              >
                mint
              </button>
            )}
          </div>
        </Mintcontainer>
      </Container>
      {error && (
        <p style={{ color: "red", fontSize: 40 }}>
          The collection has not been released yet
        </p>
      )}
      {minted && (
        <NftMinted
          txn={txn}
          count={count}
          currentSupply={currentSupply}
          count={count}
        />
      )}
    </div>
  );
};

export default Mintsection;
