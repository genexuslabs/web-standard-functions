import { GxDictionaryData } from "../gxdictionary";

describe("Dictionary", () => {
  it(`Dictionary`, () => {
    const d = new GxDictionaryData();
    d.clear();
    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    expect(d.toJson().toString()).toBe('{"USD":1,"AED":3,"AFN":90,"ALL":98}');

    expect(d.serialize()).toEqual({ USD: 1, AED: 3, AFN: 90, ALL: 98 });

    expect(d.deserialize(d)).toEqual({
      __keyType: undefined,
      __serializationType: undefined,
      __valueType: undefined,
      dictionary: { dictionary: { AED: 3, AFN: 90, ALL: 98, USD: 1 } }
    });
  });
});
