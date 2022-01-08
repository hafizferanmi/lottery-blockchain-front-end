import { ethers } from "ethers";

export const convertEtherValueToHex = (value = "") =>
  ethers.utils.parseUnits(value.toString(), "ether")._hex;

export const convertWeiToHex = (wei = "") =>
  ethers.utils.parseUnits(wei.toString(), "wei")._hex;

export const formatBalance = (balance) => convertHexToEther(balance).toFixed(4);

export const convertHexToEther = (hex) =>
  parseFloat(ethers.utils.formatUnits(hex, "ether"));

export const convertHexToWei = (hex) =>
  parseFloat(ethers.utils.formatUnits(hex, "wei"));
