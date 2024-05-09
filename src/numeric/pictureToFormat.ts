export const pictureToFormat = (picture: string) => {
  const sign =
    picture.indexOf("+") === 0 ||
    picture.indexOf("-") === 0 ||
    picture.indexOf("(") === 0 ||
    picture.indexOf("DB") === 0 ||
    picture.indexOf("CR") === 0;

  let dec = 0;
  let len = 0;
  let picture_split = picture.split(".");
  if (picture_split.length === 1) {
    dec = 0;
    len = picture.length;
  } else {
    if (picture_split.length === 2) {
      dec = picture_split[1].length;
      len = picture_split[0].length + dec + 1;
    }
  }

  return {
    sign: sign,
    length: len,
    decimals: dec
  };
};
