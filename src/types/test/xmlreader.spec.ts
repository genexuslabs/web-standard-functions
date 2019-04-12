import { XMLReader } from "../xmlreader";

describe("XMLReader data type", () => {
  it("should open a valid document", () => {
    const reader = new XMLReader();
    reader.openFromString("<test>Test</test>");
    const errCode = reader.errCode;
    const errDesc = reader.errDescription;
    expect(errCode).toBe(0);
    expect(errDesc).toBe("");
  });

  it("should fail opening an invalid document", () => {
    const reader = new XMLReader();
    reader.openFromString("<test>Test");
    const errCode = reader.errCode;
    const errDesc = reader.errDescription;
    expect(errCode).not.toBe(0);
    expect(errDesc).not.toBe("");
  });
});
