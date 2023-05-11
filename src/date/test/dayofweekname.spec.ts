import { GxDate } from "../../types/gxdate";
import { dayOfWeekName } from "../dayOfWeekName";

export const testCases: Array<[GxDate, string, string]> = [
  [new GxDate(1891, 8, 28), "eng", "Monday"],
  [new GxDate(1968, 7, 9), "eng", "Friday"],
  [new GxDate(2019, 3, 3), "eng", "Wednesday"],
  [new GxDate(1891, 8, 28), "spa", "lunes"],
  [new GxDate(1968, 7, 9), "spa", "viernes"],
  [new GxDate(2019, 3, 3), "spa", "miércoles"],
  [new GxDate(1891, 8, 28), "por", "segunda-feira"],
  [new GxDate(1968, 7, 9), "por", "sexta-feira"],
  [new GxDate(2019, 3, 3), "por", "quarta-feira"],
  [new GxDate(1891, 8, 28), "ita", "lunedì"],
  [new GxDate(1968, 7, 9), "ita", "venerdì"],
  [new GxDate(2019, 3, 3), "ita", "mercoledì"],
  [new GxDate(1891, 8, 28), "chs", "星期一"],
  [new GxDate(1968, 7, 9), "chs", "星期五"],
  [new GxDate(2019, 3, 3), "chs", "星期三"],
  [new GxDate(1891, 8, 28), "cht", "星期一"],
  [new GxDate(1968, 7, 9), "cht", "星期五"],
  [new GxDate(2019, 3, 3), "cht", "星期三"],
  [new GxDate(1891, 8, 28), "jap", "月曜日"],
  [new GxDate(1968, 7, 9), "jap", "金曜日"],
  [new GxDate(2019, 3, 3), "jap", "水曜日"]
];

describe("dayOfWeekName operation", () => {
  for (const t of testCases) {
    it(`dayOfWeekName for "${t[0]}" with lang "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(dayOfWeekName(t[0], t[1])).toEqual(t[2]);
    });
  }
});
