import {
  publish,
  subscribe,
  cancelSubscription
} from "../../../../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "../../../../misc/helpers";
import { GUID } from "../../../../types/guid";

/**
 * Chooses an image from the photo library
 * @return {string} image
 */
export const chooseImage = async (): Promise<string> => {
  return new Promise<string>(resolve => {
    let guid = GUID.newGuid().toString();
    let sOk = subscribe(`${prefix}.chooseImage.${guid}.ok`, (image: string) => {
      unsubscribe();
      resolve(image);
    });
    let sCancel = subscribe(`${prefix}.chooseImage.${guid}.cancel`, () => {
      unsubscribe();
      resolve(null);
    });
    let unsubscribe = () => {
      cancelSubscription(sOk);
      cancelSubscription(sCancel);
    };
    publish(`${prefix}.chooseImage`, guid);
  });
};
