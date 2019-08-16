import { ResolverFunc, publishCall } from "./publishCall";

/**
 * Displays a message to the user
 * @param {string} message The message to be displayed
 * @param {string} mode Optional parameter. There are two modes to display the message: `nowait` and `status`
 */
export const msg = (str: string, mode: string = ""): Promise<void> => {
  let resolver = (option: string, _: void, resolve: ResolverFunc<void>) => {
    resolve();
  };
  return publishCall<void>("msg", ["ok"], resolver, str, mode);
};
