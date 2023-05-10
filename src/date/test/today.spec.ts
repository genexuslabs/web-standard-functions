import { GxDate } from "../../types/gxdate";
import { today } from "../today";

describe("today operation", () => {
  let todayDate = new GxDate(new Date());
  todayDate.setHours(0, 0, 0, 0);

  it(`today should be equal to "${todayDate}"`, () => {
    expect(JSON.stringify(today())).toEqual(JSON.stringify(todayDate));
  });
});
