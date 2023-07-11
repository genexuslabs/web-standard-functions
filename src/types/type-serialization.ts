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

// Decorators to control serialization of SDTs
export const serialization = (sender: string) => {
  return function(target: any, propertyKey: string) {
    if (!target._gxSerializationInfo) {
      target._gxSerializationInfo = {};
    }
    target._gxSerializationInfo[propertyKey] = sender;
  };
};

// Functions to obtain serialization info
export const findPropertyInstanceName = (inst, prop) => {
  if (inst["_gxSerializationInfo"]) {
    const serializatinInfo = inst["_gxSerializationInfo"];
    for (const p in serializatinInfo) {
      if (serializatinInfo[p] === prop) {
        return p;
      }
    }
  }
  return prop;
};

export const findPropertyObjectName = (inst, prop) => {
  if (inst["_gxSerializationInfo"]) {
    const serializatinInfo = inst["_gxSerializationInfo"];
    return serializatinInfo[prop] ?? prop;
  }
  return prop;
};
