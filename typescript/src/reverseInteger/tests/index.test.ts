import { reverse } from "..";

describe("Reverse Integer", () => {
  it.each([
    { num: 123, expectedOutput: 321 },
    { num: -123, expectedOutput: -321 },
    { num: 120, expectedOutput: 21 },
  ])(
    "should return correctly the reversed of $num with $expectedOutput result",
    ({ num, expectedOutput }) => {
      const res = reverse(num);
      expect(res).toEqual(expectedOutput);
    }
  );
});
