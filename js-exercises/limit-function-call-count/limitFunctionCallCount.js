const limitFunctionCallCount = (callback, allowedCalls) => {
  let callsMade = 0;
  return (...args) => {
    if (callsMade < allowedCalls) {
      callsMade += 1;
      return callback(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
