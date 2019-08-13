import { ResolverFunc, publishCall } from "./publishCall";

/**
 * Displays a message that allows capturing end user confirmation
 * @param {string} message The message to be displayed
 * @return boolean
 */
export const confirm = async (str: string): Promise<boolean> => {
  let resolver = (
    option: string,
    _: boolean,
    resolve: ResolverFunc<boolean>
  ) => {
    resolve(option === "ok");
  };
  return publishCall<boolean>("confirm", ["ok", "cancel"], resolver, str);
};
