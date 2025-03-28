import { ISerializable } from "./type-serialization";
import { ConfigurationState } from "../config/configurationState";
import { datetimeToISOString } from "./type-conversions/datetimeToISOString";
import { isEmpty } from "./type-conversions/isEmpty";
import { localToUTC } from "./type-conversions/localToUTC";
import { DTAToDate } from "./type-conversions/dTAToDate";
import { ISODateToDTA } from "./type-conversions/iSODateToDTA";
import { isValidDate } from "./type-conversions/isValidDate";

export class GxDatetime extends Date implements ISerializable {
  serialize() {
    let utc = ConfigurationState.getInstance().getConvertTimeFromUTC();
    return GxDatetime.serializeUTC(this, utc);
  }

  deserialize(isoDatetime: string) {
    let utc = ConfigurationState.getInstance().getConvertTimeFromUTC();
    return GxDatetime.deserializeUTC(isoDatetime, utc);
  }

  static serializeUTC(datetime: Date, utcToLocal = false) {
    if (!isEmpty(datetime)) {
      if (utcToLocal) {
        return datetimeToISOString(localToUTC(datetime));
      } else {
        return datetimeToISOString(datetime);
      }
    }
    return "0000-00-00T00:00:00";
  }

  static deserializeUTC(isoDatetime: string, utcToLocal = false) {
    let d: Date;
    try {
      const da = ISODateToDTA(isoDatetime);
      d = DTAToDate(da, utcToLocal);
    } catch {
      throw new Error('Invalid date: "' + isoDatetime + '"');
    }
    if (!isValidDate(d)) {
      d = new Date(0, 0, 0);
    }
    return new GxDatetime(d);
  }

  static createFromDate(d: Date): GxDatetime {
    return new GxDatetime(d);
  }

  fromISOString(isoDate: string): GxDatetime {
    return GxDatetime.deserializeUTC(isoDate, false);
  }

  static compare(GxDatetime1: GxDatetime, GxDatetime2: GxDatetime): boolean {
    let res: boolean;
    if (GxDatetime1.getTime() === GxDatetime2.getTime()) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
}
