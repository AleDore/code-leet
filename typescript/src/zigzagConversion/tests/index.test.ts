import { convert } from "..";

describe("Zigzag conversion", () => {
  it.each([
    { s: "PAYPALISHIRING", numRows: 3, expectedOutput: "PAHNAPLSIIGYIR" },
    { s: "PAYPALISHIRING", numRows: 4, expectedOutput: "PINALSIGYAHRPI" },
  ])(
    "should return correctly a zigzag conversion string given the input $s and rows $numRows",
    ({ s, numRows, expectedOutput }) => {
      const res = convert(s, numRows);
      expect(res).toEqual(expectedOutput);
    }
  );
});
