interface GxImage {
  id: string;
  uri: string;
}

export const imageHeight = (image: GxImage): Number => {
  const img = new Image();
  img.src = image.uri;
  return img.height;
};
