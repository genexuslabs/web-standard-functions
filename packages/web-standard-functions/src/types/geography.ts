import { notImplemented } from "../misc/helpers";

export class Geography {
  private static GEOGRAPHY_REGEX_TEST_COORDS = /^(-?\d*(?:\.\d+)?)(?:\s*,\s*| +)(-?\d*(?:\.\d+)?)$/i; // latitude,longitude
  private static GEOGRAPHY_REGEX_TEST_POINT = /POINT\s*\(\s*(-?\d*(?:\.\d+)?) +(-?\d*(?:\.\d+)?)\s*\)/i; // POINT(longitude latitude)
  private static GEOGRAPHY_REGEX_TEST_LINE = /LINESTRING *\( *(?:-?\d*(?:\.\d+)? +-?\d*(?:\.\d+)?(?: *, *| *\)$))+/i; // LINESTRING(longitude latitude,longitude latitude)
  private static GEOGRAPHY_REGEX_TEST_POLYGON = /POLYGON *\( *(?:\( *(?:-?\d+(?:\.\d+)? +-?\d*(?:\.\d+)?(?: *, *))+-?\d+(?:\.\d+)? +-?\d*(?:\.\d+)? *\)(?: *, *| *\)$))+/i; // POLYGON((longitude latitude,longitude latitude),(longitude latitude,longitude latitude))
  private static GEOGRAPHY_REGEX_PARSE_COORDS = /(-?\d*(?:\.\d+)?)(?:\s*,\s*| +)(-?\d*(?:\.\d+)?)/i;
  private static GEOGRAPHY_REGEX_PARSE_POINT = /POINT\s*\(\s*(-?\d*(?:\.\d+)?) +(-?\d*(?:\.\d+)?)\s*\)/i;
  private static GEOGRAPHY_REGEX_PARSE_POINT_COORDS = /-?\d+(?:\.\d+)?/g;
  private static GEOGRAPHY_REGEX_PARSE_LINE = /(-?\d+(?:\.\d+)?) +(-?\d*(?:\.\d+)?)/g;
  private static GEOGRAPHY_REGEX_PARSE_POLYGON = /\(((?:-?\d+(?:\.\d+)?) +(?:-?\d*(?:\.\d+)?)(?: *, *|\)))+/g;
  private point: GeographyPoint;
  private line: GeographyLineString;
  private polygon: GeographyPolygon;
  featureType: GeographyFeatureType;

  constructor(str = "") {
    this.parse(str);
  }

  /**
   * Return longitude (horizontal) coordinate for the point
   * @returns number
   */
  get longitude(): number {
    return this.point?.longitude || 0;
  }

  /**
   * Return latitude (vertical) coordinate for the point
   * @returns number
   */
  get latitude(): number {
    return this.point?.latitude || 0;
  }

  /**
   * Return Spatial Reference System Identifier (SRID), identifies the reference system for the represented Geographic object
   * @returns number
   */
  get srid(): number {
    notImplemented("Geography.srid");
    return 0;
  }

  /**
   * Return true if the Geography is emtpy
   * @returns boolean
   */
  isEmpty(): boolean {
    return this.featureType === "";
  }

  /**
   * Return true if the Geography is null
   * @returns boolean
   */
  isNull(): boolean {
    return this.featureType === "";
  }

  /**
   * Set Geography to empty value
   */
  setEmpty() {
    this.point = undefined;
    this.line = undefined;
    this.polygon = undefined;
    this.featureType = "";
  }

  /**
   * Serializes the object to string (alias for toWkt)
   * @returns string
   */
  toString(): string {
    return this.toWkt();
  }

  /**
   * Serializes the object to WKT representation
   * @returns string
   */
  toWkt(): string {
    switch (this.featureType) {
      case "POINT":
        return `POINT (${this.longitude} ${this.latitude})`;
      case "LINE":
        return `LINESTRING (${this.line
          .map(point => `${point.longitude} ${point.latitude}`)
          .join(", ")})`;
      case "POLYGON":
        return `POLYGON (${this.polygon
          .map(
            ring =>
              `(${ring
                .map(point => `${point.longitude} ${point.latitude}`)
                .join(", ")})`
          )
          .join(", ")})`;
      default:
        return "";
    }
  }

  /**
   * Serializes the object to GeoJSON representation
   * @returns string
   */
  toGeoJson(): string {
    let geoJson;

    switch (this.featureType) {
      case "POINT":
        geoJson = {
          type: "Point",
          coordinates: [this.longitude, this.latitude]
        };
        break;
      case "LINE":
        geoJson = {
          type: "LineString",
          coordinates: this.line.map(point => [point.longitude, point.latitude])
        };
        break;
      case "POLYGON":
        geoJson = {
          type: "Polygon",
          coordinates: this.polygon.map(ring =>
            ring.map(point => [point.longitude, point.latitude])
          )
        };
        break;
      default:
        geoJson = {
          type: "GeometryCollection",
          coordinates: []
        };
        break;
    }

    return JSON.stringify(geoJson);
  }

