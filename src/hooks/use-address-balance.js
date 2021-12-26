import { useState, useEffect } from "react";

const useAddressBalance = (address) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const requestBalance = async () => {
      try {
        const addressBalance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [address, "latest"],
        });
        setBalance(addressBalance);
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
