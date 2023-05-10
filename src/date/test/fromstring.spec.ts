import { fromString } from "../fromString";
import { EMPTY_DATE_VALUE } from "../core";
import { GxDate } from "../../types/gxdate";

/* Default MDY */
export const testCases1: Array<[string, GxDate]> = [
  ["092891", new GxDate(EMPTY_DATE_VALUE)],
  ["92891", new GxDate(EMPTY_DATE_VALUE)],
  ["09/28/91", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["9/28/91", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["9-28-91", new GxDate(EMPTY_DATE_VALUE)],
  ["TEXTO", new GxDate(EMPTY_DATE_VALUE)]
];

/* DMY */
export const testCases2: Array<[string, GxDate]> = [
  ["280991", new GxDate(EMPTY_DATE_VALUE)],
  ["28991", new GxDate(EMPTY_DATE_VALUE)],
  ["28/09/91", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["28/9/91", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["28-9-91", new GxDate(EMPTY_DATE_VALUE)],
  ["TEXTO", new GxDate(EMPTY_DATE_VALUE)]
];

/* YMD */
export const testCases3: Array<[string, GxDate]> = [
  ["910928", new GxDate(EMPTY_DATE_VALUE)],
  ["91928", new GxDate(EMPTY_DATE_VALUE)],
  ["91/09/28", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["91/9/28", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["91-9-28", new GxDate(EMPTY_DATE_VALUE)],
  ["TEXTO", new GxDate(EMPTY_DATE_VALUE)]
];

/* MDY4 */
export const testCases4: Array<[string, GxDate]> = [
  ["09281991", new GxDate(EMPTY_DATE_VALUE)],
  ["9281991", new GxDate(EMPTY_DATE_VALUE)],
  ["09/28/1991", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["9/28/1991", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["9-28-1991", new GxDate(EMPTY_DATE_VALUE)],
  ["TEXTO", new GxDate(EMPTY_DATE_VALUE)]
];

/* DMY4 */
export const testCases5: Array<[string, GxDate]> = [
  ["28091991", new GxDate(EMPTY_DATE_VALUE)],
  ["2891991", new GxDate(EMPTY_DATE_VALUE)],
  ["28/09/1991", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["28/9/1991", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["28-9-1991", new GxDate(EMPTY_DATE_VALUE)],
  ["TEXTO", new GxDate(EMPTY_DATE_VALUE)]
];

/* Y4MD */
export const testCases6: Array<[string, GxDate]> = [
  ["19910928", new GxDate(EMPTY_DATE_VALUE)],
  ["1991928", new GxDate(EMPTY_DATE_VALUE)],
  ["1991/09/28", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["1991/9/28", new GxDate(new Date(1991, 8, 28, 0, 0, 0))],
  ["1991-9-28", new GxDate(EMPTY_DATE_VALUE)],
  ["TEXTO", new GxDate(EMPTY_DATE_VALUE)]
];

describe("fromString operation", () => {
  for (const t of testCases1) {
    it(`fromString without parameter dateFormat, default MDY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(JSON.stringify(fromString(new GxDate(new Date()), t[0]))).toEqual(
        JSON.stringify(t[1])
      );
    });
  }

  for (const t of testCases2) {
    it(`fromString with parameter dateFormat, DMY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        JSON.stringify(fromString(new GxDate(new Date()), t[0], "DMY"))
      ).toEqual(JSON.stringify(t[1]));
    });
  }

  for (const t of testCases3) {
    it(`fromString with parameter dateFormat, YMD of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        JSON.stringify(fromString(new GxDate(new Date()), t[0], "YMD"))
      ).toEqual(JSON.stringify(t[1]));
    });
  }

  for (const t of testCases1) {
    it(`fromString with parameter dateFormat, MDY of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        JSON.stringify(fromString(new GxDate(new Date()), t[0], "MDY"))
      ).toEqual(JSON.stringify(t[1]));
    });
  }

  for (const t of testCases4) {
    it(`fromString with parameter dateFormat, MDY4 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        JSON.stringify(fromString(new GxDate(new Date()), t[0], "MDY4"))
      ).toEqual(JSON.stringify(t[1]));
    });
  }

  for (const t of testCases5) {
    it(`fromString with parameter dateFormat, DMY4 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        JSON.stringify(fromString(new GxDate(new Date()), t[0], "DMY4"))
      ).toEqual(JSON.stringify(t[1]));
    });
  }

  for (const t of testCases6) {
    it(`fromString with parameter dateFormat, Y4MD of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        JSON.stringify(fromString(new GxDate(new Date()), t[0], "Y4MD"))
      ).toEqual(JSON.stringify(t[1]));
    });
  }
});

/* export const testCases: Array<[string, Date]> = [
  ["28091891", new Date(1891, 8, 28)],
  ["2891891", new Date(1891, 8, 28)],
  ["28/09/1891", new Date(1891, 8, 28)],
  ["28/9/1891", new Date(1891, 8, 28)],
  ["28-9-1891", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

describe("fromString operation", () => {
  for (const t of testCases) {
    it(`fromString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(new Date(), t[0])).toEqual(t[1]);
    });
  }
}); */
