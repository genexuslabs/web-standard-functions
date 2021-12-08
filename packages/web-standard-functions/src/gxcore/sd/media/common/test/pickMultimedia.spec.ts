import { pickMultimedia } from "../pickMultimedia";
import {
  publish,
  subscribe,
  cancelSubscription
} from "../../../../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../../../../../misc/helpers";

describe("pickMultimedia test", () => {
  it("should return the image path when confirmed", async () => {
    let subscription = subscribe(`${prefix}_chooseImage`, (...data: any[]) => {
      expect(data.length).toBe(1);
      cancelSubscription(subscription);

      let guid = data[0];
      publish(`${prefix}_chooseImage_${guid}_ok`, "/path/to/image");
    });

    let result = await pickMultimedia("chooseImage");
    expect(result).toBe("/path/to/image");
  });
  it("should return null when canceled", async () => {
    let subscription = subscribe(`${prefix}_chooseImage`, (...data: any[]) => {
      expect(data.length).toBe(1);
      cancelSubscription(subscription);

      let guid = data[0];
      publish(`${prefix}_chooseImage_${guid}_cancel`);
    });

    let result = await pickMultimedia("chooseImage");
    expect(result).toBeNull();
  });
});
