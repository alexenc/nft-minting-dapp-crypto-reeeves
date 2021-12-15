import React from "react";
import normal from "../assets/normal.png";
import epic from "../assets/singlenft.png";
import legendary from "../assets/legendary.gif";

const Rarity = () => {
  return (
    <div className="raritycontainer" id="tiers">
      <div className="raritytitle">
        <h2>Tier list</h2>
        <p>Crypto Reeves is a 1296nft collection living in the polygon chain</p>
      </div>
      <div className="raritywrapper">
        <div className="rarity">
          <img src={normal} />
          <p>Normal</p>
        </div>
        <div className="rarity">
          <img src={epic} />
          <p>Epic</p>
        </div>
        <div className="rarity">
          <img src={legendary} />
          <p>Legendary</p>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
