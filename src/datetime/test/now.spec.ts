import { now } from "../now";
import { difference } from "../difference";

describe("now operation", () => {
  it(`now for should be equal to "${new Date()}"`, () => {
    let nowValue = now();
    let nowRaw = new Date();

    expect(difference(nowValue, nowRaw) < 2).toBeTruthy();
  });
});
