import { narcissistic } from "..";

describe("Narcissistic Number", () => {
  it("should return true if number is narcissistic", () => {
    const res = narcissistic(153);
    expect(res).toBeTruthy();
  });

  it("should return false if number is NOT narcissistic", () => {
    const res = narcissistic(1652);
    expect(res).toBeFalsy();
  });
});
