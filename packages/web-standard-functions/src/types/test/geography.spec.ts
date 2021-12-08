import { Geography } from "../geography";

const GEO_EMPTY = {
  geo: "",
  longitude: 0,
  latitude: 0,
  featureType: "",
  isEmpty: true,
  isNull: true
};
const GEO_POINT_COORD_ZERO = {
  geo: "0,0",
  longitude: 0,
  latitude: 0,
  featureType: "POINT",
  isEmpty: false,
  isNull: false
};
const GEO_POINT_WKT_ZERO = {
  geo: "POINT(0 0)",
  longitude: 0,
  latitude: 0,
  featureType: "POINT",
  isEmpty: false,
  isNull: false
};
const GEO_POINT_COORD_VALUE = {
  geo: "-56.163740158081055,-34.92478600243492",
  longitude: -34.92478600243492,
  latitude: -56.163740158081055,
  featureType: "POINT",
  isEmpty: false,
  isNull: false
};
const GEO_POINT_WKT_VALUE = {
  geo: "POINT(-34.92478600243492 -56.163740158081055)",
  longitude: -34.92478600243492,
  latitude: -56.163740158081055,
  featureType: "POINT",
  isEmpty: false,
  isNull: false
};
const GEO_LINE_WKT_VALUE = {
  geo:
    "LINESTRING(-56.16090774536133 -34.928797162523516,-56.1650276184082 -34.89494244739731)",
  longitude: 0,
  latitude: 0,
  featureType: "LINE",
  isEmpty: false,
  isNull: false
};
const GEO_POLYGON_SIMPLE_WKT_VALUE = {
  geo:
    "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
  longitude: 0,
  latitude: 0,
  featureType: "POLYGON",
  isEmpty: false,
  isNull: false
};
const GEO_POLYGON_HOLE_WKT_VALUE = {
  geo:
    "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929),(-56.1536336 -34.8943177,-56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177))",
  longitude: 0,
  latitude: 0,
  featureType: "POLYGON",
  isEmpty: false,
  isNull: false
};

describe("Test fromString() method checking longitude, latitude and featureType properties", () => {
  const testCases: Array<{
    geo: string;
    longitude: number;
    latitude: number;
    featureType: string;
  }> = [
    GEO_EMPTY,
    GEO_POINT_COORD_ZERO,
    GEO_POINT_COORD_VALUE,
    GEO_POINT_WKT_ZERO,
    GEO_POINT_WKT_VALUE,
    GEO_LINE_WKT_VALUE,
    GEO_POLYGON_SIMPLE_WKT_VALUE,
    GEO_POLYGON_HOLE_WKT_VALUE,
    {
      geo: "  -56.163740158081055   ,   -34.92478600243492  ",
      longitude: -34.92478600243492,
      latitude: -56.163740158081055,
      featureType: "POINT"
    },
    {
      geo: "POINT  (    -34.92478600243492    -56.163740158081055   )",
      longitude: -34.92478600243492,
      latitude: -56.163740158081055,
      featureType: "POINT"
    },
    {
      geo:
        "LINESTRING  ( -56.16090774536133   -34.928797162523516  , -56.1650276184082 -34.89494244739731  )",
      longitude: 0,
      latitude: 0,
      featureType: "LINE"
    },
    {
      geo:
        "POLYGON  (  (-56.1510479 -34.8936929  ,  -56.1508977 -34.8962536,   -56.1475503 -34.8959984   ,-56.1510479 -34.8936929))",
      longitude: 0,
      latitude: 0,
      featureType: "POLYGON"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929)   ,   (-56.1536336 -34.8943177  ,  -56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177))",
      longitude: 0,
      latitude: 0,
      featureType: "POLYGON"
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo} Longitude:${testCase.longitude} Latitude:${testCase.latitude} FeatureType:${testCase.featureType}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const longitude = geo.longitude;
      const latitude = geo.latitude;
      const featureType = geo.featureType;

      expect(longitude).toBe(testCase.longitude);
      expect(latitude).toBe(testCase.latitude);
      expect(featureType).toBe(testCase.featureType);
    });
  }
});

describe("Test isEmpty(), isNull() methods", () => {
  const testCases: Array<{ geo: string; isEmpty: boolean; isNull: boolean }> = [
    GEO_EMPTY,
    GEO_POINT_COORD_ZERO,
    GEO_POINT_COORD_VALUE,
    GEO_POINT_WKT_ZERO,
    GEO_POINT_WKT_VALUE,
    GEO_LINE_WKT_VALUE,
    GEO_POLYGON_SIMPLE_WKT_VALUE
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo} IsEmpty:${testCase.isEmpty} IsNull:${testCase.isNull}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const isEmpty = geo.isEmpty();
      const isNull = geo.isNull();

      expect(isEmpty).toBe(testCase.isEmpty);
      expect(isNull).toBe(testCase.isNull);
    });
  }
});

