import { random } from "../random";
import { randomBigNumber } from "../../bigNumber/random";

describe("random function", () => {
  it("should return a random number", () => {
    let number = random();
    expect(number).not.toBeNull();
    expect(number).not.toBeUndefined();
  });
});

describe("random function", () => {
  it("should return a random number", () => {
    let number = randomBigNumber();
    expect(number).not.toBeNull();
    expect(number).not.toBeUndefined();
  });
});
