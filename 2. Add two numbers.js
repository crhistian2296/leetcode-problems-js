/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   const n1 = sum(l1);
//   const n2 = sum(l2);
//   const result = n1 + n2;
//   return numToArr(result);
// };

// function sum(arr = []) {
//   if (!arr.length) return;
//   let accumulate = 0;
//   arr.map((value, index) => {
//     accumulate += value * 10 ** index;
//   });
//   return accumulate;
// }

// function numToArr(num) {
//   let arr = [];
//   const temp = num + '';
//   let len = temp.length;

//   while (len > 0) {
//     arr.push(num % 10);
//     num = Math.trunc(num / 10);
//     len--;
//   }
//   return arr;
// }

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const falseHead = new ListNode(0);
  let n1 = l1;
  let n2 = l2;
  let current = falseHead;
  let carry = 0;

  let sum = 0;
  let x = 0;
  let y = 0;

  while (n1 || n2) {
    x = n1 ? n1.val : 0;
    y = n2 ? n2.val : 0;
    sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (n1) n1 = n1.next;
    if (n2) n2 = n2.next;
  }
  if (current > 0) current.next = new ListNode(1);

  return falseHead.next;
};
