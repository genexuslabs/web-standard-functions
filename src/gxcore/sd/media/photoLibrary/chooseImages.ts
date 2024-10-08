export const chooseImages = async (): Promise<Array<File>> => {
  return new Promise<any>((resolve, reject) => {
    const newInput = document.createElement("input");
    newInput.type = "file";
    newInput.accept = "image/*";
    newInput.multiple = true;
    newInput.hidden = true;
    document.body.appendChild(newInput);

    newInput.onchange = async eventInfo => {
      document.body.removeChild(newInput);
      resolve(newInput.files);
    };

    requestAnimationFrame(() => {
      newInput.click();
    });
  });
};
