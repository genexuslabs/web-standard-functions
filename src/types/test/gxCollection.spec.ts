import { fromString } from "../../date/CtoD";
import { GxCollectionData, gxRowNumberId } from "../gxcollection";
import { GxDate } from "../gxdate";
import { GxDatetime } from "../gxdatetime";
import { fromString as fromStringDT } from "../../datetime/fromString";
import { GxGuid } from "../gxguid";

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

    // ===GXDATE=== //
    // ============ //
    c.clear();

    let dateTest: GxDate = new GxDate();
    dateTest = fromString("2024/12/12", "Y4MD");

    c.setType(GxDate, String);
    c.add(dateTest);
    c.add(dateTest);
    c.add(dateTest);
    c.add(dateTest);

    expect(c.toJson().toString()).toBe(
      '["2024-12-12","2024-12-12","2024-12-12","2024-12-12"]'
    );
    expect(c.serialize()).toEqual([
      "2024-12-12",
      "2024-12-12",
      "2024-12-12",
      "2024-12-12"
    ]);
    expect(
      c.deserialize(["2024-12-12", "2024-12-12", "2024-12-12", "2024-12-12"])
    ).toEqual(c);

    // ===GXDATETIME=== //
    // ================ //
    c.clear();

    let dateTimeTest: GxDatetime = new GxDatetime();
    dateTimeTest = fromStringDT(dateTimeTest, "12/12/2024 11:15:37 AM");

    c.setType(GxDatetime, String);
    c.add(dateTimeTest);
    c.add(dateTimeTest);
    c.add(dateTimeTest);
    c.add(dateTimeTest);

    expect(c.toJson().toString()).toBe(
      '["2024-12-12T11:15:37.000","2024-12-12T11:15:37.000","2024-12-12T11:15:37.000","2024-12-12T11:15:37.000"]'
    );
    expect(c.serialize()).toEqual([
      "2024-12-12T11:15:37.000",
      "2024-12-12T11:15:37.000",
      "2024-12-12T11:15:37.000",
      "2024-12-12T11:15:37.000"
    ]);
    expect(
      c.deserialize([
        "2024-12-12T11:15:37.000",
        "2024-12-12T11:15:37.000",
        "2024-12-12T11:15:37.000",
        "2024-12-12T11:15:37.000"
      ])
    ).toEqual(c);

    // ===GXGUID=== //
    // ============ //
    c.clear();

    let guidTest: GxGuid = new GxGuid();
    guidTest = GxGuid.fromString("9bcc27fb-c1ec-43a2-81b9-df01ed477f5d");

    c.setType(GxGuid, String);
    c.add(guidTest);
    c.add(guidTest);
    c.add(guidTest);

    expect(c.toJson()).toEqual(
      '["9bcc27fb-c1ec-43a2-81b9-df01ed477f5d","9bcc27fb-c1ec-43a2-81b9-df01ed477f5d","9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"]'
    );
    expect(c.serialize()).toEqual([
      "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d",
      "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d",
      "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"
    ]);

    let esp = new GxCollectionData();
    esp.setType(GxGuid, String);
    esp.add({ value: "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d", _gxIndex: 0 });
    esp.add({ value: "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d", _gxIndex: 1 });
    esp.add({ value: "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d", _gxIndex: 2 });
    expect(
      c.deserialize([
        "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d",
        "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d",
        "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"
      ])
    ).toEqual(esp);
  });
});
