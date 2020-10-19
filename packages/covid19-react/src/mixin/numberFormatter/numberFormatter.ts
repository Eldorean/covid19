export const formatNumber = (number: number) => number.toLocaleString(
  undefined,
  { minimumFractionDigits: 0 }
);