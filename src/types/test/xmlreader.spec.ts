import { XMLReader } from "../xmlreader";

describe("XMLReader data type", () => {
  it("should open a valid document", () => {
    const reader = new XMLReader();
    reader.openFromString("<test>Test</test>");
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");
  });

  it("should fail opening an invalid document", () => {
    const reader = new XMLReader();
    reader.openFromString("<test>Test");
    expect(reader.errCode).not.toBe(0);
    expect(reader.errDescription).not.toBe("");
  });

  it("should read sequentially till the end", () => {
    const reader = new XMLReader();
    reader.openFromString(
      "<cases><test>Test1</test><test>Test2</test></cases>"
    );
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");

    let res = 0;

    res = reader.read();
    expect(res).not.toBe(0);
    expect(reader.name).toBe("cases");
    expect(reader.nodeType).toBe(1);

    res = reader.read();
    expect(res).not.toBe(0);
    expect(reader.name).toBe("test");
    expect(reader.value).toBe("Test1");
    expect(reader.nodeType).toBe(1);

    res = reader.read();
    expect(res).not.toBe(0);
    expect(reader.name).toBe("test");
    expect(reader.value).toBe("Test2");
    expect(reader.nodeType).toBe(1);

    res = reader.read();
    expect(res).not.toBe(0);
    expect(reader.name).toBe("cases");
    expect(reader.nodeType).toBe(2);

    res = reader.read();
    expect(res).toBe(0);
  });

  it("should read only the required node types till the end", () => {
    const reader = new XMLReader();
    reader.openFromString(
      "<cases><test>Test1</test><test>Test2</test></cases>"
    );
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");

    let res = 0;

    res = reader.readType(1);
    expect(res).not.toBe(0);
    expect(reader.name).toBe("cases");
    expect(reader.nodeType).toBe(1);

    res = reader.readType(1);
    expect(res).not.toBe(0);
    expect(reader.name).toBe("test");
    expect(reader.value).toBe("Test1");
    expect(reader.nodeType).toBe(1);

    res = reader.readType(1);
    expect(res).not.toBe(0);
    expect(reader.name).toBe("test");
    expect(reader.value).toBe("Test2");
    expect(reader.nodeType).toBe(1);

    res = reader.readType(1);
    expect(res).toBe(0);
  });

  it("should read only the required node types with the given name till the end", () => {
    const reader = new XMLReader();
    reader.openFromString(
      "<cases><test>Test1</test><test>Test2</test></cases>"
    );
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");

    let res = 0;

    res = reader.readType(1, "test");
    expect(res).not.toBe(0);
    expect(reader.name).toBe("test");
    expect(reader.value).toBe("Test1");
    expect(reader.nodeType).toBe(1);

    res = reader.readType(1, "test");
    expect(res).not.toBe(0);
    expect(reader.name).toBe("test");
    expect(reader.value).toBe("Test2");
    expect(reader.nodeType).toBe(1);

    res = reader.readType(1, "test");
    expect(res).toBe(0);
  });

  it("should get an attribute by name", () => {
    const reader = new XMLReader();
    reader.openFromString('<cases><test success="true">Test1</test></cases>');
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");
    let res = 0;
    res = reader.read(); // cases
    res = reader.read(); // test
    let attValue = reader.getAttributeByName("success");
    expect(attValue).toBe("true");
  });

  it("should get an attribute by index", () => {
    const reader = new XMLReader();
    reader.openFromString('<cases><test success="true">Test1</test></cases>');
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");
    let res = 0;
    res = reader.read(); // cases
    res = reader.read(); // test
    let attValue = reader.getAttributeByIndex(0);
    expect(attValue).toBe("true");
    attValue = reader.getAttributeByIndex(1);
    expect(attValue).toBe("");
  });

  it("should check in an attribute exists", () => {
    const reader = new XMLReader();
    reader.openFromString('<cases><test success="true">Test1</test></cases>');
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");
    let res = 0;
    res = reader.read(); // cases
    res = reader.read(); // test
    let value = reader.existsAttribute("success");
    expect(value).toBe(1);
    value = reader.existsAttribute("fail");
    expect(value).toBe(0);
  });

  it("should return the empty string if there are no attributes to get", () => {
    const reader = new XMLReader();
    reader.openFromString("<cases><test>Test1</test></cases>");
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");
    let res = 0;
    res = reader.read(); // cases
    res = reader.read(); // test
    let attValue = reader.getAttributeByName("success");
    expect(attValue).toBe("");
  });

  it("should no longer read after a close", () => {
    const reader = new XMLReader();
    reader.openFromString("<cases><test>Test1</test></cases>");
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");

    let res = reader.close();
    expect(res).toBe(0);

    res = reader.read();
    expect(res).toBe(0);
  });

  it("should skip the current node if requested to do so", () => {
    const reader = new XMLReader();
    reader.openFromString(
      "<cases><test><name>Test1</name><result>Ok</result></test><test><name>Test2</name><result>Fail</result></test></cases>"
    );
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");

    let res = reader.readType(1, "test");
    expect(res).not.toBe(0);

    res = reader.skip();
    expect(res).not.toBe(0);

    res = reader.readType(1, "name");
    expect(res).not.toBe(0);
    expect(reader.name).toBe("name");
    expect(reader.value).toBe("Test2");
  });

  it("should read raw XML", () => {
    const reader = new XMLReader();
    reader.openFromString(
      "<cases><test><name>Test1</name><result>Ok</result></test><test><name>Test2</name><result>Fail</result></test></cases>"
    );
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");

    let res = reader.readType(1, "test");
    expect(res).not.toBe(0);

    let xmlString = reader.readRawXML();
    expect(xmlString).toBe(
      "<test><name>Test1</name><result>Ok</result></test>"
    );

    xmlString = reader.readRawXML();
    expect(xmlString).toBe(
      "<test><name>Test2</name><result>Fail</result></test>"
    );
  });

  it("should count the number of attributes in the current node", () => {
    const reader = new XMLReader();
    reader.openFromString('<cases><test success="true">Test1</test></cases>');
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");

    let res = 0;
    res = reader.read(); // cases
    expect(res).not.toBe(0);
    expect(reader.attributeCount).toBe(0);

    res = reader.read(); // test
    expect(res).not.toBe(0);
    expect(reader.attributeCount).toBe(1);
  });

  it("should return the correct value for the EOF propertuy", () => {
    const reader = new XMLReader();
    reader.openFromString('<cases><test success="true">Test1</test></cases>');
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");
    expect(reader.eOF).toBe(0);

    reader.read(); // cases
    expect(reader.eOF).toBe(0);

    reader.read(); // test
    expect(reader.eOF).toBe(0);

    reader.read(); // end cases
    expect(reader.eOF).toBe(1);
  });

  it("should return the correct value for the IsSimple property", () => {
    const reader = new XMLReader();
    reader.openFromString('<cases><test success="true">Test1</test></cases>');
    expect(reader.errCode).toBe(0);
    expect(reader.errDescription).toBe("");

    reader.read(); // cases
    expect(reader.isSimple).toBe(0);

    reader.read(); // test
    expect(reader.isSimple).toBe(1);
  });
});
