import { get } from "../get";
import { set } from "../set";

describe("ClientStorage external object", () => {
  it("should store a value and then retrieve it", () => {
    set("myKey", "Hello world!");
    let value = get("myKey");
    expect(value).toBe("Hello world!");
  });

  it("should return the empty string for a non existent key", () => {
    let value = get("nonexistentKey");
    expect(value).toBe("");
  });
});
