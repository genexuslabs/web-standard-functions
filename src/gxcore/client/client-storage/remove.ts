import { prefixKey, storage } from "./common";

/**
 * Deletes the stored value for the given key. If the key does not exist, the method has no effect.
 * @param {string} key
 */
export function remove(key: any) {
  let pKey = prefixKey(key);
  storage.removeItem(pKey);
}
