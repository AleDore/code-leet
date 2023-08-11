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
    "should return correctly the letter combination of phone numbers",
    ({ digits, expectedOutput }) => {
      const res = letterCombinations(digits);
      expect(res).toEqual(expectedOutput);
    }
  );
});
