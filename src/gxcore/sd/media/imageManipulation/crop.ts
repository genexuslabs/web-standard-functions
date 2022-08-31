interface GxImage {
  id: string;
  uri: string;
}

export const crop = async (
  image: GxImage,
  left,
  top,
  width,
  height
): Promise<File> => {
  const img = new Image();
  img.src = image.uri;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.height = height;
  canvas.width = width;

  context.drawImage(img, left, top, width, height, 0, 0, width, height);

  const src = context.canvas.toDataURL();

  try {
    const response = await fetch(src);
    const blob = await response.blob();

    const name = image.uri.substring(
      image.uri.lastIndexOf("/") + 1,
      image.uri.length
    );

    const file = new File(
      [blob],
      name.split(".")[0] + "_crop" + "." + name.split(".")[1],
      { type: blob.type }
    );
    return file;
  } catch (err) {
    console.log(err.name, err.message);
  }
};
