export function convert(s: string, numRows: number): string {
  const strArr = s.split("");
  var converted = "";
  var mod;
  var tmpArr;
  const acc = [strArr.slice(0, numRows)];
  var charArrCount = numRows + 1;
  for (var i = numRows; i < strArr.length; ) {
    mod = (charArrCount + 1) % numRows;
    if (mod > 0) {
      tmpArr = new Array(numRows);
      tmpArr[numRows - mod] = strArr[i];
      acc.push(tmpArr);
      charArrCount++;
      i++;
    } else {
      acc.push(strArr.slice(i, i + numRows));
      charArrCount += numRows + 2;
      i += numRows;
    }
  }

  for (var idx = 0; idx < numRows; idx++) {
    acc.forEach((row) => (converted += row[idx] ?? ""));
  }
  return converted;
}
