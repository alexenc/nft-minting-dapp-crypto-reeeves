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
  MintNFT,
  isPending,
  minting,
  txn,
  currentSupply,
  minted,
}) => {
  const [count, setCount] = useState(1);

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
    <div className="mintContainer">
      <div className="supplyContainer">
        <h2>{currentSupply}/1302 NFT minted</h2>
      </div>
      <Container>
        <div className="nftcontainer" id="mint">
          <img src={nft} alt="" />
        </div>
        <Mintcontainer>
          <div className="infocontainer">
            <div className="priceinfocontainer">
              <h2 className="mint-title">1 nft = 20 Matic</h2>
            </div>

            <div className="numbercontainer">
              <h3>Number of nfts:</h3>
              <div className="amountcontainer">
                <button onClick={decrement}>-</button>
                <p> {count}</p>
                <button onClick={increment}>+</button>
              </div>
            </div>

            <div className="totalpricecontiner">
              <p>Total price:</p>
              <div className="pricecontainer">
                <p>{20 * count} MATIC</p>
              </div>
            </div>
            {minting ? (
              <button className="btn-hover color-1">minting...</button>
            ) : (
              <button
                onClick={() => MintNFT(count)}
                className="btn-hover color-1"
              >
                mint
              </button>
            )}
          </div>
        </Mintcontainer>
      </Container>
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
