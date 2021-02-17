const sumEvenArgs = (...args) => {
  const sum = args.filter(item => (item % 2 === 0))
    .reduce((accumulater, arrayElement) => accumulater + arrayElement, 0);
  return sum;
};
export { sumEvenArgs };
