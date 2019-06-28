import { msg } from "../msg";
import { subscribe, cancelSubscription } from "../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../helpers";

describe("msg test", () => {
  it("should work", async () => {
    let msgSubscription = subscribe(`${prefix}.msg`, (...data: any[]) => {
      expect(data.length).toBe(1);
      expect(data[0]).toEqual("Hello world!");
      cancelSubscription(msgSubscription);
    });

    msg("Hello world!");
  });
});
