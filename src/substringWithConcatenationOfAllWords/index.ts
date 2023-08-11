export function findSubstring(s: string, words: string[]): number[] {
  const permutator = (inputArr: string[]) => {
    let result: string[] = [];
    const permute = (arr: string[], m: string[] = []) => {
      if (arr.length === 0) {
        result.push(m.join(""));
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };
    permute(inputArr);
    return result;
  };
  return Array.from(
    new Set(
      permutator(words)
        .map((c) => s.indexOf(c))
        .filter((idx) => idx >= 0)
    )
  );
}
