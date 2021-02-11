function duplicateLetters(str) {
  let obj = {};
  let max = 0;
  for (let x = 0, length = str.length; x < length; x++) {
    var character = str.charAt(x).toLowerCase();
    obj[character] = isNaN(obj[character]) ? 1 : obj[character] + 1;
  }
  const values = Object.values(obj);

  for (let i = 0; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  return max > 1 ? max : false;
}
export { duplicateLetters };
