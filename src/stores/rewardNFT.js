import { defineStore } from "pinia";

import { ethers } from "ethers";

export const useRewardNFTStore = defineStore("rewardNFT", {
  state: () => {
    return {
      currentAccount: null,
      currentContract: null,
      contractAddress: null,
    };
  },

  actions: {
    async checkConnectedWalletExist() {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("Make sure you have metamask!");
          return false;
        } else {
          console.log("We have the ethereum object", ethereum);
        }
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          this.currentAccount = account;
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    async connectWallet() {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("Get MetaMask Extension!");
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        const polygonNetwork = {
          chainId: "0x89", // Hexadecimal for 137
          chainName: "Polygon Mainnet",
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
          },
          rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
          blockExplorerUrls: ["https://polygonscan.com/"],
        };

        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: polygonNetwork.chainId }],
          });
        } catch (switchError) {
          // If the chain is not added to Metamask, add it
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [polygonNetwork],
              });
            } catch (addError) {
              console.error("Failed to add the Polygon network to Metamask", addError);
            }
          } else {
            console.error("Failed to switch to the Polygon network", switchError);
          }
        }

        console.log("Connected to Polygon Mainnet");

        console.log("Connected", accounts[0]);
        this.currentAccount = accounts[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
