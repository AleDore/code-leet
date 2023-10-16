export const myPow = (x: number, n: number): number => {
  const powExp = (x: number, n: number) => {
    let exp = 1;
    for (var i = 1; i <= n; ) {
      if (i * 2 <= n) {
        exp = exp * exp * x;
        i = i + i;
      } else {
        exp = exp * x;
        i++;
      }
    }
    return exp;
  };

  const modulusN = n > 0 ? n : n * -1;
  const pow = n > 0 ? powExp(x, modulusN) : 1 / powExp(x, modulusN);

  return Number(pow.toFixed(5));
};
