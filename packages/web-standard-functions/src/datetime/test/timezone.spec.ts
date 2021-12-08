import { getTimezone } from "../getTimezone";
import { setTimezone } from "../setTimezone";
import { timezones } from "../timezone";

it("should return environment timezone", () => {
  let result = getTimezone();
  expect(result).not.toBeNull();
});

it("should return Berlin timezone", () => {
  setTimezone(timezones.Berlin);
  let result = getTimezone();
  expect(getTimezone()).toBe(timezones.Berlin);
});

it("should return UTC timezone", () => {
  setTimezone(timezones.UTC);
  let result = getTimezone();
  expect(getTimezone()).toBe(timezones.UTC);
});
