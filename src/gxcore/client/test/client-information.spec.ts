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
});
