const currentYear = new Date().getFullYear();
const years = Array.from(new Array(currentYear - 1899), (val, index) => currentYear - index);
const months = Array.from(Array(12), (val, index) => 1 + index);

export { currentYear, years, months };
