import { ResolverFunc, publishCall } from "./publishCall";

/**
 * Displays a message that allows capturing end user confirmation
 * @param {string} message The message to be displayed
 * @return boolean
 */
export const confirm = async (
  str: string,
  okButtonText: string = "ok",
  cancelButtonText: string = "cancel",
): Promise<boolean> => {
  let resolver = (
    option: string,
    _: boolean,
    resolve: ResolverFunc<boolean>,
  ) => {
    resolve(option === okButtonText);
  };
  return publishCall<boolean>(
    "confirm",
    [okButtonText, cancelButtonText],
    resolver,
    [str, okButtonText, cancelButtonText],
  );
};
