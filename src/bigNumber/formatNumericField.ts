import { formatNumber } from "../numeric/formatNumber";
import { pictureToFormat } from "../numeric/pictureToFormat";
import { GxBigNumber } from "../types/gxbignumber";

export const formatNumericFieldBigNumber = (
  value: GxBigNumber,
  picture: string
) => {
  const format = pictureToFormat(picture);
  return formatNumber(
    GxBigNumber.convertBigNumberToString(value),
    picture,
    format.decimals,
    format.length,
    ".",
    ",",
    format.sign,
    false
  );
};
