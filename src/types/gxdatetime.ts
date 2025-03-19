import { ISerializable } from "./type-serialization";
import { ConfigurationState } from "../config/configurationState";
import { SerializeDatetimeToISOString } from "./type-conversions/serializeDatetimeToISOString";
import { DeserializeISOStringToDatetime } from "./type-conversions/deserializeISOStringToDatetime";

export class GxDatetime extends Date implements ISerializable {
  serialize() {
    let utc = ConfigurationState.getInstance().getConvertTimeFromUTC();
    return SerializeDatetimeToISOString(this, utc);
  }

  deserialize(isoDate: string) {
    let utc = ConfigurationState.getInstance().getConvertTimeFromUTC();
    const dt = DeserializeISOStringToDatetime(isoDate, utc);
    return new GxDatetime(dt);
  }

  static createFromDate(d: Date): GxDatetime {
    return new GxDatetime(d);
  }

  fromISOString(isoDate: string): GxDatetime {
    const dt = DeserializeISOStringToDatetime(isoDate, false);
    return new GxDatetime(dt);
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
