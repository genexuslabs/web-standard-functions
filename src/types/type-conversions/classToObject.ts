import { ISerializable, isSerializable } from "../type-serialization";
import { sweepClassToObject } from "./sweepClassToObject";

export const classToObject = <T>(obj, type: { new (): T } = null) => {
  if (isSerializable(obj)) {
    return (obj as ISerializable).serialize();
  } else if (typeof obj === "object") {
    return sweepClassToObject(obj);
  } else {
    return obj;
  }
};
