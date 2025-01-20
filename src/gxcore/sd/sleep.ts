export const sleep = async (seconds): Promise<number> => {
  await new Promise(resolve => setTimeout(resolve, seconds * 1000));
  return 0;
};
