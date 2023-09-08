import { searchMatrix } from "..";

describe("Search 2D Matrix", () => {
  it.each([
    {
      matrix: [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      target: 3,
      expectedOutput: true,
    },
    {
      matrix: [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      target: 13,
      expectedOutput: false,
    },
    {
      matrix: [[1]],
      target: 1,
      expectedOutput: true,
    },
  ])(
    "should return $expectedOutput if $target is present into $matrix",
    ({ matrix, target, expectedOutput }) => {
      const res = searchMatrix(matrix, target);
      expect(res).toEqual(expectedOutput);
    }
  );
});
