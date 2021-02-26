export const generateId = (): number => {
  return +(Math.random() * 10000).toString().substring(4, 9);
};
