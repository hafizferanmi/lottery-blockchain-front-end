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
    if (!window.ethereum) {
      window.alert("Make sure metamask is installed");
    }

    const getAccounts = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    };

    if (window.ethereum) {
      getAccounts();
    }
  }, []);

  return accounts;
};

export default useEtherAccount;
