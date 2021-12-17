import React from "react";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-item-container">
        <h2>About the project</h2>
        <p>
          CryptoReeves is the first complete multi-themed NFT collection about
          one of the most beloved internet symbols. We wanted to commemorate
          this culture figure and also celebrate the most awaited continuation
          of "The Matrix" saga. Each set has 4 different parts which are
          randomized in order to create the "common" rarity with a total of 1296
          posible combinations. There are 6 different sets, The Witcher, Jhon
          wick, Cyberpunk, BTC Holder, Matrix and
        </p>
      </div>
      <div className="faq-item-container">
        <h2>Release date</h2>
        <p>
          The presale will start the day 25th of december of 2021, and the whole
          collection will be released 24h later. To be added to the whitelist
          join our discord <a href="">Here</a> and go to the #whitelist channel.
        </p>
      </div>
      <div className="faq-item-container">
        <h2>Why on polygon?</h2>
        <p>
          We have decided to launch the collection in polygon because of the
          extremely high gas fees on the main net. If you don have polygon on
          your metamask you can buy it{" "}
          <a target="_blank" href="https://ramp.network/buy/">
            Here
          </a>{" "}
          with your credic card, that way you don't need to pay the fees of a
          bridge.
        </p>
      </div>
    </div>
  );
};

export default Faq;