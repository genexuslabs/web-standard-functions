import { fromString } from "../CtoD";
import { EMPTY_DATE_VALUE } from "../core";

/* Default MDY */
export const testCases1: Array<[string, Date]> = [
  ["092891", EMPTY_DATE_VALUE],
  ["92891", EMPTY_DATE_VALUE],
  ["09/28/91", new Date(1991, 8, 28, 0, 0, 0)],
  ["9/28/91", new Date(1991, 8, 28, 0, 0, 0)],
  ["9-28-91", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* DMY */
export const testCases2: Array<[string, Date]> = [
  ["280991", EMPTY_DATE_VALUE],
  ["28991", EMPTY_DATE_VALUE],
  ["28/09/91", new Date(1991, 8, 28, 0, 0, 0)],
  ["28/9/91", new Date(1991, 8, 28, 0, 0, 0)],
  ["28-9-91", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* YMD */
export const testCases3: Array<[string, Date]> = [
  ["910928", EMPTY_DATE_VALUE],
  ["91928", EMPTY_DATE_VALUE],
  ["91/09/28", new Date(1991, 8, 28, 0, 0, 0)],
  ["91/9/28", new Date(1991, 8, 28, 0, 0, 0)],
  ["91-9-28", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* MDY4 */
export const testCases4: Array<[string, Date]> = [
  ["09281991", EMPTY_DATE_VALUE],
  ["9281991", EMPTY_DATE_VALUE],
  ["09/28/1991", new Date(1991, 8, 28, 0, 0, 0)],
  ["9/28/1991", new Date(1991, 8, 28, 0, 0, 0)],
  ["9-28-1991", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* DMY4 */
export const testCases5: Array<[string, Date]> = [
  ["28091991", EMPTY_DATE_VALUE],
  ["2891991", EMPTY_DATE_VALUE],
  ["28/09/1991", new Date(1991, 8, 28, 0, 0, 0)],
  ["28/9/1991", new Date(1991, 8, 28, 0, 0, 0)],
  ["28-9-1991", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

/* Y4MD */
export const testCases6: Array<[string, Date]> = [
  ["19910928", EMPTY_DATE_VALUE],
  ["1991928", EMPTY_DATE_VALUE],
  ["1991/09/28", new Date(1991, 8, 28, 0, 0, 0)],
  ["1991/9/28", new Date(1991, 8, 28, 0, 0, 0)],
  ["1991-9-28", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

describe("fromString operation", () => {
  for (const t of testCases1) {
    it(`fromString without parameter dateFormat, default MDY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0])).toEqual(t[1]);
    });
  }

  for (const t of testCases2) {
    it(`fromString with parameter dateFormat, DMY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "DMY")).toEqual(t[1]);
    });
  }

  for (const t of testCases3) {
    it(`fromString with parameter dateFormat, YMD of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "YMD")).toEqual(t[1]);
    });
  }

  for (const t of testCases1) {
    it(`fromString with parameter dateFormat, MDY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "MDY")).toEqual(t[1]);
    });
  }

  for (const t of testCases4) {
    it(`fromString with parameter dateFormat, MDY4 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "MDY4")).toEqual(t[1]);
    });
  }

  for (const t of testCases5) {
    it(`fromString with parameter dateFormat, DMY4 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "DMY4")).toEqual(t[1]);
    });
  }

  for (const t of testCases6) {
    it(`fromString with parameter dateFormat, Y4MD of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0], "Y4MD")).toEqual(t[1]);
    });
  }
});
