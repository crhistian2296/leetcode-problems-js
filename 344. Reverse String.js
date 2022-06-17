/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let temp = 0;
  let length = s.length;
  for (i = 0; i < length / 2; i++) {
    temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
