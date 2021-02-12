const rot13 = (string) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let decodedText = '';
  const shift = 13;
  let i = 0;
  while (i < string.length) {
    if (alphabet.indexOf(string[i]) !== -1) {
      const alphabetIndex = alphabet.indexOf((string[i]).toUpperCase());
      if (alphabet[alphabetIndex + shift]) {
        decodedText += alphabet[alphabetIndex + shift];
      } else {
        decodedText += alphabet[alphabetIndex + shift - 26];
      }
    } else {
      decodedText += string[i];
    }
    i += 1;
  }
  return decodedText;
};
export {
  rot13,
};
