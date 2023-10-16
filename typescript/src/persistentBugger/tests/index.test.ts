import { persistence } from "..";

describe("Persistent bugger", () => {
  it("should return a multiplicative persistence of a given number", () => {
    const res = persistence(39);
    expect(res).toEqual(3);
  });
});
