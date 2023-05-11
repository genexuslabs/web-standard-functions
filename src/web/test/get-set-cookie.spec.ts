import { getCookie } from "../getCookie";
import { setCookie } from "../setCookie";
import { addDays } from "../../date/addDays";
import { GxDate } from "../../types/gxdate";

describe("set and get cookie", () => {
  it("should return the correct value for a newly set cookie", () => {
    const name = "myCookie";
    const value = "cookieValue";
    setCookie(name, value);
    const readValue = getCookie(name);
    expect(readValue).toEqual(value);
  });
  it("should return null for an unexistent cookie", () => {
    const readValue = getCookie("nonExistentCookie");
    expect(readValue).toBeNull();
  });
  it("should return null for an expired cookie", () => {
    const name = "expiredCookie";
    const value = "cookieValue";
    const expDate: GxDate = addDays(new GxDate(), -1);

    setCookie(name, value, undefined, expDate);
    const readValue = getCookie(name);
    expect(readValue).toBeNull();
  });
});
