import { GxCollectionData } from "../gxcollection";

describe("Collection", () => {
  it(`Collection`, () => {
    const c = new GxCollectionData();
    c.clear();
    c.add("USD");
    c.add("AED");
    c.add("AFN");
    c.add("ALL");

    expect(c.toJson().toString()).toBe('["USD","AED","AFN","ALL"]');

    expect(c.serialize()).toEqual(["USD", "AED", "AFN", "ALL"]);

    expect(c.deserialize(c)).toEqual(["USD", "AED", "AFN", "ALL"]);
  });
});
