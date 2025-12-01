export const capitalize = (input = '') => {
  if (!input) {
    return '';
  }
  const str = String(input);
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
