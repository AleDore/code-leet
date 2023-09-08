export function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  const colLength = matrix[0].length;
  const binarySearch = (arr: number[], toSearch: number): number => {
    const search = (
      arr: number[],
      lowBoundIdx: number,
      upperBoundIdx: number,
      toSearch: number
    ) => {
      const length = upperBoundIdx - lowBoundIdx;
      if (length === 0) return [-1, -1];
      if (length === 1 && arr[lowBoundIdx] === toSearch)
        return [lowBoundIdx, lowBoundIdx];
      let centerIdx =
        Math.ceil((upperBoundIdx - lowBoundIdx) / 2) + lowBoundIdx;
      if (!arr[centerIdx]) return [-1, -1];
      if (arr[centerIdx] == toSearch) return [centerIdx, centerIdx];
      return toSearch < arr[centerIdx]
        ? [lowBoundIdx, centerIdx - 1]
        : [centerIdx + 1, upperBoundIdx];
    };

    var i = 0,
      j = arr.length;
    while (i < j) {
      [i, j] = search(arr, i, j, toSearch);
    }
    return arr[i] == toSearch ? i : -1;
  };
  const selectRow = (matrix: number[][], target: number) => {
    let found = -1;
    for (let i = 0; i < matrix.length && found === -1; i++) {
      if (matrix[i][colLength - 1] >= target) {
        found = i;
      }
    }
    return found;
  };
  const rowIdx = selectRow(matrix, target);
  if (rowIdx === -1) return false;
  const searchResult = binarySearch(matrix[rowIdx], target);
  return searchResult >= 0;
}
