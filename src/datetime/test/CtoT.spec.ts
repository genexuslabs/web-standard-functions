import { fromString } from "../CtoT";
import { EMPTY_DATE_VALUE } from "../../date/core";

/* 11 es el mes 12 */

/* Default - MDY y 12 */
export const testCases1: Array<[string, Date]> = [
  ["12/17/2019 11:15 AM", new Date(2019, 11, 17, 11, 15)],
  ["12/17/2019 11:15 PM", new Date(2019, 11, 17, 23, 15)],
  ["12/17/2019 11:05 AM", new Date(2019, 11, 17, 11, 5)],
  ["12/17/2019 11:05 PM", new Date(2019, 11, 17, 23, 5)],
  ["2/17/2019 11:15 AM", new Date(2019, 1, 17, 11, 15)],
  ["2/17/2019 11:15 PM", new Date(2019, 1, 17, 23, 15)],
  ["12/17/2019 11:15:37 AM", new Date(2019, 11, 17, 11, 15, 37)],
  ["12/17/2019 11:15:37 PM", new Date(2019, 11, 17, 23, 15, 37)],
  ["12/17/2019 11:15:37.000 AM", new Date(2019, 11, 17, 11, 15, 37, 0)],
  ["12/17/2019 11:15:37.000 PM", new Date(2019, 11, 17, 23, 15, 37, 0)],
  ["03/23/2023 12:09:43.000 PM", new Date(2023, 2, 23, 12, 9, 43, 0)],
  ["03/23/2023 12:09:43.000 AM", new Date(2023, 2, 23, 0, 9, 43, 0)],
  ["12172019 11:15 AM", EMPTY_DATE_VALUE],
  ["2172019 11:15 AM", EMPTY_DATE_VALUE],
  ["12172019 11:15:37 AM", EMPTY_DATE_VALUE],
  ["12/17/2019 11 AM", EMPTY_DATE_VALUE],
  ["12/17/2019 24:00 AM", EMPTY_DATE_VALUE],
  ["12172019 AM", EMPTY_DATE_VALUE],
  ["12-17-2019 11:15 AM", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* MDY y 24 */
export const testCases2: Array<[string, Date]> = [
  ["12/17/2019 11:15", new Date(2019, 11, 17, 11, 15)],
  ["12/17/2019 23:15", new Date(2019, 11, 17, 23, 15)],
  ["12/17/2019 11:05", new Date(2019, 11, 17, 11, 5)],
  ["12/17/2019 23:05", new Date(2019, 11, 17, 23, 5)],
  ["2/17/2019 11:15", new Date(2019, 1, 17, 11, 15)],
  ["2/17/2019 23:15", new Date(2019, 1, 17, 23, 15)],
  ["12/17/2019 11:15:37", new Date(2019, 11, 17, 11, 15, 37)],
  ["12/17/2019 23:15:37", new Date(2019, 11, 17, 23, 15, 37)],
  ["12/17/2019 11:15:37.000", new Date(2019, 11, 17, 11, 15, 37, 0)],
  ["12/17/2019 23:15:37.000", new Date(2019, 11, 17, 23, 15, 37, 0)],
  ["12172019 11:15", EMPTY_DATE_VALUE],
  ["2172019 11:15", EMPTY_DATE_VALUE],
  ["12172019 11:15:37", EMPTY_DATE_VALUE],
  ["12/17/2019 11", EMPTY_DATE_VALUE],
  ["12/17/2019 24:00", EMPTY_DATE_VALUE],
  ["12172019", EMPTY_DATE_VALUE],
  ["12-17-2019 11:15", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* Default - DMY y 12 */
export const testCases3: Array<[string, Date]> = [
  ["17/12/2019 11:15 AM", new Date(2019, 11, 17, 11, 15)],
  ["17/12/2019 11:15 PM", new Date(2019, 11, 17, 23, 15)],
  ["17/12/2019 11:05 AM", new Date(2019, 11, 17, 11, 5)],
  ["17/12/2019 11:05 PM", new Date(2019, 11, 17, 23, 5)],
  ["17/2/2019 11:15 AM", new Date(2019, 1, 17, 11, 15)],
  ["17/2/2019 11:15 PM", new Date(2019, 1, 17, 23, 15)],
  ["17/12/2019 11:15:37 AM", new Date(2019, 11, 17, 11, 15, 37)],
  ["17/12/2019 11:15:37 PM", new Date(2019, 11, 17, 23, 15, 37)],
  ["17/12/2019 11:15:37.000 AM", new Date(2019, 11, 17, 11, 15, 37, 0)],
  ["17/12/2019 11:15:37.000 PM", new Date(2019, 11, 17, 23, 15, 37, 0)],
  ["30/03/2023 12:09:43.000 PM", new Date(2023, 2, 30, 12, 9, 43, 0)],
  ["30/03/2023 12:09:43.000 AM", new Date(2023, 2, 30, 0, 9, 43, 0)],
  ["17122019 11:15 AM", EMPTY_DATE_VALUE],
  ["1722019 11:15 AM", EMPTY_DATE_VALUE],
  ["17122019 11:15:37 AM", EMPTY_DATE_VALUE],
  ["17/12/2019 11 AM", EMPTY_DATE_VALUE],
  ["17/12/2019 24:00 AM", EMPTY_DATE_VALUE],
  ["17122019 AM", EMPTY_DATE_VALUE],
  ["17-12-2019 11:15 AM", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* Default - DMY y 24 */
export const testCases4: Array<[string, Date]> = [
  ["17/12/2019 11:15", new Date(2019, 11, 17, 11, 15)],
  ["17/12/2019 23:15", new Date(2019, 11, 17, 23, 15)],
  ["17/12/2019 11:05", new Date(2019, 11, 17, 11, 5)],
  ["17/12/2019 23:05", new Date(2019, 11, 17, 23, 5)],
  ["17/2/2019 11:15", new Date(2019, 1, 17, 11, 15)],
  ["17/2/2019 23:15", new Date(2019, 1, 17, 23, 15)],
  ["17/12/2019 11:15:37", new Date(2019, 11, 17, 11, 15, 37)],
  ["17/12/2019 23:15:37", new Date(2019, 11, 17, 23, 15, 37)],
  ["17/12/2019 11:15:37.000", new Date(2019, 11, 17, 11, 15, 37, 0)],
  ["17/12/2019 23:15:37.000", new Date(2019, 11, 17, 23, 15, 37, 0)],
  ["17122019 11:15", EMPTY_DATE_VALUE],
  ["1722019 11:15", EMPTY_DATE_VALUE],
  ["17122019 11:15:37", EMPTY_DATE_VALUE],
  ["17/12/2019 11", EMPTY_DATE_VALUE],
  ["17/12/2019 24:00", EMPTY_DATE_VALUE],
  ["17122019", EMPTY_DATE_VALUE],
  ["17-12-2019 11:15", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* Default - YMD y 12 */
export const testCases5: Array<[string, Date]> = [
  ["2019/12/17 11:15 AM", new Date(2019, 11, 17, 11, 15)],
  ["2019/12/17 11:15 PM", new Date(2019, 11, 17, 23, 15)],
  ["2019/12/17 11:05 AM", new Date(2019, 11, 17, 11, 5)],
  ["2019/12/17 11:05 PM", new Date(2019, 11, 17, 23, 5)],
  ["2019/2/17 11:15 AM", new Date(2019, 1, 17, 11, 15)],
  ["2019/2/17 11:15 PM", new Date(2019, 1, 17, 23, 15)],
  ["2019/12/17 11:15:37 AM", new Date(2019, 11, 17, 11, 15, 37)],
  ["2019/12/17 11:15:37 PM", new Date(2019, 11, 17, 23, 15, 37)],
  ["2019/12/17 12:15:37 PM", new Date(2019, 11, 17, 12, 15, 37)],
  ["2019/12/17 11:15:37.000 AM", new Date(2019, 11, 17, 11, 15, 37, 0)],
  ["2019/12/17 11:15:37.000 PM", new Date(2019, 11, 17, 23, 15, 37, 0)],
  ["2023/03/30 12:09:43.000 PM", new Date(2023, 2, 30, 12, 9, 43, 0)],
  ["2023/03/30 12:09:43.000 AM", new Date(2023, 2, 30, 0, 9, 43, 0)],
  ["20191217 11:15 AM", EMPTY_DATE_VALUE],
  ["2019217 11:15 AM", EMPTY_DATE_VALUE],
  ["20191217 11:15:37 AM", EMPTY_DATE_VALUE],
  ["2019/12/17 11 AM", EMPTY_DATE_VALUE],
  ["2019/12/17 24:00", EMPTY_DATE_VALUE],
  ["20191217 AM", EMPTY_DATE_VALUE],
  ["2019-12-17 11:15 AM", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* Default - YMD y 24 */
export const testCases6: Array<[string, Date]> = [
  ["2019/12/17 11:15", new Date(2019, 11, 17, 11, 15)],
  ["2019/12/17 23:15", new Date(2019, 11, 17, 23, 15)],
  ["2019/12/17 11:05", new Date(2019, 11, 17, 11, 5)],
  ["2019/12/17 23:05", new Date(2019, 11, 17, 23, 5)],
  ["2019/2/17 11:15", new Date(2019, 1, 17, 11, 15)],
  ["2019/2/17 23:15", new Date(2019, 1, 17, 23, 15)],
  ["2019/12/17 11:15:37", new Date(2019, 11, 17, 11, 15, 37)],
  ["2019/12/17 23:15:37", new Date(2019, 11, 17, 23, 15, 37)],
  ["2019/12/17 11:15:37.000", new Date(2019, 11, 17, 11, 15, 37, 0)],
  ["2019/12/17 23:15:37.000", new Date(2019, 11, 17, 23, 15, 37, 0)],
  ["20191217 11:15", EMPTY_DATE_VALUE],
  ["2019217 11:15", EMPTY_DATE_VALUE],
  ["20191217 11:15:37", EMPTY_DATE_VALUE],
  ["2019/12/17 11", EMPTY_DATE_VALUE],
  ["2019/12/17 24:00", EMPTY_DATE_VALUE],
  ["20191217", EMPTY_DATE_VALUE],
  ["2019-12-17 11:15", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

describe("fromString operation", () => {
  for (const t of testCases1) {
    it(`fromString without parameter dateFormat y timeFormat,default MDY y 12 of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0])).toEqual(t[1]);
    });
  }

  for (const t of testCases1) {
    it(`fromString with parameter dateFormat y timeFormat,MDY of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "MDY")).toEqual(t[1]);
    });
  }

  for (const t of testCases2) {
    it(`fromString with parameter dateFormat y timeFormat,default MDY of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "MDY")).toEqual(t[1]);
    });
  }

  for (const t of testCases3) {
    it(`fromString with parameter dateFormat,default MDY of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "DMY")).toEqual(t[1]);
    });
  }

  for (const t of testCases4) {
    it(`fromString with parameter dateFormat,default MDY of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "DMY")).toEqual(t[1]);
    });
  }

  for (const t of testCases5) {
    it(`fromString with parameter dateFormat,default YMD of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "YMD")).toEqual(t[1]);
    });
  }

  for (const t of testCases6) {
    it(`fromString with parameter dateFormat ,default YMD of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "YMD")).toEqual(t[1]);
    });
  }

  for (const t of testCases4) {
    it(`fromString with parameter dateFormat,default DMY4 of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "DMY4")).toEqual(t[1]);
    });
  }

  for (const t of testCases2) {
    it(`fromString with parameter dateFormat,default MDY4 of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "MDY4")).toEqual(t[1]);
    });
  }

  for (const t of testCases6) {
    it(`fromString with parameter dateFormat,default Y4MD of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "Y4MD")).toEqual(t[1]);
    });
  }
});
