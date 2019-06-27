import { publish } from "../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "./helpers";

export const msg = (str: string, mode: string = "") => {
  publish(`${prefix}.msg`, str, mode);
};
