import { chooseImage } from "../chooseImage";
import {
  publish,
  subscribe,
  cancelSubscription
} from "../../../../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../../../../../misc/helpers";

describe("chooseImage test", () => {
  it("should return the image path when confirmed", async () => {
    let subscription = subscribe(`${prefix}.chooseImage`, (...data: any[]) => {
      expect(data.length).toBe(1);
      cancelSubscription(subscription);

      let guid = data[0];
      publish(`${prefix}.chooseImage.${guid}.ok`, "/path/to/image");
    });

    let result = await chooseImage();
    expect(result).toBe("/path/to/image");
  });
  it("should return null when canceled", async () => {
    let subscription = subscribe(`${prefix}.chooseImage`, (...data: any[]) => {
      expect(data.length).toBe(1);
      cancelSubscription(subscription);

      let guid = data[0];
      publish(`${prefix}.chooseImage.${guid}.cancel`);
    });

    let result = await chooseImage();
    expect(result).toBeNull();
  });
});
