export const fixTypeToClass = (sourceValue, targetValue) => {
  if (typeof sourceValue === "string" && typeof targetValue === "number") {
    // Numbers should need conversion from string to number type
    return +sourceValue;
  }
  return sourceValue;
};
