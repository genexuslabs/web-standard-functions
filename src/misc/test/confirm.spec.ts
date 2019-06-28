import { confirm } from "../confirm";
import { publish, subscribe, cancelSubscription } from "../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../helpers";

describe("confirm test", () => {
  it("should return true when confirmed", async () => {
    setTimeout(() => {
      publish(`${prefix}.confirm.ok`);
    }, 1000);

    let confSubscription = subscribe(`${prefix}.confirm`, (...data: any[]) => {
      expect(data.length).toBe(1);
      expect(data[0]).toEqual("Confirm?");
      cancelSubscription(confSubscription);
    });

    let result = await confirm("Confirm?");
    expect(result).toBe(true);
  });
  it("should return false when canceled", async () => {
    setTimeout(() => {
      publish(`${prefix}.confirm.cancel`);
    }, 1000);

    let confSubscription = subscribe(`${prefix}.confirm`, (...data: any[]) => {
      expect(data.length).toBe(1);
      expect(data[0]).toEqual("Confirm?");
      cancelSubscription(confSubscription);
    });

    let result = await confirm("Confirm?");
    expect(result).toBe(false);
  });
});
