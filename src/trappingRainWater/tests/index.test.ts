import { trap } from "..";

describe("Trap", () => {
  it.each([
    { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expectedOutput: 6 },
    { height: [4, 2, 0, 3, 2, 5], expectedOutput: 9 },
    { height: [4, 2, 3], expectedOutput: 1 },
    { height: [4, 2, 0, 3, 2, 4, 3, 4], expectedOutput: 10 },
    { height: [5, 4, 1, 2], expectedOutput: 1 },
    {
      height: [0, 1, 2, 0, 3, 0, 1, 2, 0, 0, 4, 2, 1, 2, 5, 0, 1, 2, 0, 2],
      expectedOutput: 26,
    },
  ])(
    "should return correctly the rainWater trapped by $height with $expectedOutput result",
    ({ height, expectedOutput }) => {
      const res = trap(height);
      expect(res).toEqual(expectedOutput);
    }
  );
});
