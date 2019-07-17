import { publish } from "../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "./helpers";
import { GUID } from "../types/guid";

/**
 * Displays a message to the user
 * @param {string} message The message to be displayed
 * @param {string} mode Optional parameter. There are two modes to display the message: `nowait` and `status`
 */
export const msg = (str: string, mode: string = "") => {
  let guid = GUID.newGuid().toString();
  publish(`${prefix}.msg`, guid, str, mode);
};
