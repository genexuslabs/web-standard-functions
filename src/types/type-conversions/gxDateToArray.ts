import { GxDate } from "../gxdate";
import { GxDatetime } from "../gxdatetime";

export const GxDateToArray = (d: GxDate | GxDatetime): Array<number> => {
  return [
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds()
  ];
};
