import { lengthOfLongestSubstring } from "..";

describe("Longest Substring Without Repeating Characters", () => {
  it.each([
    { s: "abcabcbb", expectedOutput: 3 },
    { s: "bbbbb", expectedOutput: 1 },
    { s: "pwwkew", expectedOutput: 3 },
    { s: "aab", expectedOutput: 2 },
    { s: "dvdf", expectedOutput: 3 },
  ])(
    "should return correctly the longest substring length given a string $s",
    ({ s, expectedOutput }) => {
      const res = lengthOfLongestSubstring(s);
      expect(res).toEqual(expectedOutput);
    }
  );
});
