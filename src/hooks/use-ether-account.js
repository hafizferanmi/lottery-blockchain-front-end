import { useState, useEffect } from "react";

const useEtherAccount = () => {
  const [accounts, setAccounts] = useState([]);

  const handleChainChange = () => window.location.reload();
  const handleAccountChange = (accounts) => setAccounts(accounts[0]);

  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccountChange);
    window.ethereum.on("chainChanged", handleChainChange);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountChange);
      window.ethereum.removeListener("chainChanged", handleChainChange);
    };
  }, []);

  useEffect(() => {
    const getAccounts = async () => {
      if (!window.ethereum) {
        return window.alert("Make sure metamask is installed");
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    };

    getAccounts();
  }, []);

  return accounts;
};

export default useEtherAccount;
