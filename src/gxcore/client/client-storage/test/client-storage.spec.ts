import { get } from "../get";
import { set } from "../set";
import { remove } from "../remove";

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

  it("should remove an existing key", () => {
    set("myKey", "Hello world!");
    remove("myKey");
    let value = get("myKey");
    expect(value).toBe("");
  });
});
