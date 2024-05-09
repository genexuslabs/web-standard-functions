import { formatNumber } from "./formatNumber";
import { pictureToFormat } from "./pictureToFormat";

export const formatNumericField = (value: number, picture: string) => {
  const format = pictureToFormat(picture);
  return formatNumber(
    value.toString(),
    picture,
    format.decimals,
    format.length,
    ".",
    ",",
    format.sign,
    false
  );
};
