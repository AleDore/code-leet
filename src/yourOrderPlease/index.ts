export const order = (words: string) => {
  const extractNum = (str: string) => {
    const matchesStr = str.match(/(\d+)/);
    return matchesStr ? Number(matchesStr[0]) : 0;
  };
  return words
    .split(" ")
    .sort((a, b) => extractNum(a) - extractNum(b))
    .join(" ");
};
