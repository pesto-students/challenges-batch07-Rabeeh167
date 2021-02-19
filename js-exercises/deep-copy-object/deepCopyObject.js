const deepCopyObject = (objToCopy) => {
  if (objToCopy == null || typeof objToCopy !== 'object') {
    return objToCopy;
  }
  const clonedObj = {};
  for (const key in objToCopy) {
    if (typeof objToCopy[key] === 'object' && objToCopy[key] !== null) {
      clonedObj[key] = deepCopyObject(objToCopy[key]);
    } else {
      clonedObj[key] = objToCopy[key];
    }
  }
  return clonedObj;
};

export { deepCopyObject };
