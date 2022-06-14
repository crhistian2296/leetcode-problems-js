/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let max = nums.length - 1;
  let min = 0;
  let mid = 0;

  while (max - min >= 1) {
    mid = Math.floor((max + min) / 2);
    if (nums[mid] < target) min = mid + 1;
    else max = mid;
  }

  if (nums[max] === target) return max;
  if (nums[min] === target) return min;
  else return -1;
};

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], -5));
