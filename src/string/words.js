const WORD_REGEX = /[A-Za-z0-9]+/g;

export const toWords = (input = '') => {
  if (typeof input !== 'string') {
    input = String(input ?? '');
  }
  return input.match(WORD_REGEX) ?? [];
};
