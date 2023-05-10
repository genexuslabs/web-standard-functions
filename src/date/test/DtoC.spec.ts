import { GxDate } from "../../types/gxdate";
import { toString } from "../DtoC";
import { EMPTY_DATE_VALUE } from "../core";

/* Default MDY */
export const testCases1: Array<[GxDate, string]> = [
  [new GxDate(new Date(1891, 8, 28)), "09/28/91"],
  [new GxDate(new Date(2018, 0, 1)), "01/01/18"],
  [new GxDate(new Date(2018, 0, 30)), "01/30/18"],
  [new GxDate(EMPTY_DATE_VALUE), "  /  /  "],
  [new GxDate(new Date(2018, 0, 31)), "01/31/18"]
];

/* Default DMY */
export const testCases2: Array<[GxDate, string]> = [
  [new GxDate(new Date(1891, 8, 28)), "28/09/91"],
  [new GxDate(new Date(2018, 0, 1)), "01/01/18"],
  [new GxDate(new Date(2018, 0, 30)), "30/01/18"],
  [new GxDate(EMPTY_DATE_VALUE), "  /  /  "],
  [new GxDate(new Date(2018, 0, 31)), "31/01/18"]
];

/* Default YMD */
export const testCases3: Array<[GxDate, string]> = [
  [new GxDate(new Date(1891, 8, 28)), "91/09/28"],
  [new GxDate(new Date(2018, 0, 1)), "18/01/01"],
  [new GxDate(new Date(2018, 0, 30)), "18/01/30"],
  [new GxDate(EMPTY_DATE_VALUE), "  /  /  "],
  [new GxDate(new Date(2018, 0, 31)), "18/01/31"]
];

describe("toString operation", () => {
  for (const t of testCases1) {
    it(`toString without parameter dateFormat, default MDY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0])).toEqual(t[1]);
    });
  }

  for (const t of testCases2) {
    it(`toString with parameter dateFormat, DMY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], "DMY")).toEqual(t[1]);
    });
  }

  for (const t of testCases3) {
    it(`toString with parameter dateFormat, YMD of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], "YMD")).toEqual(t[1]);
    });
  }

  for (const t of testCases1) {
    it(`toString with parameter dateFormat, MDY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], "MDY")).toEqual(t[1]);
    });
  }
});
