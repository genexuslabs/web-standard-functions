export const takePhoto = async (): Promise<File> => {
  return new Promise<any>((resolve, reject) => {
    const newInput = document.createElement("input");
    newInput.type = "file";
    newInput.accept = "image/*";
    newInput.capture = "camera";
    newInput.multiple = false;
    newInput.hidden = true;
    document.body.appendChild(newInput);

    newInput.onchange = async eventInfo => {
      document.body.removeChild(newInput);
      resolve(newInput.files[0]);
    };

    requestAnimationFrame(() => {
      newInput.click();
    });
  });
};
