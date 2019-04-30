import { newLine } from "../newline";

describe("newline function", () => {
  it("should return the newline character", () => {
    let nl = newLine();
    let str = "hello" + nl + "world!";
    expect(str).toBe(`hello
world!`);
  });
});
