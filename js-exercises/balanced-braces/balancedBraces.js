function balancedBraces(str) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const closing = Object.values(map);
  const stack = [];
  for (const char of str) {
    if (map[char]) {
      stack.push(char);
    } else if (closing.includes(char) && char !== map[stack.pop()]) {
      return false;
    }
  }
  return !stack.length;
}
export {
  balancedBraces,
};
