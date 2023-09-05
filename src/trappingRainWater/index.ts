export function trap(height: number[]): number {
  if (height.length < 3) return 0;
  let rainWater = 0;

  const findBounds = (arr: number[], idx: number, minBound: number = 0) => {
    const centralEl = arr[idx];
    let rightBound = 0,
      rightBoundIdx = -1,
      leftBound = 0,
      leftBoundIdx = -1;
    for (var j = idx - 1; j >= minBound; j--) {
      if (leftBound < arr[j] && centralEl < arr[j]) {
        leftBound = arr[j];
        leftBoundIdx = j;
      }
    }
    for (var i = idx + 1; i < arr.length; i++) {
      if (rightBound > 0 && rightBound >= leftBound) break;
      if (rightBound < arr[i] && centralEl < arr[i]) {
        rightBound = arr[i];
        rightBoundIdx = i;
      }
    }

    return leftBoundIdx >= 0 && rightBoundIdx >= 0
      ? [leftBoundIdx, rightBoundIdx]
      : undefined;
  };

  const calculateArea = (arr: number[]): number => {
    const minBound =
      arr[0] < arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];

    let area = 0;
    for (var idx = 1; idx < arr.length - 1; idx++) {
      if (minBound > arr[idx]) area += minBound - arr[idx];
    }

    return area;
  };

  let leftIdx, rightIdx;
  for (var i = 1; i < height.length; ) {
    const bounds = findBounds(height, i, i - 1);

    if (bounds) {
      [leftIdx, rightIdx] = bounds;

      rainWater += calculateArea(height.slice(leftIdx, rightIdx + 1));
      i = rightIdx + 1;
    } else {
      i++;
    }
  }
  return rainWater;
}
