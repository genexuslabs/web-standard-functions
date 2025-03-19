import { ISerializable, isSerializable } from "../type-serialization";
import { CreateInstance } from "./createInstance";
import { sweepObjectToClass } from "./sweepObjectToClass";

export const objectToClass = <T>(obj, type: { new (): T }): any => {
  const inst = CreateInstance(type, Array.isArray(obj));

  if (isSerializable(inst)) {
    return (inst as ISerializable).deserialize(obj);
  } else if (obj && typeof obj === "object") {
    return sweepObjectToClass(obj, inst);
  } else {
    return obj;
  }
};
