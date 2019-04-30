import { get } from "../get";
import { set } from "../set";
import { remove } from "../remove";
import { clear } from "../clear";

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

  it("should clear all existing values", () => {
    set("myFirstKey", "value one");
    set("mySecondKey", "value two");
    clear();
    let value = get("myFirstKey");
    expect(value).toBe("");
    value = get("mySecondKey");
    expect(value).toBe("");
  });

  it("should not delete other stored keys when calling clear()", () => {
    set("myFirstKey", "value one");
    window.localStorage.setItem("anotherKey", "do not remove!");
    set("mySecondKey", "value two");
    clear();
    let value = window.localStorage.getItem("anotherKey");
    expect(value).toBe("do not remove!");
    value = get("myFirstKey");
    expect(value).toBe("");
    value = get("mySecondKey");
    expect(value).toBe("");
  });
});
