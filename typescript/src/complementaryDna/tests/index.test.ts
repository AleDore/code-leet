import { compDna } from "..";

describe("Complementary DNA", () => {
  it("should return a complementary DNA string giving a DNA string", () => {
    const res = compDna("ATTGC");
    expect(res).toEqual("TAACG");
  });
});
