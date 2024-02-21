//  ///////////////////////////////
// Serialization implementation
export interface ISerializable {
  serialize();
  deserialize(x: any);
}

export const isSerializable = (obj: any) => {
  return typeof obj == "object" && "serialize" in obj && "deserialize" in obj;
};
