import { GxGuid } from "../gxguid";

export const GxGuidFromISOString = (s: string): GxGuid => {
  if (s) {
    return new GxGuid(s);
  }
  return new GxGuid();
};
