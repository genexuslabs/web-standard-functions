import { GxBigNumber } from "../types/gxbignumber";
import { formatNumber } from "./formatNumber";

export const formatNumber_helper = (
  value: number | GxBigNumber,
  picture: string
) => {
  let str_value =
    value instanceof GxBigNumber
      ? GxBigNumber.convertBigNumberToString(value)
      : value.toString();
  let picture_split = picture.split(".");
  let dec = 0;
  let len = 0;
  let sign =
    picture.indexOf("+") === 0 ||
    picture.indexOf("-") === 0 ||
    picture.indexOf("(") === 0 ||
    picture.indexOf("DB") === 0 ||
    picture.indexOf("CR") === 0;

  if (picture_split.length === 1) {
    dec = 0;
    len = picture.length;
  } else {
    if (picture_split.length === 2) {
      dec = picture_split[1].length;
      len = picture_split[0].length + dec + 1;
    }
  }
  return formatNumber(str_value, picture, dec, len, ".", ",", sign, false);
};
