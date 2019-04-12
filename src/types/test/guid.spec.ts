import { GUID } from "../guid";

const emptyGuidStr = "00000000-0000-0000-0000-000000000000";
const validGuidStr = "5c2f6593-f67d-46a6-b68b-db6795244394";

const fromStringTestCases: Array<[string, string]> = [
  [emptyGuidStr, emptyGuidStr],
  [emptyGuidStr.replace(/-/g, ""), emptyGuidStr],
  [validGuidStr, validGuidStr],
  [validGuidStr.replace(/-/g, ""), validGuidStr],
  [validGuidStr.toUpperCase(), validGuidStr],
  ["xyxyxyxy-f67d-46a6-b68b-db6795244394", emptyGuidStr],
  ["123abc", emptyGuidStr],
  ["xyz", emptyGuidStr]
];

describe("create new GUID", () => {
  it(`should have the correct format`, () => {
    const guid = GUID.newGuid();
    const guidStr = guid.toString();
    expect(guidStr.length).toBe(36);
    expect(guidStr).toMatch(
      /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}/
    );
    expect(guidStr).not.toBe(emptyGuidStr);
  });
});

describe("create GUID from string", () => {
  for (const t of fromStringTestCases) {
    it(`should return "${t[1]}" when creating the GUID from "${t[0]}"`, () => {
      const guid = GUID.fromString(t[0]);
      const guidStr = guid.toString();
      expect(guidStr).toBe(t[1]);
    });
  }
});

describe("create the empty GUID", () => {
  it("should return the empty GUID", () => {
    const guid = GUID.empty();
    const guidStr = guid.toString();
    expect(guidStr).toBe(emptyGuidStr);
  });
});

describe("check if a GUID is empty", () => {
  it("should return true for the empty GUID", () => {
    const guid = GUID.empty();
    expect(guid.isEmpty()).toBe(true);
  });
  it("should return true for a GUID created from the empty GUID string", () => {
    const guid = GUID.fromString(emptyGuidStr);
    expect(guid.isEmpty()).toBe(true);
  });
  it("should return true for a GUID created from an invalid GUID string", () => {
    const guid = GUID.fromString("xyz");
    console.log(guid.toString());
    expect(guid.isEmpty()).toBe(true);
  });
  it("should return false for a new GUID", () => {
    const guid = GUID.newGuid();
    expect(guid.isEmpty()).toBe(false);
  });
  it("should return true for a GUID created from the a valid GUID string", () => {
    const guid = GUID.fromString(validGuidStr);
    expect(guid.isEmpty()).toBe(false);
  });
});

describe("load a GUID value from string", () => {
  for (const t of fromStringTestCases) {
    it(`should be "${t[1]}" if loaded from "${t[0]}"`, () => {
      const guid = GUID.newGuid();
      const guidStrBefore = guid.toString();
      guid.fromString(t[0]);
      const guidStrAfter = guid.toString();
      expect(guidStrAfter).toBe(t[1]);
      expect(guidStrAfter).not.toBe(guidStrBefore);
    });
  }
});
