import { publish, subscribe, cancelSubscription } from "../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "./helpers";
import { GUID } from "../types/guid";

/**
 * Displays a message that allows capturing end user confirmation
 * @param {string} message The message to be displayed
 * @return boolean
 */
export const confirm = async (str: string): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    let guid = GUID.newGuid().toString();
    let sOk = subscribe(`${prefix}.confirm.${guid}.ok`, () => {
      unsubscribe();
      resolve(true);
    });
    let sCancel = subscribe(`${prefix}.confirm.${guid}.cancel`, () => {
      unsubscribe();
      resolve(false);
    });
    let unsubscribe = () => {
      cancelSubscription(sOk);
      cancelSubscription(sCancel);
    };
    publish(`${prefix}.confirm`, guid, str);
  });
};
