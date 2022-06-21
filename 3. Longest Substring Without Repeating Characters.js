/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let set = new Set();
  let substrlength = 0;
  let maxSubstrlength = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      substrlength = set.size;
      maxSubstrlength = substrlength < maxSubstrlength ? maxSubstrlength : substrlength;
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  console.log(set);
  return maxSubstrlength;
};

console.log(lengthOfLongestSubstring('pwwkew'));
