/**
 * Returns the current date.
 * @return GxDate
 */

import { GxDate } from "../types/gxdate";

export const today = (): GxDate => {
  let todayDate = new GxDate();
  todayDate.setHours(0, 0, 0, 0);
  return todayDate;
};
