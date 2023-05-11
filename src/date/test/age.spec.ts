import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { age } from "../age";
import { today } from "../today";

export const testCases: Array<[
  GxDate | GxDatetime,
  GxDate | GxDatetime,
  number
]> = [
  [new GxDate(1891, 8, 28), new GxDate(2019, 8, 29), 128],
  [new GxDate(1968, 7, 9), new GxDate(2019, 4, 5), 50],
  [new GxDate(2019, 4, 5), new GxDate(1968, 8, 9), -50],
  [new GxDate(2018, 4, 5), new GxDate(2019, 4, 5), 1],
  [new GxDate(2018, 3, 5), new GxDate(2019, 4, 5), 1],
  [new GxDate(2019, 4, 1), new GxDate(2019, 4, 5), 0],
  [new GxDate(1968, 7, 9), undefined, age(new GxDate(1968, 7, 9), today())],
  [
    new GxDatetime(1891, 8, 28, 13, 15),
    new GxDatetime(2019, 8, 29, 13, 15),
    128
  ],
  [
    new GxDatetime(1968, 7, 9, 13, 15, 32),
    new GxDatetime(2019, 4, 5, 13, 15, 32),
    50
  ],
  [
    new GxDatetime(2019, 4, 5, 13, 15, 32, 42),
    new GxDatetime(1968, 8, 9, 13, 15, 32, 42),
    -50
  ]
];

describe("age operation", () => {
  for (const t of testCases) {
    it(`age at ${t[1] || "today"} from "${t[0]}" should be equal to "${
      t[2]
    }"`, () => {
      expect(age(t[0], t[1])).toEqual(t[2]);
    });
  }
});
