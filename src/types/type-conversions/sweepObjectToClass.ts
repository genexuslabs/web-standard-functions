import { GxCollectionData } from "../gxcollection";
import { fixTypeToClass } from "./fixTypeToClass";
import { getClassPropertyDefault } from "./getClassPropertyDefault";
import { objectToClass } from "./objectToClass";

export const sweepObjectToClass = <T>(obj, inst: T) => {
  for (const pty of Object.keys(obj)) {
    if (obj[pty] === null || obj[pty] === undefined) {
      inst[pty] = obj[pty];
    } else {
      const instPtyValue = getClassPropertyDefault(inst, pty);
      if (typeof instPtyValue === "object") {
        let ptyType = instPtyValue.constructor;
        if (instPtyValue instanceof GxCollectionData) {
          ptyType = instPtyValue.itemClass;
        }
        inst[pty] = objectToClass(obj[pty], ptyType);
      } else {
        inst[pty] = fixTypeToClass(obj[pty], inst[pty]);
      }
    }
  }
  return inst;
};
