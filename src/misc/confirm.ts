import { publish, subscribe, cancelSubscription } from "../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "./helpers";
import { unSubscribe } from "../web/globalEvents";

/**
 * Displays a message that allows capturing end user confirmation
 * @param {string} message The message to be displayed
 * @return boolean
 */
export const confirm = async (str: string): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    let sOk = subscribe(`${prefix}.confirm.ok`, () => {
      unsubscribe();
      resolve(true);
    });
    let sCancel = subscribe(`${prefix}.confirm.cancel`, () => {
      unsubscribe();
      resolve(false);
    });
    let unsubscribe = () => {
      cancelSubscription(sOk);
      cancelSubscription(sCancel);
    };
    publish(`${prefix}.confirm`, str);
  });
};
