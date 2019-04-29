import { XMLWriter } from "../xmlwriter";

describe("XMLReader data type", () => {
  it("should open a document to produce a string", () => {
    let writer = new XMLWriter();
    writer.openToString();
    expect(writer.errCode).toBe(0);
    expect(writer.errDescription).toBe("");
    writer.close();
  });

  it("should write an element", () => {
    let writer = new XMLWriter();
    writer.openToString();
    expect(writer.errCode).toBe(0);
    expect(writer.errDescription).toBe("");
    writer.writeElement("test", "Test1");
    expect(writer.resultingString).toBe("<test>Test1</test>");
    writer.close();
  });
});
