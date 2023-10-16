export const compDna = (dna: string) => {
  const mapDna = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  } as any;
  return dna
    .split("")
    .map((c) => mapDna[c])
    .join("");
};
