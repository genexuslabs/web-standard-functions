import { Gauge, GaugeRange } from "../gauge";

const GAUGE_UNDEFINED = {
  json: "",
  type: "line",
  min: 0,
  max: 0,
  value: 0,
  ranges: []
};
const GAUGE_EMPTY = {
  json:
    '{"Type":"","Title":"","Height":0,"Width":0,"MaxValue":0,"MinValue":0,"Value":0,"Thickness":0,"ShowMinMax":false,"ShowValue":false}',
  type: "line",
  min: 0,
  max: 0,
  value: 0,
  ranges: []
};
const GAUGE_LINE = {
  json:
    '{"Type":"Line","Title":"","Height":0,"Width":0,"MaxValue":100,"MinValue":0,"Value":75,"Thickness":0,"ShowMinMax":false,"ShowValue":true}',
  type: "line",
  min: 0,
  max: 100,
  value: 75,
  ranges: []
};
const GAUGE_CIRCLE = {
  json:
    '{"Type":"Circular","Title":"","Height":0,"Width":0,"MaxValue":100,"MinValue":0,"Value":75,"Thickness":0,"ShowMinMax":false,"ShowValue":true}',
  type: "circle",
  min: 0,
  max: 100,
  value: 75,
  ranges: []
};
const GAUGE_RANGE = {
  json:
    '{"Type":"Line","Title":"","Height":0,"Width":0,"MaxValue":100,"MinValue":0,"Value":75,"Thickness":0,"ShowMinMax":false,"ShowValue":true,"Ranges":[{"Color":"#00FF00","Name":"Low","Length":25},{"Color":"#FF8000","Name":"Medium","Length":50},{"Color":"#FF0000","Name":"High","Length":25}]}',
  type: "line",
  min: 0,
  max: 100,
  value: 75,
  ranges: [
    { name: "Low", amount: 25, color: "#00FF00" },
    { name: "Medium", amount: 50, color: "#FF8000" },
    { name: "High", amount: 25, color: "#FF0000" }
  ]
};

describe("Test new() from Json of GaugeSDT", () => {
  const testCases: Array<{
    json: string;
    type: string;
    min: number;
    max: number;
    value: number;
    ranges: GaugeRange[];
  }> = [GAUGE_UNDEFINED, GAUGE_EMPTY, GAUGE_LINE, GAUGE_CIRCLE, GAUGE_RANGE];

  for (const testCase of testCases) {
    it(`Json:${testCase.json}`, () => {
      const gauge = new Gauge(testCase.json);

      expect(gauge.type).toBe(testCase.type);
      expect(gauge.minValue).toBe(testCase.min);
      expect(gauge.maxValue).toBe(testCase.max);
      expect(gauge.value).toBe(testCase.value);
      expect(gauge.ranges.length).toBe(testCase.ranges.length);

      for (let i = 0; i < gauge.ranges.length; i++) {
        expect(gauge.ranges[i]).toStrictEqual(testCase.ranges[i]);
      }
    });
  }
});
