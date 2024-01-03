import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  GPT_MEMBERSHIP_ADDRESS,
  GPT_MEMBERSHIP_ABI,
} from "../Context/constants";

//CHeck wallet Connection

export const CheckIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask");
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (err) {
    console.log(err);
  }
};

//Connect Wallet
export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (err) {
    console.log(err);
  }
};

//Fetch Contract
const fetchContract = (signerorProvider) =>
  new ethers.Contract(
    GPT_MEMBERSHIP_ADDRESS,
    GPT_MEMBERSHIP_ABI,
    signerorProvider
  );

//Connecting contract
export const connectingWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    console.log("Hello");
    return contract;
  } catch (error) {
    console.log("Hi");
    console.log(error);
  }
};
