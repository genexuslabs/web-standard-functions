import { GxGuid } from "../gxguid";

export const GxGuidToISOString = (g: GxGuid): string => {
  if (g) {
    return g.toString();
  }
  return "";
};
