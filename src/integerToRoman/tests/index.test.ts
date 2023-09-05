import { intToRoman } from "..";

describe("Int To Roman", () => {
  it.each([
    { num: 3, expectedOutput: "III" },
    { num: 58, expectedOutput: "LVIII" },
    { num: 1994, expectedOutput: "MCMXCIV" },
    { num: 2023, expectedOutput: "MMXXIII" },
  ])(
    "should return correctly the roman representation of $num with $expectedOutput result",
    ({ num, expectedOutput }) => {
      const res = intToRoman(num);
      expect(res).toEqual(expectedOutput);
    }
  );
});
