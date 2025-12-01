export const range = (start, end, step = 1) => {
  let rangeStart = start;
  let rangeEnd = end;
  let rangeStep = step;

  if (rangeEnd == null) {
    rangeEnd = rangeStart;
    rangeStart = 0;
  }

  if (rangeStep === 0) {
    throw new Error('range step cannot be 0');
  }

  if (rangeStart < rangeEnd && rangeStep < 0) {
    rangeStep = Math.abs(rangeStep);
  }

  if (rangeStart > rangeEnd && rangeStep > 0) {
    rangeStep = -rangeStep;
  }

  const result = [];
  if (rangeStep > 0) {
    for (let value = rangeStart; value < rangeEnd; value += rangeStep) {
      result.push(value);
    }
  } else {
    for (let value = rangeStart; value > rangeEnd; value += rangeStep) {
      result.push(value);
    }
  }

  return result;
};
