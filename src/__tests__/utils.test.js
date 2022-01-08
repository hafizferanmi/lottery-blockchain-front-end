import {
  convertEtherValueToHex,
  convertWeiToHex,
  formatBalance,
  convertHexToEther,
  convertHexToWei,
} from "../utils";

describe("Utils.Js", () => {
  test("Convert WEI to HEX / HEX to WEI", () => {
    const wei25000 = 25000;
    const hex25000 = "0x61a8";

    const hexValue = convertWeiToHex(wei25000);
    const weiValue = convertHexToWei(hex25000);

    expect(hexValue).toBe(hex25000);
    expect(weiValue).toBe(wei25000);
  });

  test("Convert ETHER to HEX / HEX to ETHER", async () => {
    const ether0Point2 = 0.2;
    const hex0Point2 = "0x02c68af0bb140000";

    const hexValue = convertEtherValueToHex(ether0Point2);
    const etherValue = convertHexToEther(hex0Point2);
    expect(hexValue).toBe(hex0Point2);
    expect(etherValue).toBe(ether0Point2);
  });

  test("Format ADDRESS Balance", async () => {
    const balance = formatBalance("0x82cd1272ec3dd11");
    expect(balance).toBe("0.5891");
  });
});
