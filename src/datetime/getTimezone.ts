/**
 * Returns the current timezone
 * @return timezone
 */

import { timezones } from "./timezone";
import { ConfigurationState } from "../config/configurationState";
import { storageKey, fromString } from "../datetime/timezone";

export const getTimezone = (): string => {
  return ConfigurationState.getInstance().getDynStoredValue(storageKey);
};
