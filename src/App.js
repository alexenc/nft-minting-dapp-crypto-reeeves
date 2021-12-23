import { useEffect, useState } from "react";
import styled from "styled-components";
import myEpicNft from "./utils/MyEpicNFT.json";
import { ethers } from "ethers";
import Header from "./components/Header";
import Mainsection from "./components/Mainsection";
import Mintsection from "./components/Mintsection";
import Rarity from "./components/Rarity";
import ReactGA from "react-ga";
import Swal from "sweetalert2";

import Faq from "./components/Faq";

ReactGA.initialize("UA-215732718-1");

const Container = styled.div``;

function App() {
  const [wallet, setWallet] = useState(null);
  const [chain, setChain] = useState("");

  const [isPending, setIspending] = useState(false);
  const [minted, setMinted] = useState(false);
  const [minting, setIsMinting] = useState(false);
  const [txn, setTxn] = useState(null);
  const [currentSupply, setCurrentSupply] = useState(0);

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0xFB6952B4002820B12e722F71D202c35f82a81406",
    SCAN_LINK: "https://polygonscan.com/tx/",

    NETWORK: {
      NAME: "POLYGON",
      SYMBOL: "Matic",
      ID: "0x89",
    },
    MAX_SUPPLY: 1302,
    price: 35,
    whitelistPrice: 25,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "opensea",
    MARKETPLACE_LINK: `https://testnets.opensea.io/assets/0x964a508192269C743d9fE03eDd3c51c6F76a56cE/1`,
  });

  const getUserWallet = async (e) => {
    const ethereum = window.ethereum;
    ReactGA.event({
      category: "User",
      action: "User tried to connect wallet",
    });

    if (ethereum) {
      try {
        const eth = await ethereum.request({ method: "eth_requestAccounts" });
        setWallet(eth);
      } catch (error) {
        setWallet(null);
      }
    } else {
      alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const CheckWalletConnection = () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask");
      return;
    }
    setWallet(ethereum.selectedAddress);
    console.log("eth", ethereum.selectedAddress);
  };

  async function addPolygonNetwork() {
    const { ethereum } = window;

    try {
      //si el usuario ya tiene matic añadida, se cambia a esa red(en este caso es la testnet de matic)
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }], // Hexadecimal version of 80001, prefixed with 0x
      });
    } catch (error) {
      // si no tiene matic añadimos pedimos permiso para que añada
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x89", // Hexadecimal version of 80001, prefixed with 0x
                chainName: "POLYGON",
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                rpcUrls: ["https://polygon-rpc.com/"],
                blockExplorerUrls: ["https://polygonscan.com/"],
                iconUrls: [""],
              },
            ],
          });
        } catch (addError) {
          console.log("Did not add network");
        }
      }
    }
  }

  const MintNFT = async (num) => {
    const price = CONFIG.price * num; //cambiar a precio normal

    ReactGA.event({
      category: "whitelist mint",
      action: "User pressed the whitelist mint btn",
    });

    try {
      const { ethereum } = window;
      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("connected to chain" + chainId);
      setChain(chainId);
      console.log(CONFIG.NETWORK.ID);
      if (chainId !== CONFIG.NETWORK.ID) {
        setTimeout(() => {
          addPolygonNetwork();
        }, 2000);

        return;
      }

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONFIG.CONTRACT_ADDRESS,
          myEpicNft.output.abi,
          signer
        );

        setIsMinting(true);
        let nftTxn = await connectedContract.mint(num, {
          value: ethers.utils.parseEther(price.toString()),
        });
        console.log("Mining...please wait.");
        await nftTxn.wait();
        setIsMinting(false);
        setMinted(true);

        setTxn(`${CONFIG.SCAN_LINK}${nftTxn.hash}`);
      } else {
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        title: "Not enough funds or something went wrong",
        showConfirmButton: false,
        timer: 5000,
      });
      setIspending(false);
      setIsMinting(false);
    }
  };

  const WhitelistMintNFT = async (num) => {
    const price = CONFIG.whitelistPrice * num; //cambiar a precio normal
    ReactGA.event({
      category: "whitelist mint",
      action: "User pressed the whitelist mint btn",
    });

    try {
      const { ethereum } = window;
      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("connected to chain" + chainId);
      setChain(chainId);
      console.log(CONFIG.NETWORK.ID);
      if (chainId !== CONFIG.NETWORK.ID) {
        setTimeout(() => {
          addPolygonNetwork();
        }, 2000);

        return;
      }

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONFIG.CONTRACT_ADDRESS,
          myEpicNft.output.abi,
          signer
        );

        setIsMinting(true);
        let nftTxn = await connectedContract.whitelistMint(num, {
          value: ethers.utils.parseEther(price.toString()),
        });
        console.log("Mining...please wait.");
        await nftTxn.wait();
        setIsMinting(false);
        setMinted(true);

        setTxn(`${CONFIG.SCAN_LINK}${nftTxn.hash}`);
      } else {
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        title: "Not enough funds or something went wrong",
        showConfirmButton: false,
        timer: 5000,
      });
      setIspending(false);
      setIsMinting(false);
    }
  };

  const getNFTsMinted = async () => {
    const { ethereum } = window;

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        CONFIG.CONTRACT_ADDRESS,
        myEpicNft.output.abi,
        signer
      );

      const txn = await connectedContract.totalSupply();
      const totalSupply = parseInt(txn._hex, 16);
      setCurrentSupply(totalSupply);

      console.log(txn);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CheckWalletConnection();
    getNFTsMinted();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [wallet, chain]);

  return (
    <Container>
      <Header getUserWallet={getUserWallet} wallet={wallet} />
      <Mainsection />

      <Rarity />
      <Mintsection
        MintNFT={MintNFT}
        WhitelistMintNFT={WhitelistMintNFT}
        isPending={isPending}
        minting={minting}
        txn={txn}
        minted={minted}
        currentSupply={currentSupply}
      />
      <Faq />
    </Container>
  );
}

export default App;
