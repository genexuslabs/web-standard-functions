import {
  GeneXusCommonGeolocation as geolocation,
  GeneXusCommonGeolocationInfoData
} from "../geolocation";

describe("Geolocation external object", () => {
  it("should return correct logitude", () => {
    let loc = new GeneXusCommonGeolocationInfoData();
    loc.Location = "-34.87826, -56.09243";
    let long = geolocation.getLongitude(loc);
    expect(long).toBe(-56.09243);
  });
  it("should return correct latitude", () => {
    let loc = new GeneXusCommonGeolocationInfoData();
    loc.Location = "-34.87826, -56.09243";
    let long = geolocation.getLatitude(loc);
    expect(long).toBe(-34.87826);
  });
  it("should return correct distance", () => {
    let loc1 = new GeneXusCommonGeolocationInfoData();
    loc1.Location = "-34.87826, -56.09243";
    let loc2 = new GeneXusCommonGeolocationInfoData();
    loc2.Location = "-34.8739042, -54.9722085";
    let d = geolocation.getDistance(loc1, loc2);
    expect(d).toBe(102191);
  });
});
