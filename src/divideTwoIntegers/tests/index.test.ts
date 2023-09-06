import { divide } from "..";

describe("Divide Two Integers", () => {
  it.each([
    { dividend: 10, divisor: 3, expectedOutput: 3 },
    { dividend: 7, divisor: -3, expectedOutput: -2 },
    { dividend: -1, divisor: 1, expectedOutput: -1 },
  ])(
    "should return correctly the quotient of $dividend / $divisor with $expectedOutput result",
    ({ dividend, divisor, expectedOutput }) => {
      const res = divide(dividend, divisor);
      expect(res).toEqual(expectedOutput);
    }
  );
});
