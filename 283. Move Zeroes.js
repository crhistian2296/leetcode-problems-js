/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const ZERO = 0;
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0 && nums[j] !== 0) {
        nums[i] = nums[j];
        nums[j] = ZERO;
      }
    }
  }
  return nums;
};
//Alternative
/*
var moveZeroes = function (nums) {
  let zeroCount = 0;
  const tempArr = nums.map((element) => {
    if (element !== 0) return element;
    zeroCount++;
    return null;
  });

  let filteredOutput = tempArr.filter(Boolean);
  for (zeroCount; zeroCount > 0; zeroCount--) filteredOutput.push(0);
  nums = filteredOutput;
};
Input: nums = [0, 1, 0, 3, 12];
Output: [1, 3, 12, 0, 0];
*/

console.log(moveZeroes([0, 0, 0, 1, 0, 3, 12]));
