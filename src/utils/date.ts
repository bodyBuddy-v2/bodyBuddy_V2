const currentYear = new Date().getFullYear();
const years = new Array(currentYear - 1899).fill(null).map((_, idx) => currentYear - idx);
const months = new Array(12).fill(null).map((_, idx) => idx + 1);

export { currentYear, years, months };
