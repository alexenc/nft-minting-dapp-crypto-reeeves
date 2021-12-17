import React from "react";

const Footer = () => {
  const socials = [
    {
      icon: "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png",
      name: "discord",
      link: "https://discord.gg/gFeG9DYpYS",
    },
    {
      icon: "https://user-images.githubusercontent.com/35243/140804979-0ef11e0d-d527-43c1-93cb-0f48d1aec542.png",
      name: "opensea",
      link: "",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/1109/PNG/512/1486053611-twitter_79195.png",
      name: "twitter",
      link: "https://twitter.com/CryptoReevesNFT",
    },
  ];

  return (
    <footer>
      <div className="footer-icons-container">
        {socials.map((item) => (
          <div>
            <a target="_blank" href={item.link}>
              <img className="footer-icon" src={item.icon} alt={item.name} />
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
