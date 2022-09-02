import { canOpen } from "../canOpen";
import { ConfigurationState } from "../../../../config/configurationState";

describe("Interop.CanOpen method", () => {
  beforeEach(() => {
    ConfigurationState.loadApplicationSettings({
      SERVICE_URL: "/TestAngular/"
    });
  });
  it("should return true for URIs starting with http://", () => {
    expect(canOpen("http://www.google.com")).toBe(true);
  });
  it("should return true for URIs starting with https://", () => {
    expect(canOpen("https://www.google.com")).toBe(true);
  });
  it("should return true relative URLS", () => {
    expect(canOpen("test.html")).toBe(true);
  });
  it("should return true for mailto: URIs", () => {
    expect(canOpen("mailto:test@genexus.com")).toBe(true);
  });
  it("should return true for tel: URIs", () => {
    expect(canOpen("tel:+59826012082")).toBe(true);
  });
  it("should return false for URIs with an unknown schema", () => {
    expect(canOpen("unknown://www.google.com")).toBe(false);
  });
});
