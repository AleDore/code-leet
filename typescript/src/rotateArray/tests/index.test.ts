import { rotate } from "..";

describe("Rotate Array", () => {
  it.each([
    {
      nums: [1, 2, 3, 4, 5, 6, 7],
      k: 3,
      expectedOutput: [5, 6, 7, 1, 2, 3, 4],
    },
    {
      nums: [-1, -100, 3, 99],
      k: 2,
      expectedOutput: [3, 99, -1, -100],
    },
    {
      nums: [1, 2],
      k: 3,
      expectedOutput: [2, 1],
    },
  ])(
    "should return correctly the $k rotated instance of $nums with $expectedOutput result",
    ({ nums, k, expectedOutput }) => {
      console.log(k % nums.length);
      rotate(nums, k);
      expect(nums).toEqual(expectedOutput);
    }
  );
});
