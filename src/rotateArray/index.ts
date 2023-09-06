/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
  const length = nums.length;
  nums.unshift(...nums.splice(k > length ? length - (k % length) : length - k));
}
