import { random } from "../random";

describe("random function", () => {
  it("should return a random number", () => {
    let number = random();
    expect(number).not.toBeNull();
    expect(number).not.toBeUndefined();
  });
});
