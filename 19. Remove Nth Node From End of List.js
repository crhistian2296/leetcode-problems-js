/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = [];
  let length = 0;

  while (head) {
    temp.push(head.val);
    length++;
    head = head.next;
  }
  let arr = temp.reverse().filter((value, index) => index + 1 !== n);
  arr = arr.reverse();
  let falseHead = new ListNode();
  let output = falseHead;
  for (i = 0; i < length - 1; i++) {
    output.next = new ListNode(arr[i]);
    output = output.next;
  }

  return falseHead.next;
};
