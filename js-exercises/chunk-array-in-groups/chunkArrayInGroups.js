function chunkArrayInGroups(inputArray, chunkSize) {
  const arrayChunks = [];
  let index = 0;
  while (index < inputArray.length) {
    arrayChunks.push(inputArray.slice(index, index += chunkSize));
  }
  return arrayChunks;
}

export {
  chunkArrayInGroups,
};
