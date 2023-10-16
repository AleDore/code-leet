// export function threeSum(nums: number[]): number[][] {
//   const isTripletToZero = (triplet: number[]) => {
//     const [a, b, c] = triplet;
//     return a + b + c === 0;
//   };

//   const tripletPermutation = (triplet: number[]): string[] => {
//     const [a, b, c] = triplet;
//     return [
//       `${[a, b, c]}`,
//       `${[a, c, b]}`,
//       `${[b, a, c]}`,
//       `${[b, c, a]}`,
//       `${[c, a, b]}`,
//       `${[c, b, a]}`,
//     ];
//   };

//   var toReturn = {} as any;
//   let alreadyVisitedTriplets = {} as any;
//   let triplet = [];
//   for (let i = 0; i + 2 < nums.length; i++) {
//     for (let j = i + 1; j + 1 < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         triplet = [nums[i], nums[j], nums[k]];
//         if (alreadyVisitedTriplets[`${triplet}`] == undefined) {
//           if (isTripletToZero(triplet)) {
//             toReturn[`${triplet}`] = triplet;
//           }
//           tripletPermutation(triplet).forEach(
//             (p) => (alreadyVisitedTriplets[p] = true)
//           );
//         }
//       }
//     }
//   }
//   return Object.values(toReturn);
// }
export function threeSum(nums: number[]): number[][] {
  let map = new Map<number, number>();
  let al: number[] = [];
  let ans: number[][] = [];
  let alreadyVisitedTriplets = {} as any;
  for (var i = 0; i < nums.length - 2; i++) {
    let sum = nums[i];
    map = new Map<number, number>();
    let target = 0 - sum;
    for (var j = i + 1; j < nums.length; j++) {
      if (map.has(target - nums[j])) {
        al = [nums[i], target - nums[j], nums[j]];
        al.sort();
        if (!alreadyVisitedTriplets[`${al}`]) ans.push(al);
        alreadyVisitedTriplets[`${al}`] = true;
      } else {
        map.set(nums[j], 0);
      }
    }
  }
  return ans;
}
