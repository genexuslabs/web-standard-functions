export const getText = async (): Promise<string> => {
  try {
    const text = await navigator.clipboard.readText();
    return text;
  } catch (error) {
    throw new Error(error.message);
  }
};
