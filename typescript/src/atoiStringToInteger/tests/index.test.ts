import { myAtoi } from "..";

describe("Atoi String to Integer", () => {
  it.each([
    { s: "42", expectedOutput: 42 },
    { s: "   -42", expectedOutput: -42 },
    { s: "4193 with words", expectedOutput: 4193 },
    { s: "words and 987", expectedOutput: 0 },
    { s: "21474836++", expectedOutput: 21474836 },
  ])(
    "should return correctly an atoi number conversion given the input $s",
    ({ s, expectedOutput }) => {
      const res = myAtoi(s);
      expect(res).toEqual(expectedOutput);
    }
  );
});
