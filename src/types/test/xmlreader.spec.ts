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
});
