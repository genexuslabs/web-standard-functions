import { toFormattedString } from "../toFormattedString";
import { EMPTY_DATE_VALUE } from "../../date/core";
import { GxDatetime } from "../../types/gxdatetime";

export const testCases1: Array<[GxDatetime, string, string, number, string]> = [
  //12
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18",
    "MDY",
    12,
    "99/99/99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18 01 PM",
    "MDY",
    12,
    "99/99/99 99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18 01:05 PM",
    "MDY",
    12,
    "99/99/99 99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18 01:05:27 PM",
    "MDY",
    12,
    "99/99/99 99:99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18 01:05:27.123 PM",
    "MDY",
    12,
    "99/99/99 99:99:99.999"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18",
    "MDY",
    12,
    "99/99/99"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18 01 AM",
    "MDY",
    12,
    "99/99/99 99"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18 01:05 AM",
    "MDY",
    12,
    "99/99/99 99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18 01:05:27 AM",
    "MDY",
    12,
    "99/99/99 99:99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18 01:05:27.123 AM",
    "MDY",
    12,
    "99/99/99 99:99:99.999"
  ],

  //24
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18",
    "MDY",
    24,
    "99/99/99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18 13",
    "MDY",
    24,
    "99/99/99 99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18 13:05",
    "MDY",
    24,
    "99/99/99 99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18 13:05:27",
    "MDY",
    24,
    "99/99/99 99:99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "02/01/18 13:05:27.123",
    "MDY",
    24,
    "99/99/99 99:99:99.999"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18",
    "MDY",
    24,
    "99/99/99"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18 01",
    "MDY",
    24,
    "99/99/99 99"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18 01:05",
    "MDY",
    24,
    "99/99/99 99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18 01:05:27",
    "MDY",
    24,
    "99/99/99 99:99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 1, 5, 27, 123),
    "02/01/18 01:05:27.123",
    "MDY",
    24,
    "99/99/99 99:99:99.999"
  ],

  //format dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "01/02/18",
    "DMY",
    24,
    "99/99/99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "01/02/18 13:05",
    "DMY",
    24,
    "99/99/99 99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "01/02/18 13:05:27",
    "DMY",
    24,
    "99/99/99 99:99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "01/02/18 13:05:27.123",
    "DMY",
    24,
    "99/99/99 99:99:99.999"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "18/02/01",
    "YMD",
    24,
    "99/99/99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "18/02/01 13:05",
    "YMD",
    24,
    "99/99/99 99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "18/02/01 13:05:27",
    "YMD",
    24,
    "99/99/99 99:99:99"
  ],
  [
    new GxDatetime(2018, 1, 1, 13, 5, 27, 123),
    "18/02/01 13:05:27.123",
    "YMD",
    24,
    "99/99/99 99:99:99.999"
  ],

  [new GxDatetime(EMPTY_DATE_VALUE), "  /  /   00", "YMD", 24, "99/99/99 99"],
  [
    new GxDatetime(EMPTY_DATE_VALUE),
    "  /  /   00:00",
    "YMD",
    24,
    "99/99/99 99:99"
  ],
  [
    new GxDatetime(EMPTY_DATE_VALUE),
    "  /  /   00:00:00",
    "YMD",
    24,
    "99/99/99 99:99:99"
  ],
  [
    new GxDatetime(EMPTY_DATE_VALUE),
    "  /  /   00:00:00.000",
    "YMD",
    24,
    "99/99/99 99:99:99.999"
  ],
  [
    new GxDatetime(EMPTY_DATE_VALUE),
    "  /  /   12:00:00.000 AM",
    "YMD",
    12,
    "99/99/99 99:99:99.999"
  ]
];

export const testCases2: Array<[GxDatetime, string]> = [
  [new GxDatetime(2018, 1, 1, 13, 5, 27, 123), "02/01/18 01:05 PM"],
  [new GxDatetime(EMPTY_DATE_VALUE), "  /  /   12:00 AM"]
];

describe("toFormattedString operation", () => {
  for (const t of testCases1) {
    it(`toFormattedString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toFormattedString(t[0], t[2], t[3], t[4])).toEqual(t[1]);
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
