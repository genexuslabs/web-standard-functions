import { fromString } from "../../datetime/CtoT";
import { GxDatetime } from "../gxdatetime";

describe("GxDateTime", () => {
  it(`GxDateTime`, () => {
    let d = new GxDatetime();
    d = fromString("2024/12/12 11:15:37 AM", "Y4MD");

    let dAux = new GxDatetime();
    expect(dAux.deserialize("2024-12-12T11:15:37.000")).toEqual(d);
    expect(d.serialize()).toEqual("2024-12-12T11:15:37.000");

    //compare
    let date1 = new GxDatetime();
    date1 = fromString("2024/12/12 11:15:37 AM", "Y4MD");

    let date2 = new GxDatetime();
    date2 = fromString("2024/12/12 11:15:37 AM", "Y4MD");

    expect(GxDatetime.compare(date1, date2)).toEqual(true);
    expect(
      GxDatetime.compare(date1, fromString("2025/12/14 12:15:37 AM", "Y4MD"))
    ).toEqual(false);

    //createFromDate
    let date = new Date("2024/12/12 11:15:37 AM");
    GxDatetime.createFromDate(date);

    expect(date).toEqual(date1);

    //fromISOString
    let dDate = new GxDatetime();
    let strDate = "2024-12-12T11:15:37.000"; // work only with '-' not with '/'

    expect(dDate.fromISOString(strDate)).toEqual(date1);
  });
});
