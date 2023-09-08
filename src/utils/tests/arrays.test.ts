import { binarySearch } from "../arrays";
describe("binarySearch", () => {
  it.each([
    {
      arr: [1, 3, 5, 7],
      target: 3,
      expectedOutput: 1,
    },
    {
      arr: [1, 3, 5, 7, 9, 10, 11, 14, 15, 16, 18, 20],
      target: 12,
      expectedOutput: -1,
    },
    {
      arr: [1],
      target: 1,
      expectedOutput: 0,
    },
  ])(
    "should return $expectedOutput if $target is present into $arr",
    ({ arr, target, expectedOutput }) => {
      const res = binarySearch(arr, target);
      expect(res).toEqual(expectedOutput);
    }
  );
});
