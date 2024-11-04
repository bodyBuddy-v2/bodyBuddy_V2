export const formatNumber = (num: string) => {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const parseNumber = (str: string) => {
  return str.replace(/,/g, "");
};
