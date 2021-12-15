import React, { useState } from "react";
import styled from "styled-components";
import nft from "../assets/Mint.gif";

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

const Mintsection = ({ MintNFT, isPending, minting, txn, currentSupply }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count >= 10) {
      setCount(10);
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
        <h2>{currentSupply}/1306 NFT minted</h2>
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

            <button onClick={() => MintNFT(count)} className="mintbtn">
              mint
            </button>
            {isPending && <p>txt initialized</p>}
            {minting && <p>Minting nft ...</p>}
            {txn && (
              <p style={{ maxWidth: "100%", overflow: "hidden" }}>txn {txn}</p>
            )}
          </div>
        </Mintcontainer>
      </Container>
    </div>
  );
};

export default Mintsection;
