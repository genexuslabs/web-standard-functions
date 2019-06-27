import { publish, subscribe } from "../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "./helpers";

/**
 * Displays a message that allows capturing end user confirmation
 * @param {string} message The message to be displayed
 * @return boolean
 */
export const confirm = async (str: string): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    subscribe(`${prefix}.confirm.ok`, () => {
      resolve(true);
    });
    subscribe(`${prefix}.confirm.cancel`, () => {
      resolve(false);
    });
    publish(`${prefix}.confirm`, str);
  });
};
