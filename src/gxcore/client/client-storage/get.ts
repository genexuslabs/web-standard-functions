import { prefixKey, storage } from "./common";

/**
 * Gets the stored value for the given key. If the key does not exist, it returns an empty string.
 * @param {string} key
 * @return {string}
 */
export function get(key: string): string {
  let pKey = prefixKey(key);
  let value = storage.getItem(pKey);
  return value || "";
}
