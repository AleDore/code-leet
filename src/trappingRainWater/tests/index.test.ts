import { trap } from "..";

describe("Trap", () => {
  it.each([
    { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expectedOutput: 6 },
    //{ height: [4, 2, 0, 3, 2, 5], expectedOutput: 9 },
    //{ height: [4, 2, 3], expectedOutput: 1 },
    //{ height: [4, 2, 0, 3, 2, 4, 3, 4], expectedOutput: 10 },
  ])(
    "should return correctly the num of rainWater trapped by $height with $expectedOutput result",
    ({ height, expectedOutput }) => {
      const res = trap(height);
      expect(res).toEqual(expectedOutput);
    }
  );
});
