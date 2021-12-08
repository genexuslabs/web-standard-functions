/**
 * Returns the current date.
 * @return Date
 */

export const today = (): Date => {
  let todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  return todayDate;
};
