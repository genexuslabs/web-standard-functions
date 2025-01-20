import { fromString } from "../../date/CtoD";
import { GxDate } from "../gxdate";

describe("GxDate", () => {
  it(`GxDate`, () => {
    let d = new GxDate();
    d = fromString("2024/12/12", "Y4MD");

    let dAux = new GxDate();
    expect(dAux.deserialize("2024-12-12")).toEqual(d); // work only with '-' not with '/'
    expect(d.serialize()).toEqual("2024-12-12"); // work only with '-' not with '/'

    //compare
    let date1 = new GxDate();
    date1 = fromString("2024/12/12", "Y4MD");

    let date2 = new GxDate();
    date2 = fromString("2024/12/12", "Y4MD");

    expect(GxDate.compare(date1, date2)).toEqual(true);
    expect(GxDate.compare(date1, fromString("2025/12/14", "Y4MD"))).toEqual(
      false
    );

    //createFromDate
    let date = new Date("2024/12/12");
    GxDate.createFromDate(date);

    expect(date).toEqual(date1);

    //fromISOString
    let dDate = new GxDate();
    let strDate = "2024-12-12"; // work only with '-' not with '/'

    expect(dDate.fromISOString(strDate)).toEqual(date1);
  });
});
