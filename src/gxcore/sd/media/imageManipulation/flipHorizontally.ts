interface GxImage {
  id: string;
  uri: string;
}

export const flipHorizontally = async (image: GxImage): Promise<File> => {
  const img = new Image();
  img.src = image.uri;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.height = img.height;
  canvas.width = img.width;

  context.scale(-1, 1);
  context.drawImage(img, canvas.width * -1, 0);

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
      name.split(".")[0] + "_flipHorizontally" + "." + name.split(".")[1],
      { type: blob.type }
    );
    return file;
  } catch (err) {
    console.log(err.name, err.message);
  }
};
