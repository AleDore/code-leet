// export function longestPalindrome(s: string): string {
//   const isPalindrome = (sub: string) => {
//     if (sub.length === 1) return true;
//     const isEvenLength = sub.length % 2 === 0;
//     const strArr = sub.split("");
//     const [s1, s2] = isEvenLength
//       ? [strArr.slice(0, sub.length / 2), strArr.slice(sub.length / 2)]
//       : [
//           strArr.slice(0, Math.ceil(sub.length / 2) - 1),
//           strArr.slice(Math.floor(sub.length / 2) + 1),
//         ];
//     return s2.reverse().join("") === s1.join("");
//   };
//   if (s.length === 1 || s === s[0].repeat(s.length) || isPalindrome(s))
//     return s;
//   let longest = s[0];
//   let substr = "";
//   let isPalindromic = true;
//   let [i1, i2] = [0, 0];
//   for (var i = 0; i < s.length; i++) {
//     if (i + 1 < s.length) {
//       substr = s.substring(i, i + 2);
//       isPalindromic = isPalindrome(substr);
//       console.log(
//         `substr for [${i},${i + 2}) -> ${substr}`,
//         `isPalindromic=${isPalindromic}`
//       );
//       if (isPalindromic) {
//         if (substr.length > longest.length) longest = substr;
//         i1 = i;
//         i2 = i + 1;
//       } else {
//         i1 = i2 = i;
//       }
//     } else {
//       i1 = i2 = i;
//     }
//     for (var j = 1; i1 - j >= 0 && i2 + j < s.length; j++) {
//       substr = s.substring(i1 - j, i2 + j + 1);
//       isPalindromic = isPalindrome(substr);
//       console.log(j, i1, i2, isPalindromic, substr);
//       if (!isPalindromic) break;
//       if (isPalindromic && substr.length > longest.length) longest = substr;
//     }
//   }
//   return longest;
// }

export function longestPalindrome(s: string) {
  const expandCenter = (s: string, begin: number, end: number): number[] => {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
      begin--;
      end++;
    }
    return [begin, end];
  };

  if (s.length <= 1) {
    return s;
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let [begin, end] = expandCenter(s, i, i);
    let len = s.substring(begin + 1, end);
    if (len.length > longest.length) {
      longest = len;
    }

    [begin, end] = expandCenter(s, i, i + 1);
    len = s.substring(begin + 1, end);
    if (len.length > longest.length) {
      longest = len;
    }
  }

  return longest;
}
