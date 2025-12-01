export const pad = (input = '', length = 0, chars = ' ') => {
  const str = String(input);
  if (length <= str.length) {
    return str;
  }
  const padLength = length - str.length;
  const left = Math.floor(padLength / 2);
  const right = padLength - left;
  const createPad = (size) => chars.repeat(Math.ceil(size / chars.length)).slice(0, size);
  return `${createPad(left)}${str}${createPad(right)}`;
};
