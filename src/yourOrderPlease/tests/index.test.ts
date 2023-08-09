import { order } from "..";

describe("Your order please", () => {
  it("should return an ordered string", () => {
    const res = order("4of Fo1r pe6ople g3ood th5e the2");
    expect(res).toEqual("Fo1r the2 g3ood 4of th5e pe6ople");
  });
});
