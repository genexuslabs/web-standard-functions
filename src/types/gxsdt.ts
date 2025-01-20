import { Std_TypeConversions } from "./std-type-conversion";
import { ISerializable } from "./type-serialization";

export class GxSdtData implements ISerializable {
  toJson(): string {
    return JSON.stringify(this.serialize());
  }

  fromJson(json: string) {
    this.initialize();
    Object.assign(this, this.deserialize(JSON.parse(json)));
  }

  initialize() {
    //
  }

  serialize() {
    return Std_TypeConversions.sweepClassToObject(this);
  }

  deserialize(obj) {
    if (obj) {
      return Std_TypeConversions.sweepObjectToClass(obj, this);
    }
  }
}
