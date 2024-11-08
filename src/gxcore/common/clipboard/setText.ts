export const setText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    throw new Error(error.message);
  }
};
