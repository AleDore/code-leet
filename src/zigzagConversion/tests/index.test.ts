import { convert } from "..";

describe("Zigzag conversion", () => {
  it.each([
    { s: "PAYPALISHIRING", numRows: 3, expectedOutput: "PAHNAPLSIIGYIR" },
  ])(
    "should return correctly a zigzag conversion string given the input $s",
    ({ s, numRows, expectedOutput }) => {
      const res = convert(s, numRows);
      expect(res).toEqual(expectedOutput);
    }
  );
});
