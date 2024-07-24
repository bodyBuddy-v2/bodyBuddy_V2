export const exerciseList = ["필라테스", "PT", "테니스"];
export const fieldList = ["체력 증진", "다이어트", "체형 교정"];

export const currentYear = new Date().getFullYear();
export const years = Array.from(new Array(currentYear - 1899), (val, index) => 1900 + index);
export const months = Array.from(Array(12), (val, index) => 1 + index);

export const formatNumber = (num: string) => {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const parseNumber = (str: string) => {
  return str.replace(/,/g, "");
};
