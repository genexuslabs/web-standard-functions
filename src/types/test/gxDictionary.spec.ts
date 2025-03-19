import { fromString } from "../../date/CtoD";
import { GxCollectionData } from "../gxcollection";
import { GxDate } from "../gxdate";
import { GxDictionaryData } from "../gxdictionary";
import { GxSdtData } from "../gxsdt";
import { fromString as fromStringDT } from "../../datetime/fromString";
import { GxGuid } from "../gxguid";
import { GxDatetime } from "../gxdatetime";

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

    let dAux = new GxDictionaryData();
    expect(dAux.deserialize(d)).toEqual({
      __keyType: undefined,
      __serializationType: undefined,
      __valueType: undefined,
      dictionary: { dictionary: { AED: 3, AFN: 90, ALL: 98, USD: 1 } }
    });
  });
});

// CLEAR METHOD
describe("Dictionary Clear Method", () => {
  it(`Dictionary Clear Method`, () => {
    const d = new GxDictionaryData();
    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);
    d.clear();

    expect(d.toJson().toString()).toBe("{}");
    expect(d.dictionary).toEqual({});
  });
});

// CONTAINS METHOD
describe("Dictionary Contains Method", () => {
  it(`Dictionary Contains Method`, () => {
    const d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    expect(d.contains("USD")).toEqual(true);
    expect(d.contains("HHH")).toEqual(false);
  });
});

// COUNT PROPERTY
describe("Dictionary Count Property", () => {
  it(`Dictionary Count Property`, () => {
    const d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    expect(d.Count).toEqual(4);
  });
});

// FROMJSON METHOD
describe("Dictionary FromJson Method", () => {
  it(`Dictionary FromJson Method`, () => {
    const d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    d.fromJson('{"URU":1,"ARG":2,"BRA":3,"CHI":4}');
    expect(d.dictionary).toEqual({ URU: 1, ARG: 2, BRA: 3, CHI: 4 });

    d.clear();

    d.fromJson('{"AED":3,"ALL":98,"USD":1,"AFN":90}');
    const objetWithDictionary: object = {
      provider: "Provider1",
      rates: d
    };

    let r = new GxDictionaryData();
    r.set("AED", 3);
    r.set("ALL", 98);
    r.set("USD", 1);
    r.set("AFN", 90);
    expect(objetWithDictionary).toEqual({ provider: "Provider1", rates: r });
  });
});

// GET METHOD
describe("Dictionary Get Method", () => {
  it(`Dictionary Get Method`, () => {
    const d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    expect(d.get("USD")).toEqual(1);
    expect(d.get("AFN")).toEqual(90);
  });
});

// KEY PROPERTY
describe("Dictionary Key Property", () => {
  it(`Dictionary Key Property`, () => {
    const d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    expect(d.Keys).toEqual(["USD", "AED", "AFN", "ALL"]);
  });
});

// REMOVEALL METHOD
describe("Dictionary RemoveAll Method", () => {
  it(`Dictionary RemoveAll Method`, () => {
    let d = new GxDictionaryData();
    let otherD = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    otherD.setDictionary(d);
    otherD.remove("USD");

    d.removeAll(otherD);

    expect(d.dictionary).toEqual({ USD: 1 });
  });
});

// REMOVEKEYS METHOD
describe("Dictionary RemoveKeys Method", () => {
  it(`Dictionary RemoveKeys Method`, () => {
    let d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    let k = new GxCollectionData();
    k.add("USD");
    k.add("AED");
    d.removeKeys(k);

    expect(d.dictionary).toEqual({ AFN: 90, ALL: 98 });
  });
});

// REMOVE METHOD
describe("Dictionary Remove Method", () => {
  it(`Dictionary Remove Method`, () => {
    let d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    d.remove("USD");
    d.remove("AED");

    expect(d.dictionary).toEqual({ AFN: 90, ALL: 98 });
  });
});

// SETDICTIONARY METHOD
describe("Dictionary SetDictionary Method", () => {
  it(`Dictionary SetDictionary Method`, () => {
    let d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    let otherD = new GxDictionaryData();

    otherD.setDictionary(d);

    expect(otherD.dictionary).toEqual({ USD: 1, AED: 3, AFN: 90, ALL: 98 });
  });
});

// SET METHOD
describe("Dictionary Set Method", () => {
  it(`Dictionary Set Method`, () => {
    let d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    expect(d.dictionary).toEqual({ USD: 1, AED: 3, AFN: 90, ALL: 98 });
  });
});

