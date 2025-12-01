const PATH_REGEX = /[^.[\]]+|\[(?:([^"'\]]+)|(["'])(.*?)(?:\2))\]/g;

export const toPath = (path) => {
  if (Array.isArray(path)) {
    return path.map(String);
  }
  if (typeof path === 'number') {
    return [String(path)];
  }
  if (typeof path !== 'string') {
    return [];
  }

  const out = [];
  path.replace(PATH_REGEX, (match, numeric, quote, quoted) => {
    if (quote) {
      out.push(quoted);
    } else if (numeric !== undefined) {
      out.push(numeric);
    } else {
      out.push(match);
    }
    return '';
  });

  return out;
};
