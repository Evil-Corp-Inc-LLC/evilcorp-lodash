import { toWords } from './words.js';

export const kebabCase = (input = '') => toWords(input.toLowerCase()).join('-');
