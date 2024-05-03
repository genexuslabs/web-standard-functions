import { GxBigNumber } from "../../types/gxbignumber";
import { formatNumber_helper } from "../formatNumber_helper";

const testCases: Array<[number, string, string]> = [
  [1, "99", "01"],
  [12, "99", "12"],
  [123, "99", "12"],
  [0, "99", "00"],
  [1, "9,9ZZ", "0,001"],
  [12, "9,9ZZ", "0,012"],
  [123, "9,9ZZ", "0,123"],
  [0, "9,9ZZ", "0,000"],
  [1, "Z,Z99", "01"],
  [12, "Z,Z99", "12"],
  [123, "Z,Z99", "123"],
  [0, "Z,Z99", "00"],
  [1, "9,ZZ9", "0,001"],
  [12, "9,ZZ9", "0,012"],
  [123, "9,ZZ9", "0,123"],
  [0, "9,ZZ9", "0,000"],
  [0, "ZZ9,999,999", "0,000,000"],
  [0, "ZZZZZZZ9", "0"],
  [3.1, "9.99", "3.10"],
  [3.12, "9.99", "3.12"],
  [3, "9.99", "3.00"],
  [3.1, "9.9", "3.1"],
  [3.1, "9.9Z", "3.10"],
  [3.1, "9.Z9", "3.10"],
  [3.12, "9.99", "3.12"],
  [3.12, "9.9Z", "3.12"],
  [3.12, "9.Z9", "3.12"],
  [3, "9.ZZ", "3.00"],
  [3.1, "9.ZZ", "3.10"],
  [3.12, "9.ZZ", "3.12"],
  [4395.35, "Z,ZZZ,ZZ9.99", "4,395.35"],
  [2, "ZZZ9", "2"],
  [2345, "9,999", "2,345"],
  [2345.3, "9,999.9", "2,345.3"],
  [2345.33, "9,999.99", "2,345.33"],
  [3456.97, "ZZ9,999.99", "3,456.97"],
  [34234.55, "ZZ99,999.99", "34,234.55"],
  [395.35, "ZZ9,999.99", "0,395.35"],
  [-123.4, "(9,999.99)", "(0,123.40)"],
  [123.4, "(9,999.99)", "0,123.40"],
  [-123.4, "DB9,999.99", "-DB0,123.40"],
  [123.4, "DB9,999.99", "CR0,123.40"],
  [123.4, "+9,999.99", "+0,123.40"],
  [-123.4, "+9,999.99", "-0,123.40"],
  [0.12, "ZZ9,999.99", "0,000.12"],
  [20, "ZZZ9", "20"],
  [1.2, "ZZZZZZ9.99", "1.20"],
  [13.2, "ZZZZZZ9.99", "13.20"]
];

describe("Numeric::formatNumber", () => {
  for (const t of testCases) {
    it(`toFormattedString(${t[0]},${t[1]}) should be equal to ${t[2]}`, () => {
      expect(formatNumber_helper(t[0], t[1])).toBe(t[2]);
    });
  }
});

describe("Numeric::formatNumber", () => {
  for (const t of testCases) {
    it(`toFormattedString(${t[0]},${t[1]}) should be equal to ${t[2]}`, () => {
      expect(formatNumber_helper(new GxBigNumber(t[0]), t[1])).toBe(t[2]);
    });
  }
});
