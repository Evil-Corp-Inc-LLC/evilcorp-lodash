export const inRange = (number, start = 0, end) => {
  let rangeStart = start;
  let rangeEnd = end;
  if (rangeEnd === undefined) {
    rangeEnd = rangeStart;
    rangeStart = 0;
  }
  if (rangeStart > rangeEnd) {
    [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
  }
  return number >= rangeStart && number < rangeEnd;
};
