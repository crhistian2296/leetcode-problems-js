/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let onesCounter = 0;

  while (n) {
    onesCounter += n % 2;
    n >>>= 1;
  }

  return onesCounter;
};
console.log(hammingWeight(00000000000000000000000000001011));
