/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let max = nums.length - 1;
  let min = 0;
  let mid = 0;

  while (max - min >= 1) {
    mid = Math.floor((max + min) / 2);
    if (nums[mid] < target) min = mid + 1;
    else max = mid;
  }

  if (nums[min] === target) return min;
  else if (nums[max] === target) return max;
  else if (nums[min] > target) return min;
  else return min + 1;
};

console.log(searchInsert([1, 3, 5, 6], 2));
