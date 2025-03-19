import { GxCollectionData } from "../gxcollection";
import { classToObject } from "./classToObject";
import { fixTypeToObject } from "./fixTypeToObject";

export const sweepClassToObject = inst => {
  const obj = {};
  for (const pty in inst) {
    if (pty.startsWith("_gx")) continue; // Exclude '_gx' properties
    if (inst[pty] === null || inst[pty] === undefined) {
      obj[pty] = inst[pty];
    } else if (typeof inst[pty] === "object") {
      let ptyType = inst[pty].constructor;
      if (inst[pty] instanceof GxCollectionData) {
        const itemType = inst[pty].itemClass;
        ptyType = itemType;
      }
      obj[pty] = classToObject(inst[pty], ptyType);
    } else {
      obj[pty] = fixTypeToObject(inst[pty], obj[pty]);
    }
  }
  return obj;
};
