import React from "react";
import Footer from "./Footer";

const Faq = () => {
  return (
    <div className="faq-container" id="faq">
      <div className="faq-item-container">
        <h2>About the project</h2>
        <p>
          CryptoReeves is the first complete multi-themed NFT collection about
          one of the most beloved internet symbols. We wanted to commemorate
          this culture figure and also celebrate the most awaited continuation
          of "The Matrix" saga. Each set has 4 different parts which are
          randomized in order to create the "common" rarity with a total of 1296
          possible combinations. There are 6 different sets, The Witcher, Jhon
          Wick, Cyberpunk, BTC Holder, Matrix and Camera meme.
        </p>
      </div>
      <div className="faq-item-container">
        <h2>Release date</h2>
        <p>
          The presale will start the day 22th of december of 2021, and the whole
          collection will be released the 25th. To be added to the whitelist
          join our discord{" "}
          <a target="_blank" href="https://discord.gg/gFeG9DYpYS">
            Here
          </a>{" "}
          and go to the #whitelist channel.
        </p>
      </div>
      <div className="faq-item-container">
        <h2>Why on Polygon?</h2>
        <p>
          We have decided to launch the collection in polygon because of the
          extremely high gas fees on the main net. If you don have polygon on
          your metamask you can buy it{" "}
          <a target="_blank" href="https://ramp.network/buy/">
            Here
          </a>{" "}
          with your credit card, that way you don't need to pay the fees of a
          bridge.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