describe("Test setEmpty() method", () => {
  const testCases: Array<{ geo: string }> = [
    GEO_POINT_COORD_VALUE,
    GEO_POINT_WKT_ZERO,
    GEO_POINT_WKT_VALUE,
    GEO_LINE_WKT_VALUE,
    GEO_POLYGON_SIMPLE_WKT_VALUE
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo}`, () => {
      const geo = Geography.fromString(testCase.geo);

      expect(geo.isEmpty()).toBe(false);

      geo.setEmpty();
      expect(geo.featureType).toBe("");
      expect(geo.longitude).toBe(0);
      expect(geo.latitude).toBe(0);
    });
  }
});

describe("Test toString(), toWkt() methods", () => {
  const testCases: Array<{ geo: string; wkt: string }> = [
    { geo: "", wkt: "" },
    { geo: "0,0", wkt: "POINT (0 0)" },
    {
      geo: "-56.163740158081055, -34.92478600243492",
      wkt: "POINT (-34.92478600243492 -56.163740158081055)"
    },
    { geo: "POINT(0 0)", wkt: "POINT (0 0)" },
    {
      geo: "POINT(-34.92478600243492 -56.163740158081055)",
      wkt: "POINT (-34.92478600243492 -56.163740158081055)"
    },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516,-56.1650276184082 -34.89494244739731)",
      wkt:
        "LINESTRING (-56.16090774536133 -34.928797162523516, -56.1650276184082 -34.89494244739731)"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
      wkt:
        "POLYGON ((-56.1510479 -34.8936929, -56.1508977 -34.8962536, -56.1475503 -34.8959984, -56.1510479 -34.8936929))"
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929), (-56.1536336 -34.8943177,-56.1529899 -34.8952328,-56.1519814 -34.8947929,-56.1527002 -34.8938513,-56.1536336 -34.8943177))",
      wkt:
        "POLYGON ((-56.1510479 -34.8936929, -56.1508977 -34.8962536, -56.1475503 -34.8959984, -56.1510479 -34.8936929), (-56.1536336 -34.8943177, -56.1529899 -34.8952328, -56.1519814 -34.8947929, -56.1527002 -34.8938513, -56.1536336 -34.8943177))"
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const toString = geo.toString();
      const toWkt = geo.toWkt();

      expect(toString).toBe(testCase.wkt);
      expect(toWkt).toBe(testCase.wkt);
    });
  }
});

describe("Test toGeoJson() method", () => {
  const testCases: Array<{ geo: string; geoJson: string }> = [
    { geo: "", geoJson: '{"type":"GeometryCollection","coordinates":[]}' },
    { geo: "0,0", geoJson: '{"type":"Point","coordinates":[0,0]}' },
    {
      geo: "-56.163740158081055, -34.92478600243492",
      geoJson:
        '{"type":"Point","coordinates":[-34.92478600243492,-56.163740158081055]}'
    },
    { geo: "POINT(0 0)", geoJson: '{"type":"Point","coordinates":[0,0]}' },
    {
      geo: "POINT(-34.92478600243492 -56.163740158081055)",
      geoJson:
        '{"type":"Point","coordinates":[-34.92478600243492,-56.163740158081055]}'
    },
    {
      geo:
        "LINESTRING(-56.16090774536133 -34.928797162523516,-56.1650276184082 -34.89494244739731)",
      geoJson:
        '{"type":"LineString","coordinates":[[-56.16090774536133,-34.928797162523516],[-56.1650276184082,-34.89494244739731]]}'
    },
    {
      geo:
        "POLYGON((-56.1510479 -34.8936929,-56.1508977 -34.8962536,-56.1475503 -34.8959984,-56.1510479 -34.8936929))",
      geoJson:
        '{"type":"Polygon","coordinates":[[[-56.1510479,-34.8936929],[-56.1508977,-34.8962536],[-56.1475503,-34.8959984],[-56.1510479,-34.8936929]]]}'
    },
    {
      geo:
        "POLYGON((35 10, 45 45, 15 40, 10 20, 35 10),(20 30, 35 35, 30 20, 20 30))",
      geoJson:
        '{"type":"Polygon","coordinates":[[[35,10],[45,45],[15,40],[10,20],[35,10]],[[20,30],[35,35],[30,20],[20,30]]]}'
    }
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const geoJson = geo.toGeoJson();

      expect(geoJson).toBe(testCase.geoJson);
    });
  }
});

describe("Test toGeoPoint() toGeoLine() toGeoPolygon() methods", () => {
  const testCases: Array<{ geo: string }> = [
    GEO_EMPTY,
    GEO_POINT_COORD_VALUE,
    GEO_POINT_WKT_VALUE,
    GEO_LINE_WKT_VALUE,
    GEO_POLYGON_SIMPLE_WKT_VALUE
  ];

  for (const testCase of testCases) {
    it(`Value:${testCase.geo}`, () => {
      const geo = Geography.fromString(testCase.geo);
      const toGeoPoint = geo.toGeoPoint();
      const toGeoLine = geo.toGeoLine();
      const toGeoPolygon = geo.toGeoPolygon();

      expect(geo.featureType).toBe(toGeoPoint.featureType);
      expect(geo.featureType).toBe(toGeoLine.featureType);
      expect(geo.featureType).toBe(toGeoPolygon.featureType);
    });
  }
});

describe("Test distance() method", () => {
  const testCases: Array<{ from: string; to: string; distance: number }> = [
    { from: "", to: "-56.1701774597168,-34.91676309400329", distance: 0 },
    { from: "-56.163740158081055,-34.92478600243492", to: "", distance: 0 },
    {
      from: "-56.163740158081055,-34.92478600243492",
      to: "-56.1701774597168,-34.91676309400329",
      distance: 871
    },
    {
      from: "POINT(-34.92478600243492 -56.163740158081055)",
      to: "POINT(-34.91676309400329 -56.1701774597168)",
      distance: 871
    }
  ];

  for (const testCase of testCases) {
    it(`From:${testCase.from} To:${testCase.to} equal ${testCase.distance}`, () => {
      const from = Geography.fromString(testCase.from);
      const to = Geography.fromString(testCase.to);
      const distance = Geography.distance(from, to);

      expect(distance).toBe(testCase.distance);
    });
  }
});
