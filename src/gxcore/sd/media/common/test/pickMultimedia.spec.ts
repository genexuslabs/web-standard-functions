import { pickMultimedia } from "../pickMultimedia";
import {
  publish,
  subscribe,
  cancelSubscription
} from "../../../../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../../../../../misc/helpers";

describe("pickMultimedia test", () => {
  it("should return the image path when confirmed", async () => {
    let subscription = subscribe(
      `${prefix}.pickMultimedia`,
      (...data: any[]) => {
        expect(data.length).toBe(1);
        cancelSubscription(subscription);

        let guid = data[0];
        publish(`${prefix}.pickMultimedia.${guid}.ok`, "/path/to/image");
      }
    );

    let result = await pickMultimedia();
    expect(result).toBe("/path/to/image");
  });
  it("should return null when canceled", async () => {
    let subscription = subscribe(
      `${prefix}.pickMultimedia`,
      (...data: any[]) => {
        expect(data.length).toBe(1);
        cancelSubscription(subscription);

        let guid = data[0];
        publish(`${prefix}.pickMultimedia.${guid}.cancel`);
      }
    );

    let result = await pickMultimedia();
    expect(result).toBeNull();
  });
});
