import { shortLongShort } from "..";

describe("Stringy Strings", () => {
  it("should return a sls string given 2 strings", () => {
    const res = shortLongShort("1", "22");
    expect(res).toEqual("1221");
  });

  it("should return a sls string given 2 strings with one of zero length", () => {
    const res = shortLongShort("", "22");
    expect(res).toEqual("22");
  });
});
