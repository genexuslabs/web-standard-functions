/**
 * Sets the current timezone
 * @Parm timezone
 */

import { timezones, storageKey } from "./timezone";
import { ConfigurationState } from "../config/configurationState";

export const setTimezone = (timezone: timezones) => {
  ConfigurationState.getInstance().setDynStoredValue(storageKey, timezone);
};
