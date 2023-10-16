import { threeSum } from "..";

describe("3Sum", () => {
  it.each([
    {
      nums: [-1, 0, 1, 2, -1, -4],
      expectedOutput: [
        [-1, 0, 1],
        [-1, -1, 2],
      ],
    },
    {
      nums: [0, 1, 1],
      expectedOutput: [],
    },
    {
      nums: [0, 0, 0],
      expectedOutput: [[0, 0, 0]],
    },
    {
      nums: [0, 0, 0, 0],
      expectedOutput: [[0, 0, 0]],
    },
    {
      nums: [-1, 0, 1, 0],
      expectedOutput: [[-1, 0, 1]],
    },
    {
      nums: [-2, 0, 1, 1, 2],
      expectedOutput: [
        [-2, 1, 1],
        [-2, 0, 2],
      ],
    },
  ])(
    "should return expectedOutput if $nums contains triplets that respect 3sum",
    ({ nums, expectedOutput }) => {
      const res = threeSum(nums);
      expect(res).toEqual(expectedOutput);
    }
  );
});
