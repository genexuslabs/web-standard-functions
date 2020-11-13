export const keyPrefix: string = "gx.client.clientstorage";

export { storage } from "../../../common/storage";

export function prefixKey(key: string) {
  return `${keyPrefix}.${key}`;
}
