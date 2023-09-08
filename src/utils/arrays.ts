/**
 *
 * @param arr: an ordered array
 * @param toSearch: the element to search
 *
 * Returns the index if element is present in arr, -1 otherwise.
 */
export const binarySearch = (arr: number[], toSearch: number): number => {
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
    let centerIdx = Math.ceil((upperBoundIdx - lowBoundIdx) / 2) + lowBoundIdx;
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
