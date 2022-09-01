interface GxImage {
  id: string;
  uri: string;
}

export const rotate = async (image: GxImage, angle): Promise<File> => {
  const img = new Image();

  return new Promise<any>((resolve, reject) => {
    img.onload = async function() {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      switch (angle) {
        case 90:
          canvas.height = img.width;
          canvas.width = img.height;
          break;

        case 180:
          canvas.height = img.height;
          canvas.width = img.width;
          break;

        case 270:
          canvas.height = img.width;
          canvas.width = img.height;
          break;

        default:
          break;
      }

      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate((angle * Math.PI) / 180);
      context.drawImage(
        img,
        -img.width / 2,
        -img.height / 2,
        img.width,
        img.height
      );

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
          name.split(".")[0] + "_rotate" + angle + "." + name.split(".")[1],
          { type: blob.type }
        );

        resolve(file);
      } catch (err) {
        console.log(err.name, err.message);
      }
    };

    img.src = image.uri;
  });
};
