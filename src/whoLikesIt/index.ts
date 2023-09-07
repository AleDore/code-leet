export const likes = (a: string[]): string => {
  if (a.length === 0) return "no one likes this";
  if (a.length === 1) return `${a[0]} likes this`;
  if (a.length === 2) return `${a[0]} and ${a[1]} like this`;
  const [first, second, third, ...rest] = a;
  return `${first}, ${second} and ${
    rest.length === 0 ? third : rest.length + 1 + " others"
  } like this`;
};
