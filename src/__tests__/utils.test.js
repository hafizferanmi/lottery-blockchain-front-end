import {
  convertEtherValueToHex,
  convertWeiToHex,
  formatBalance,
  convertHexToEther,
  convertHexToWei,
} from "../utils";

describe("Utils.Js", () => {
  test("Convert WEI to HEX", () => {
    const wei25000 = 25000;
    const hex25000 = "0x61a8";

    const hexValue = convertWeiToHex(wei25000);
    const weiValue = convertHexToWei(hex25000);

    console.log(weiValue, "wei value");

    expect(hexValue).toBe(hex25000);
    expect(weiValue).toBe(wei25000);
  });

  test("Convert Ether to Hex", async () => {
    const ether = 0.2;
    const expectedValue = "0x02c68af0bb140000";

    const value = convertEtherValueToHex(ether);
    const etherValue = convertHexToEther(expectedValue);
    expect(value).toBe(expectedValue);
    expect(ether).toBe(etherValue);
  });

  test("Format Wallet Balance", async () => {
    const balance = formatBalance("0x82cd1272ec3dd11");
    expect(balance).toBe("0.5891");
  });
});
