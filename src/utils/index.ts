export const capitalizeString = (value: string) => {
  return value.replace(/\b(\w)/g, (s) => s.toUpperCase());
};
