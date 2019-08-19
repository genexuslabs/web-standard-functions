import { confirm } from "../confirm";
import { publish, subscribe, cancelSubscription } from "../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../helpers";

describe("confirm test", () => {
  it("should return true when confirmed", async () => {
    let confSubscription = subscribe(`${prefix}_confirm`, (...data: any[]) => {
      expect(data.length).toBe(2);
      expect(data[1]).toEqual("Confirm?");
      cancelSubscription(confSubscription);

      let guid = data[0];
      publish(`${prefix}_confirm_${guid}_ok`);
    });

    let result = await confirm("Confirm?");
    expect(result).toBe(true);
  });
  it("should return false when canceled", async () => {
    let confSubscription = subscribe(`${prefix}_confirm`, (...data: any[]) => {
      expect(data.length).toBe(2);
      expect(data[1]).toEqual("Confirm?");
      cancelSubscription(confSubscription);

      let guid = data[0];
      publish(`${prefix}_confirm_${guid}_cancel`);
    });

    let result = await confirm("Confirm?");
    expect(result).toBe(false);
  });
});
