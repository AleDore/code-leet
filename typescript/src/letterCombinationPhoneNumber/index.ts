export function letterCombinations(digits: string): string[] {
  const numMapping = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  } as any;

  const linearCombination = (a1: string[], a2: string[]) => {
    if (a1.length == 0) {
      return a2;
    }
    if (a2.length == 0) {
      return a1;
    }
    const res: string[] = [];
    a1.forEach((char) =>
      a2.forEach((char2) => {
        res.push(char + char2);
      })
    );
    return res;
  };
  const arr = digits.split("").map((d) => numMapping[d]);
  return arr.reduce((acc, curr) => linearCombination(acc, curr), []);
}
