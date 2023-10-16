export const stringy = (size: number) => {
  let result = [];
  for (var i = 1; i <= size; i++) {
    result.push(i % 2);
  }
  return result.join("");
};
