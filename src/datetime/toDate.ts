/**
 * To return a Date data type corresponding to a given DateTime data type.
 * @param {GxDatetime} dateFrom
 * @return GxDate
 */

import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

export const toDate = (dateFrom: GxDatetime): GxDate => {
  return new GxDate(
    new Date(dateFrom.getFullYear(), dateFrom.getMonth(), dateFrom.getDate())
  );
};
