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

  it("should write using start and end element", () => {
    let writer = new XMLWriter();
    writer.openToString();
    expect(writer.errCode).toBe(0);
    expect(writer.errDescription).toBe("");
    writer.writeStartElement("case");
    writer.writeStartElement("test");
    writer.writeText("Test1");
    writer.writeEndElement();
    writer.writeStartElement("test");
    writer.writeText("Test2");
    writer.writeEndElement();
    writer.writeEndElement();
    expect(writer.resultingString).toBe(
      "<case><test>Test1</test><test>Test2</test></case>"
    );
    writer.close();
  });
});
