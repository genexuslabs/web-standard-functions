export const chooseImages = async (): Promise<Array<File>> => {
  return new Promise<any>((resolve, reject) => {
    const newInput = document.createElement("input");
    newInput.type = "file";
    newInput.accept = "image/*";
    newInput.multiple = true;

    newInput.onchange = async eventInfo => {
      resolve(newInput.files);
    };

    newInput.click();
  });
};
