import { GxCollectionData } from "../gxcollection";

export const CreateInstance = <T>(
  type: { new (): T; name: string },
  isCollection = false
) => {
  if (isCollection) {
    return new GxCollectionData<T>().setType(type);
  } else {
    return type ? new type() : {};
  }
};
