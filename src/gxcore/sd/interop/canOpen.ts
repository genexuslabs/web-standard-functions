import { ConfigurationState } from "../../../config/configurationState";
import { GeneXusSDNetwork } from "../network";

const knownProtocols = ["http:", "https:", "mailto:", "tel:"];

/**
 * Checks if an URL can be opened
 * @param {string} urlStr
 */
export const canOpen = (urlStr: string): boolean => {
  let baseURL = GeneXusSDNetwork.applicationServerURL();

  try {
    let url = baseURL ? new URL(urlStr, baseURL) : new URL(urlStr);
    return knownProtocols.includes(url.protocol);
  } catch (e) {
    // could not construct URL object
    return false;
  }
};
