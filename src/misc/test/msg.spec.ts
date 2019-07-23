import { msg } from "../msg";
import { subscribe, cancelSubscription, publish } from "../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../helpers";

describe("msg test", () => {
  it("should work", async () => {
    let msgSubscription = subscribe(`${prefix}.msg`, (...data: any[]) => {
      expect(data.length).toBe(3);
      expect(data[1]).toEqual("Hello world!");
      expect(data[2]).toEqual("");
      cancelSubscription(msgSubscription);

      let guid = data[0];
      publish(`${prefix}.msg.${guid}.ok`);
    });

    await msg("Hello world!");
  });
});
