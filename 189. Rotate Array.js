/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k > nums.length) k = k % nums.length;
  let firstPart = [];
  let secondPart = [];
  let i = 0;
  let j = 0;

  while (i < nums.length - k) {
    secondPart[i] = nums[i];
    i++;
  }
  while (i < nums.length) {
    firstPart[j] = nums[i];
    i++;
    j++;
  }

  const final = firstPart.concat(secondPart);
  i = 0;
  while (i < nums.length) {
    nums[i] = final[i];
    i++;
  }
  return nums;
};

// Input: (nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3);
// Output: [5, 6, 7, 1, 2, 3, 4];

console.log(rotate([-1, -100, 3, 99], 3));
