import { DeserializeISOStringToDate } from "./type-conversions/deserializeISOStringToDate";
import { SerializeDateToISOString } from "./type-conversions/serializeDateToISOString";
import { ISerializable } from "./type-serialization";

export class GxDate extends Date implements ISerializable {
  serialize() {
    return SerializeDateToISOString(this);
  }

  deserialize(isoDate: string) {
    const dt = DeserializeISOStringToDate(isoDate);
    return new GxDate(dt);
  }

  fromISOString(isoDate: string): GxDate {
    const dt = DeserializeISOStringToDate(isoDate);
    return new GxDate(dt);
  }

  static createFromDate(d: Date): GxDate {
    return new GxDate(d);
  }

  static compare(GxDate1: GxDate, GxDate2: GxDate): boolean {
    let res: boolean;
    if (GxDate1.getTime() === GxDate2.getTime()) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
}
