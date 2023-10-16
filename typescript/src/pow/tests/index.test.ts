import { myPow } from "..";

describe("Pow", () => {
  it.each([
    { num: 2.0, pow: 10, expectedOutput: 1024.0 },
    { num: 2.1, pow: 3, expectedOutput: 9.261 },
    { num: 2.0, pow: -2, expectedOutput: 0.25 },
    { num: 0.44894, pow: -5, expectedOutput: 54.83508 },
  ])(
    "should return correctly the num $num with pow of $pow with $expectedOutput result",
    ({ num, pow, expectedOutput }) => {
      const res = myPow(num, pow);
      expect(res).toEqual(expectedOutput);
    }
  );
});
