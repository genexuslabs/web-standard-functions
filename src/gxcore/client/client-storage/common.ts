export const keyPrefix: string = "gx.client.clientstorage";

export function prefixKey(key: string) {
  return `${keyPrefix}.${key}`;
}
