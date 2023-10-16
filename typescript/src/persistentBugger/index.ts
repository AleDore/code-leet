export const persistence = (num: number) => {
  var tempNum = num;
  var remainingDigits = num.toString().length;
  var result = 0;
  while (remainingDigits > 1) {
    tempNum = tempNum
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, curr) => (acc *= curr), 1);
    remainingDigits = tempNum.toString().length;
    result++;
  }
  return result;
};
