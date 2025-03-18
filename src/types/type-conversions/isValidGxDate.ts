import { GxDate } from "../gxdate";
import { GxDatetime } from "../gxdatetime";

export const isValidGxDate = (d: GxDate | GxDatetime) => {
  return (
    (d instanceof GxDate || d instanceof GxDatetime) &&
    !isNaN(d.getTime()) &&
    d.getFullYear() >= 0
  );
};
