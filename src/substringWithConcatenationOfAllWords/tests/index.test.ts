import { findSubstring } from "..";

describe("Substring with Concatenation of All Words", () => {
  it.each([
    {
      s: "barfoothefoobarman",
      words: ["foo", "bar"],
      expectedOutput: [9, 0],
    },
    {
      s: "wordgoodgoodgoodbestword",
      words: ["word", "good", "best", "word"],
      expectedOutput: [],
    },
    {
      s: "barfoofoobarthefoobarman",
      words: ["bar", "foo", "the"],
      expectedOutput: [6, 9, 12],
    },
  ])(
    "should return correctly substring indices",
    ({ s, words, expectedOutput }) => {
      const res = findSubstring(s, words);
      expect(res).toEqual(expect.arrayContaining(expectedOutput));
    }
  );
});
