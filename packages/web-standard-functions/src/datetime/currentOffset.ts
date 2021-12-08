/**
 * It returns the current difference –in minutes– between CTZ and UTC.
 * @return number
 */

import { DateTime } from "luxon";
import { getTimezone } from "./getTimezone";

export const currentOffset = (): number => {
  return DateTime.local().setZone(getTimezone()).offset;
};
