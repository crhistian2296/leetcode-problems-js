/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length > 10 ** 4) return false;
  if (s.length % 2 !== 0) return false;

  let stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const openBraces = Object.values(pairs);
  const closeBraces = Object.keys(pairs);

  for (const character of s) {
    if (!openBraces.includes(character) && !closeBraces.includes(character)) return false;

    if (openBraces.includes(character)) stack.push(character);
    else {
      const top = stack.pop();
      if (pairs[character] !== top) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('{([])}'));
