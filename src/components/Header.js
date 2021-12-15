import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 3;
`;

const Link = styled.a`
  color: rgb(20, 24, 18);
  margin: 0 10px 0 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;

  :hover {
    text-shadow: 0 0 10px green;
  }
`;

const Add = styled.p`
  background-color: rgb(255, 255, 255);
  max-width: 150px;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
`;

const ConnectWallet = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: rgb(20, 24, 18);
  font-size: 1rem;
  font-weight: bold;
  background-color: rgb(151, 185, 136);
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: rgb(92, 117, 79);
  }
`;

const Header = ({ getUserWallet, wallet }) => {
  return (
    <Container>
      <div className="navcontainer">
        <Link href="#mint">Mint</Link>
        <Link href="#tiers">Tiers</Link>
        <Link href="#roadmap">Roadmap</Link>
        {wallet ? (
          <Add>{wallet}</Add>
        ) : (
          <ConnectWallet onClick={() => getUserWallet()}>
            Connect Wallet
          </ConnectWallet>
        )}
      </div>
    </Container>
  );
};

export default Header;
