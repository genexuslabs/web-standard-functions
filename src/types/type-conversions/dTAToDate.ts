import { arrayToDate } from "./arrayToDate";
import { INVALID_DATE, ONLY_DATE, ONLY_TIME } from "./constants";
import { UTCToLocal } from "./uTCToLocal";

export const DTAToDate = (dta: Array<number>, utcToLocal: boolean): Date => {
  if (dta[0] === INVALID_DATE) {
    return new Date(0, 0, 0, 0, 0, 0);
  } else if (dta[0] === ONLY_TIME) {
    return new Date(0, 0, 0, dta[4], dta[5], dta[6], dta[7]);
  } else {
    const a = dta.slice(1);
    if (utcToLocal && dta[0] !== ONLY_DATE) {
      return UTCToLocal(arrayToDate(a));
    } else {
      return arrayToDate(a);
    }
  }
};
