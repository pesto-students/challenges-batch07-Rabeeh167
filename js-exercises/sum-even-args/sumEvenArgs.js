const sumEvenArgs = (...args) => {
  let sum = 0;

  // return 0 if no arguments passed
  if (!args.length) {
    return 0;
  }

  // iterate over the passed array of arguments
  for (const item of args) {
    if (item % 2 === 0) {
      sum += item;
    }
  }
  return sum;
};

export { sumEvenArgs };
