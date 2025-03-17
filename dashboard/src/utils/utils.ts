export const formatToPercent = (val: number) => {
  return `${val.toFixed(2)}%`;
};

export const formatToNumber = (val: number) => {
  return new Intl.NumberFormat("fr-Fr").format(val);
};
