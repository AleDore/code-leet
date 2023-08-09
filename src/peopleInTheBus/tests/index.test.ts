import { number } from "..";

describe("Number of People in the bus", () => {
  it("should return the number of people in the bus after last stop", () => {
    const res = number([
      [3, 0],
      [9, 1],
      [4, 10],
      [12, 2],
      [6, 1],
      [7, 10],
    ]);
    expect(res).toEqual(17);
  });
});
