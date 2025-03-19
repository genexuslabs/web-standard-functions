import { sweepClassToObject } from "./type-conversions/sweepClassToObject";
import { sweepObjectToClass } from "./type-conversions/sweepObjectToClass";
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
    return sweepClassToObject(this);
  }

  deserialize(obj) {
    if (obj) {
      return sweepObjectToClass(obj, this);
    }
  }
}
