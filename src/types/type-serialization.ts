import { Std_TypeConversions } from "./std-type-conversion";

//  ///////////////////////////////
// Serialization implementation
export interface ISerializable {
  serialize();
  deserialize(x: any);
  _gxSerializable(): boolean;
}

export const isSerializable = (obj: any) => {
  return typeof obj == "object" && "_gxSerializable" in obj;
};
