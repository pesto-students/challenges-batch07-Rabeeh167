function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (...argsNext) {
      return curried.apply(this, args.concat(argsNext));
    };
  };
}

export { curry };
