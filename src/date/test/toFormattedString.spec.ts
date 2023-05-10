import { toFormattedString } from "../toFormattedString";
import { EMPTY_DATE_VALUE } from "../../date/core";
import { GxDate } from "../../types/gxdate";

export const testCases1: Array<[GxDate, string, string, string]> = [
  //format dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”
  [new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)), "01/02/18", "DMY", "99/99/99"],
  [new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)), "18/02/01", "YMD", "99/99/99"],
  [
    new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)),
    "01/02/18",
    "DMY4",
    "99/99/99"
  ],
  [
    new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)),
    "18/02/01",
    "Y4MD",
    "99/99/99"
  ],

  [
    new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)),
    "01/02/2018",
    "DMY",
    "99/99/9999"
  ],
  [
    new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)),
    "2018/02/01",
    "YMD",
    "9999/99/99"
  ],
  [
    new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)),
    "01/02/2018",
    "DMY4",
    "99/99/9999"
  ],
  [
    new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)),
    "2018/02/01",
    "Y4MD",
    "9999/99/99"
  ],

  [new GxDate(EMPTY_DATE_VALUE), "  /  /  ", "YMD", "99/99/99"],
  [new GxDate(EMPTY_DATE_VALUE), "  /  /  ", "YMD", "9999/99/99"],
  [new GxDate(EMPTY_DATE_VALUE), "  /  /  ", "DMY", "99/99/9999"],
  [new GxDate(EMPTY_DATE_VALUE), "  /  /  ", "“MDY”", "99/99/9999"]
];

export const testCases2: Array<[GxDate, string]> = [
  [new GxDate(new Date(2018, 1, 1, 0, 0, 0, 0)), "02/01/18"],
  [new GxDate(EMPTY_DATE_VALUE), "  /  /  "]
];

describe("toFormattedString operation", () => {
  for (const t of testCases1) {
    it(`toFormattedString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toFormattedString(t[0], t[2], t[3])).toEqual(t[1]);
    });
  }
});

// Default
describe("toFormattedString operation", () => {
  for (const t of testCases2) {
    it(`toFormattedString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toFormattedString(t[0])).toEqual(t[1]);
    });
  }
});
