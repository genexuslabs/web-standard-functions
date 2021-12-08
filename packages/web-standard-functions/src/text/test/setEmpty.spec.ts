import { setEmpty } from "../setEmpty";

describe("setEmpty operation", () => {
  it("should have no effect on the empty string", () => {
    expect(setEmpty("")).toBe("");
  });
  it("should return the empty string on any other string", () => {
    expect(setEmpty("hello world!")).toBe("");
  });
});
