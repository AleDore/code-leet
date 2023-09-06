export function divide(dividend: number, divisor: number): number {
  const [minValue, maxValue] = [-Math.pow(2, 31), Math.pow(2, 31) - 1];
  const extractSign = (n: number) => (String(n).charAt(0) == "-" ? "-" : "");
  const [dividendSign, divisorSign] = [
    extractSign(dividend),
    extractSign(divisor),
  ];
  const divideBySubtraction = (d: number, divisor: number) => {
    if (divisor === 1) return d;
    let quot = 0;
    for (var tmpDiv = divisor; tmpDiv <= d; ) {
      quot = quot + 1;
      tmpDiv += divisor;
    }
    return quot;
  };

  const quotient = divideBySubtraction(Math.abs(dividend), Math.abs(divisor));
  const sign =
    dividendSign == "-" && divisorSign == "-"
      ? ""
      : (dividendSign == "" && divisorSign == "-") ||
        (dividendSign == "-" && divisorSign == "")
      ? "-"
      : "";
  const res = Number(`${sign}${quotient}`);
  return res > maxValue ? maxValue : res < minValue ? minValue : res;
}
