/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n % 2 !== 0 || n < 1) return false;

  while (n > 0) {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    n = Math.floor(n / 2);
  }
};

console.log(isPowerOfTwo(128));
