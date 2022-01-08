import { useState, useEffect } from "react";
import { formatBalance } from "../utils";

const useAddressBalance = (address) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const requestBalance = async () => {
      try {
        const addressBalance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [address, "latest"],
        });
        console.log(addressBalance, "balance hex");
        setBalance(formatBalance(addressBalance));
      } catch (e) {
        console.log(e, "error sha");
        setBalance(0);
      }
    };

    if (address) {
      requestBalance();
    }
  }, [address]);

  return balance;
};

export default useAddressBalance;
