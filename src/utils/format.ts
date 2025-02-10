export const formatNumberWithComma = (num: string) => {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const removeCommas = (str: string) => {
  return str.replace(/,/g, "");
};
