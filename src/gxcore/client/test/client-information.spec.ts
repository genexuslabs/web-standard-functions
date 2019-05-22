import { GeneXusClientClientInformation as clientInfo } from "../client-information";

describe("ClientInformation external object", () => {
  it("should return an Id", () => {
    let id = clientInfo.id;
    expect(id.length).not.toBe(0);
  });
  it("should always return the same Id", () => {
    let id1 = clientInfo.id;
    let id2 = clientInfo.id;
    expect(id1).toEqual(id2);
  });
  it("should return the OS name", () => {
    let osName = clientInfo.oSName;
    expect(osName.length).not.toBe(0);
  });
  it("should return the OS version", () => {
    let osVersion = clientInfo.oSVersion;
    expect(osVersion.length).not.toBe(0);
  });
  it("should return the user's language", () => {
    let lang = clientInfo.language;
    expect(lang.length).not.toBe(0);
  });
  it("should return a non-empty network id", () => {
    let networkId = clientInfo.networkID;
    expect(networkId.length).not.toBe(0);
  });
  it("should return a non-empty platform name", () => {
    let platformName = clientInfo.platformName;
    expect(platformName.length).not.toBe(0);
  });
});
