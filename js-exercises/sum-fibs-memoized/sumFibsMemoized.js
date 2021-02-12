function sumFibs(num) {
  let start = 0;
  let next = 1;
  let current;
  let sumOdd = 0;
  for (let i = 0; i <= num; i += 1) {
    current = start + next;
    start = next;
    next = current;
    if (current % 2 !== 0 && current <= num) {
      sumOdd = current + sumOdd;
    }
  }
  return sumOdd + 1;
}

function cacheFunction(passedFunc) {
  const cache = {};
  return function fibCacheFunction(num) {
    if (num in cache) return cache[num];
    cache[num] = passedFunc(num);
    return cache[num];
  };
}
export { sumFibs, cacheFunction };
