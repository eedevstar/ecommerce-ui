export const camelize = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Za-z]|\b\w)/g, (word: string, index: number) => {
      return index !== 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};
