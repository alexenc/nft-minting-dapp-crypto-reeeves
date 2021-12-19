import React from "react";
import normal from "../assets/normal.png";
import epic from "../assets/singlenft.png";
import legendary from "../assets/legendary.gif";

const Rarity = () => {
  return (
    <div className="raritycontainer" id="tiers">
      <div className="raritytitle">
        <h2>Tier list</h2>
      </div>
      <div className="raritywrapper">
        <div className="rarity">
          <img src={normal} />
          <div className="rarity-text">
            <p>Common</p>
            <p className="rarity-desc">
              All the posible combinations of the 6 sets
            </p>
          </div>
        </div>
        <div className="rarity">
          <img src={epic} />
          <div className="rarity-text">
            <p>Epic</p>
            <p className="rarity-desc">The complete set</p>
          </div>
        </div>
        <div className="rarity">
          <img src={legendary} />
          <div className="rarity-text">
            <p>Legendary</p>
            <p className="rarity-desc">An animated card of the complete set</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
