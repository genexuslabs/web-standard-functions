import { canOpen } from "../canOpen";

describe("Interop.CanOpen method", () => {
  it("should return true for URIs starting with http://", () => {
    expect(canOpen("http://www.google.com")).toBe(true);
  });
  it("should return true for URIs starting with https://", () => {
    expect(canOpen("https://www.google.com")).toBe(true);
  });
  it("should return false for URIs with an unknown schema", () => {
    expect(canOpen("unknown://www.google.com")).toBe(false);
  });
});
