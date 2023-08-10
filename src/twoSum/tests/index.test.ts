import { twoSum } from "..";

describe("Two Sum", () => {
  it.each([
    { nums: [2, 7, 11, 15], target: 9, expectedOutput: [0, 1] },
    { nums: [3, 2, 4], target: 6, expectedOutput: [1, 2] },
    { nums: [3, 3], target: 6, expectedOutput: [0, 1] },
  ])(
    "should return correctly the two sum pair of $nums and target $target with $expectedOutput indexes result",
    ({ nums, target, expectedOutput }) => {
      const res = twoSum(nums, target);
      expect(res).toEqual(expectedOutput);
    }
  );
});
