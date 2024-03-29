export const chooseImage = async (): Promise<File> => {
  return new Promise<any>((resolve, reject) => {
    const newInput = document.createElement("input");
    newInput.type = "file";
    newInput.accept = "image/*";
    newInput.multiple = false;

    newInput.onchange = async eventInfo => {
      resolve(newInput.files[0]);
    };

    newInput.click();
  });
};
