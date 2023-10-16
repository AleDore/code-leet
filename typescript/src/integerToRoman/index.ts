export const intToRoman = (num: number): string => {
  let res = "";
  const [thousands, hundreds, decimal, units] = String(num)
    .padStart(4, "0")
    .split("")
    .map(Number);
  const numToLetters = (
    numUnit: number,
    unitLetter: string,
    upperBoundLetter: string,
    middleLetter: string
  ) =>
    numUnit < 4
      ? unitLetter.repeat(numUnit)
      : numUnit > 8
      ? `${unitLetter}${upperBoundLetter}`
      : numUnit > 4 && numUnit < 9
      ? `${middleLetter}${unitLetter.repeat(numUnit - 5)}`
      : `${unitLetter}${middleLetter}`;
  if (thousands !== 0) {
    res += "M".repeat(thousands);
  }

  if (hundreds !== 0) {
    res += numToLetters(hundreds, "C", "M", "D");
  }

  if (decimal !== 0) {
    res += numToLetters(decimal, "X", "C", "L");
  }

  if (units !== 0) {
    res += numToLetters(units, "I", "X", "V");
  }

  return res;
};
