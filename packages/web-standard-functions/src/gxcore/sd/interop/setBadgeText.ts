import { publishCall, ResolverFunc } from "../../../misc/publishCall";

/**
 * Sets a badge text on a tab index when using a Menu object with Control Type = Tabs
 * @param {string} text
 * @param {number} tabIndex
 * @return any
 */
export const setBadgeText = async (
  text: string,
  tabIndex: number
): Promise<void> => {
  let resolver = (opt: string, value: void, resolve: ResolverFunc<void>) =>
    resolve();
  return publishCall<void>(
    "iOSSetBadgeTextToTabIndex",
    ["ok"],
    resolver,
    text,
    tabIndex
  );
};
