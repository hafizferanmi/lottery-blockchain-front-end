import { useState } from "react";
import useEtherAccounts from "./hooks/use-ether-account";
import useAddressBalance from "./hooks/use-address-balance";
import { convertEtherValueToHex, convertWeiToHex } from "./utils";

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
            value: convertEtherValueToHex(0.01),
            gasPrice: "0x0984e72a000",
            gas: convertWeiToHex(22000),
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
