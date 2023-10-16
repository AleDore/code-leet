export function reverse(x: number): number {
  const [minValue, maxValue] = [-Math.pow(2, 31), Math.pow(2, 31) - 1];
  const signedNumStr = String(x).split("");
  const sign = signedNumStr[0] == "-" ? signedNumStr[0] : "";
  const numStr = sign != "" ? signedNumStr.slice(1) : signedNumStr;
  const toReturn = Number(`${sign}${numStr.reverse().join("")}`);
  return toReturn > maxValue || toReturn < minValue ? 0 : toReturn;
}
