export const shortLongShort = (s1: string, s2: string) => {
  const [shortest, greatest] = s1.length <= s2.length ? [s1, s2] : [s2, s1];
  return [shortest, greatest, shortest].join("");
};
