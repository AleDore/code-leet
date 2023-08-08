import { vowel2index } from "..";

describe("Stringy Strings", () => {
  it("should return a string with vowels replaced by its indexes", () => {
    const res = vowel2index("this is my string");
    expect(res).toEqual("th3s 6s my str15ng");
  });
});
