export const narcissistic = (num: number): boolean => {
  const strNum = num.toString();
  const [exp, digits] = [strNum.length, strNum.split("")];
  const calc = digits.map(Number).reduce((acc, curr) => {
    acc += Math.pow(curr, exp);
    return acc;
  }, 0);
  return calc == num;
};
