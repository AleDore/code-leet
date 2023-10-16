export function lengthOfLongestSubstring(s: string): number {
  let substr = "";
  const reduced = s.split("").reduce((acc: string, curr) => {
    if (acc.includes(curr)) {
      if (substr.length < acc.length) substr = acc;
      return acc.slice(acc.indexOf(curr) + 1, acc.length) + curr;
    }
    return (acc += curr);
  }, "");
  return substr.length > reduced.length ? substr.length : reduced.length;
}
