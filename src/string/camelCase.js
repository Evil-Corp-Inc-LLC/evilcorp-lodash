import { toWords } from './words.js';

export const camelCase = (input = '') => {
  const words = toWords(input.toLowerCase());
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};
