import { Std_TypeConversions } from "./std-type-conversion";
import { ISerializable } from "./type-serialization";

export class GxDate extends Date implements ISerializable {
  serialize() {
    return Std_TypeConversions.SerializeDateToISOString(this);
  }

  deserialize(isoDate: string) {
    const dt = Std_TypeConversions.DeserializeISOStringToDate(isoDate);
    return new GxDate(dt);
  }

  fromISOString(isoDate: string): GxDate {
    const dt = Std_TypeConversions.DeserializeISOStringToDate(isoDate);
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
