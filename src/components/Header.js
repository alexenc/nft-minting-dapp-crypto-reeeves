import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

const Header = ({ getUserWallet, wallet }) => {
  return (
    <header>
      <div className={`navcontainer`}>
        <Link href="#tiers">TIERS</Link>
        <Link href="#mint">MINT</Link>
        <Link style={{ marginRight: 20 }} href="#faq">
          FAQ
        </Link>
        {wallet ? (
          <Add>{wallet}</Add>
        ) : (
          <button className="connectWallet" onClick={() => getUserWallet()}>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
