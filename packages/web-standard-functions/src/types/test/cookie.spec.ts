import { Cookie } from "../cookie";
import { addDays } from "../../date/addDays";

describe("Cookie data type", () => {
  let c: Cookie;

  beforeAll(() => {
    c = new Cookie();
  });

  it("should have a 'name' property", () => {
    const name = "myCookie";
    c.name = name;
    const result = c.name;
    expect(result).toBe(name);
  });

  it("should have a 'value' property", () => {
    const value = "someValue";
    c.value = value;
    const result = c.value;
    expect(result).toBe(value);
  });

  it("should have a 'path' property", () => {
    const path = "/path/for/cookie";
    c.path = path;
    const result = c.path;
    expect(result).toBe(path);
  });

  it("should have a 'expirationDate' property", () => {
    const expDate = addDays(new Date(), 1);
    c.expirationDate = expDate;
    const result = c.expirationDate;
    expect(result).toBe(expDate);
  });

  it("should have a 'domain' property", () => {
    const domain = "my.domain.com";
    c.domain = domain;
    const result = c.domain;
    expect(result).toBe(domain);
  });

  it("should have a 'secure' property", () => {
    const secure = true;
    c.secure = secure;
    const result = c.secure;
    expect(result).toBe(secure);
  });

  it("should have a 'httpOnly' property", () => {
    const httpOnly = true;
    c.httpOnly = httpOnly;
    const result = c.httpOnly;
    expect(result).toBe(httpOnly);
  });
});