  /**
   * Return new instance of this Geography object
   * @returns Geography
   */
  toGeoPoint(): Geography {
    return this.clone();
  }

  /**
   * Return new instance of this Geography object
   * @returns Geography
   */
  toGeoLine(): Geography {
    return this.clone();
  }

  /**
   * Return new instance of this Geography object
   * @returns Geography
   */
  toGeoPolygon(): Geography {
    return this.clone();
  }

  /**
   * Load Geography object represented by the WKT text
   */
  fromString(str: string) {
    this.parse(str);
  }

  /**
   * Return the distance (in meters) between the current point and the parameter
   * @returns number
   */
  distance(geo: Geography): number {
    return Geography.distance(this, geo);
  }

  /**
   * Return new instance of this object
   * @returns Geography
   */
  clone(): Geography {
    return new Geography(this.toString());
  }

  /**
   * Returns true if the Geographic object parameter includes or intersects the current object
   * @returns boolean
   */
  intersect(geo: Geography): boolean {
    return Geography.intersect(this, geo);
  }

  /**
   * Create Geography object represented by the WKT text
   * @returns Geography
   */
  static fromString(str: string): Geography {
    return new Geography(str);
  }

  /**
   * Return the distance (in meters) between points
   * @returns number
   */
  static distance(from: Geography, to: Geography): number {
    // Haversine formula:
    // a = sin(delta_lat/2) + cos(lat1).cos(lat2).sin(delta_long/2)
    // c = 2.atan2(sqrt(a), sqrt(1-a))
    // d = R.c

    if (from.isEmpty() || to.isEmpty()) return 0;

    const earthRadius = 6371;

    const deltaLatitude = (to.latitude - from.latitude) * (Math.PI / 180);
    const deltaLongitude = (to.longitude - from.longitude) * (Math.PI / 180);

    const a1 = Math.pow(Math.sin(deltaLatitude / 2), 2);
    const a2 = Math.pow(Math.sin(deltaLongitude / 2), 2);
    const a3 =
      Math.cos(from.latitude * (Math.PI / 180)) *
      Math.cos(to.latitude * (Math.PI / 180));
    const a = a1 + a2 * a3;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round(earthRadius * c * 1000); // distance in meters
  }

  /**
   * Returns true if the two Geographic objects instersect.
   * @returns boolean
   */
  static intersect(a: Geography, b: Geography): boolean {
    notImplemented("Geography.intersect()");
    return false;
  }

  private parse(str: string) {
    const value = str.trim();

    this.setEmpty();

    if (Geography.GEOGRAPHY_REGEX_TEST_COORDS.test(value)) {
      this.parseCoords(value);
    } else if (Geography.GEOGRAPHY_REGEX_TEST_POINT.test(value)) {
      this.parsePoint(value);
    } else if (Geography.GEOGRAPHY_REGEX_TEST_LINE.test(value)) {
      this.parseLineString(value);
    } else if (Geography.GEOGRAPHY_REGEX_TEST_POLYGON.test(value)) {
      this.parsePolygon(value);
    }
  }

  private parseCoords(value: string) {
    const result = value.match(Geography.GEOGRAPHY_REGEX_PARSE_COORDS);

    this.featureType = "POINT";
    this.point = {
      longitude: parseFloat(result[2]),
      latitude: parseFloat(result[1])
    };
  }

  private parsePoint(value: string) {
    const result = value.match(Geography.GEOGRAPHY_REGEX_PARSE_POINT);

    this.featureType = "POINT";
    this.point = {
      longitude: parseFloat(result[1]),
      latitude: parseFloat(result[2])
    };
  }

  private parseLineString(value: string) {
    const points = value.match(Geography.GEOGRAPHY_REGEX_PARSE_LINE);

    this.featureType = "LINE";
    this.line = points.map(point => {
      const coords = point.match(Geography.GEOGRAPHY_REGEX_PARSE_POINT_COORDS);

      return {
        longitude: parseFloat(coords[0]),
        latitude: parseFloat(coords[1])
      };
    });
  }

  private parsePolygon(value: string) {
    const rings = value.match(Geography.GEOGRAPHY_REGEX_PARSE_POLYGON);

    this.featureType = "POLYGON";
    this.polygon = rings.map(ring => {
      const points = ring.match(Geography.GEOGRAPHY_REGEX_PARSE_LINE);

      return points.map(point => {
        const coords = point.match(
          Geography.GEOGRAPHY_REGEX_PARSE_POINT_COORDS
        );

        return {
          longitude: parseFloat(coords[0]),
          latitude: parseFloat(coords[1])
        };
      });
    });
  }
}

export type GeographyFeatureType = "" | "POINT" | "LINE" | "POLYGON";

type GeographyPoint = {
  longitude: number;
  latitude: number;
};
type GeographyLineString = GeographyPoint[];
type GeographyPolygon = GeographyLineString[];