//TOJSON METHOD
describe("Dictionary toJson Method", () => {
  it(`Dictionary toJson Method`, () => {
    let d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    const objetWithDictionary = {
      provider: "",
      rates: new GxDictionaryData()
    };

    let sdt = new GxSdtData();
    sdt.initialize();
    objetWithDictionary.provider = "Provider1";
    objetWithDictionary.rates = d;
    sdt.fromJson(JSON.stringify(objetWithDictionary));

    expect(sdt.toJson()).toEqual(
      '{"provider":"Provider1","rates":{"dictionary":{"USD":1,"AED":3,"AFN":90,"ALL":98}}}'
    );
    expect(d.toJson()).toEqual('{"USD":1,"AED":3,"AFN":90,"ALL":98}');
  });
});

//VALUES PROPERTY
describe("Dictionary Values Property", () => {
  it(`Dictionary Values Property`, () => {
    const d = new GxDictionaryData();
    d.clear();

    d.set("USD", 1);
    d.set("AED", 3);
    d.set("AFN", 90);
    d.set("ALL", 98);

    let v = d.Values;

    expect(v).toEqual([1, 3, 90, 98]);
  });
});

//SETTYPE
describe("Dictionary setType", () => {
  it(`Dictionary setType`, () => {
    const d = new GxDictionaryData();

    // ===GXDATE=== //
    // ============ //

    let dateTest: GxDate = new GxDate();
    dateTest = fromString("2024/12/12", "Y4MD");

    d.clear();
    d.set("Fecha1", dateTest);
    d.setType(String, GxDate, String);

    expect(d.toJson()).toEqual('{"Fecha1":"2024-12-12"}'); // work only with '-' not with '/'

    expect(d.serialize()).toEqual({ Fecha1: "2024-12-12" }); // /* d.dictionary */

    d.clear();
    d.set("Fecha1", dateTest);
    d.setType(String, GxDate, String);

    expect(d.serialize()).toEqual({ Fecha1: "2024-12-12" }); // /* dateTest */

    let dAux = new GxDictionaryData();
    dAux.setType(String, GxDate, String);
    d.clear();
    d.set("Fecha1", dateTest);
    d.setType(String, GxDate, String);
    expect(dAux.deserialize({ Fecha1: "2024-12-12" })).toEqual(d); // work only with '-' not with '/'

    // ===GXDATETIME=== //
    // ================ //

    let dateTimeTest: GxDatetime = new GxDatetime();
    dateTimeTest = fromStringDT(dateTimeTest, "12/12/2024 11:15:37 AM");

    d.clear();
    d.set("Fecha1", dateTimeTest);
    d.setType(String, GxDatetime, String);

    expect(d.toJson()).toEqual('{"Fecha1":"2024-12-12T11:15:37.000"}'); // work only with '-' not with '/'

    expect(d.serialize()).toEqual(
      { Fecha1: "2024-12-12T11:15:37.000" } /* d.dictionary */
    );

    d.clear();
    d.set("Fecha1", dateTimeTest);
    d.setType(String, GxDatetime, String);

    expect(d.serialize()).toEqual({ Fecha1: "2024-12-12T11:15:37.000" });

    dAux = new GxDictionaryData();
    dAux.setType(String, GxDatetime, String);
    d.clear();
    d.set("Fecha1", dateTimeTest);
    d.setType(String, GxDatetime, String);
    expect(dAux.deserialize({ Fecha1: "2024-12-12T11:15:37.000" })).toEqual(d); // work only with '-' not with '/'

    // ===GXGUID=== //
    // ============ //
    d.clear();

    let guidTest: GxGuid = new GxGuid();
    guidTest = GxGuid.fromString("9bcc27fb-c1ec-43a2-81b9-df01ed477f5d");

    d.set("GUID1", guidTest);
    d.setType(String, GxGuid, String);

    expect(d.toJson()).toEqual(
      '{"GUID1":"9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"}'
    );
    expect(d.serialize()).toEqual({
      GUID1: "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"
    });

    dAux = new GxDictionaryData();
    dAux.setType(String, GxGuid, String);
    d.clear();
    d.set("GUID1", guidTest);
    d.setType(String, GxGuid, String);
    expect(
      dAux.deserialize({ GUID1: "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d" })
    ).toEqual(d);
  });
});
