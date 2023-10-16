import { stringy } from "..";

describe("Stringy Strings", () => {
  it("should return an array of alternating 1s and 0s", () => {
    const res = stringy(5);
    expect(res).toEqual("10101");
  });

  it("should return empty string if size is 0", () => {
    const res = stringy(0);
    expect(res).toEqual("");
  });

  it("should return 1s if size is 1", () => {
    const res = stringy(1);
    expect(res).toEqual("1");
  });
});
