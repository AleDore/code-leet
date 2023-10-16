import { letterCombinations } from "..";

describe("Letter Combinations of a Phone Number", () => {
  it.each([
    {
      digits: "23",
      expectedOutput: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    {
      digits: "",
      expectedOutput: [],
    },
    {
      digits: "2",
      expectedOutput: ["a", "b", "c"],
    },
  ])(
    "should return correctly the two sum Numbers",
    ({ digits, expectedOutput }) => {
      const res = letterCombinations(digits);
      expect(res).toEqual(expectedOutput);
    }
  );
});
