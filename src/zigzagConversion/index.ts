export function convert(s: string, numRows: number): string {
  const strArr = s.split("");
  var converted = "";
  var delta = 0;
  for (var i = 0; i < numRows; i++) {
    delta = i < numRows / 2 ? numRows - i : i;
    console.log(`delta=${delta}`);
    for (var j = i; j < strArr.length; j = j + delta + 1) {
      console.log(`i=${i}, j=${j}`);
      converted += strArr[j];
    }
  }
  return converted;
}

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13
// P A Y P A L I S H I R  I  N  G

// P   A   H   N
// A P L S I I G
// Y   I   R
