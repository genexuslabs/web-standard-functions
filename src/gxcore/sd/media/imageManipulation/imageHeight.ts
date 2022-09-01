interface GxImage {
  id: string;
  uri: string;
}

export const imageHeight = (image: GxImage): Promise<Number> => {
  const img = new Image();

  return new Promise<any>((resolve, reject) => {
    img.onload = function() {
      resolve(img.height);
    };

    img.src = image.uri;
  });
};
