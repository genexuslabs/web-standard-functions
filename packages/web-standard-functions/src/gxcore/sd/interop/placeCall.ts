import { openInBrowser } from "./openInBrowser";

/**
 * @param {string} phone
 */
export const placeCall = (phone: string) => {
  openInBrowser("tel:" + phone);
};
