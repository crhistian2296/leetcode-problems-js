/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(' ');
  let output = arr.map((word) => {
    let reversed = Array.from(word);
    return reversed.reverse().join('');
  });
  return output.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
