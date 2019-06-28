import { confirm } from "../confirm";
import { publish } from "../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../helpers";

describe("confirm test", () => {
  it("should return true when confirmed", async () => {
    setTimeout(() => {
      publish(`${prefix}.confirm.ok`);
    }, 1000);

    let result = await confirm("Confirm?");
    expect(result).toBe(true);
  });
  it("should return false when canceled", async () => {
    setTimeout(() => {
      publish(`${prefix}.confirm.cancel`);
    }, 1000);

    let result = await confirm("Confrim?");
    expect(result).toBe(false);
  });
});
