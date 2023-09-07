import { likes } from "..";

describe("Who Likes It", () => {
  it.each([
    { a: [], expectedOutput: "no one likes this" },
    { a: ["Peter"], expectedOutput: "Peter likes this" },
    { a: ["Jacob", "Alex"], expectedOutput: "Jacob and Alex like this" },
    {
      a: ["Max", "John", "Mark"],
      expectedOutput: "Max, John and Mark like this",
    },
    {
      a: ["Alex", "Jacob", "Mark", "Max"],
      expectedOutput: "Alex, Jacob and 2 others like this",
    },
  ])(
    "should return correctly the likes string of input $a with $expectedOutput result",
    ({ a, expectedOutput }) => {
      const res = likes(a);
      expect(res).toEqual(expectedOutput);
    }
  );
});
