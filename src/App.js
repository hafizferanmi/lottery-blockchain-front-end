import { useState } from "react";
import useEtherAccounts from "./hooks/use-ether-account";
import useAddressBalance from "./hooks/use-address-balance";
import { ethers } from "ethers";

function App() {
  const accounts = useEtherAccounts();
  const balance = useAddressBalance(accounts[0]);
  const [transactionHash, setTransactionHash] = useState();

  const sendEth = () => {
    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: "0x36fA8909Ef4965402e602e803543BdE5B3030c05",
            value: ethers.utils.parseEther("0.1")._hex,
            gasPrice: "0x09184e72a000",
            gas: "0x55F0",
          },
        ],
      })
      .then((txHash) => setTransactionHash(txHash))
      .catch((error) => console.error);
  };

  return (
    <div>
      Our beautiful ethereum blockchain application
      <ul>
        {accounts.map((account) => (
          <li key={account}>{account}</li>
        ))}
      </ul>
      <div>{window.ethereum && window.ethereum.selectedAddress}</div>
      <div>Balance: {balance}</div>
      <div>Hash: {transactionHash}</div>
      <button onClick={sendEth}>Send ETH</button>
    </div>
  );
}

export default App;
