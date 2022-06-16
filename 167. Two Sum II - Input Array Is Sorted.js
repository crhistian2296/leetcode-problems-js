/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let lIndex = 0;
  let rIndex = numbers.length - 1;

  while (lIndex !== rIndex) {
    if (numbers[lIndex] + numbers[rIndex] === target) return [lIndex + 1, rIndex + 1];
    else if (numbers[lIndex] + numbers[rIndex] > target) rIndex--;
    else lIndex++;
  }
};

console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));
